import { DirEnt, WebContainer } from '@webcontainer/api';
import TreeNode from 'primereact/treenode';
import { files } from '../../WebContainer/files';

export const createWebContainerInstance = async (setWebContainerServerUrlState:React.Dispatch<React.SetStateAction<string | undefined>>) => {

  const webcontainerInstancePromise = WebContainer.boot();
  webcontainerInstancePromise.then( (webContainerInstance) => {
    console.log('Initializing WebContainer start...');
    // Wait for `server-ready` event
    webContainerInstance.on('server-ready', async (port, url) => {
      console.log('server is ready!!!!!');
      console.log(`port: ${port} url: ${url}`);
      setWebContainerServerUrlState(url);
    });
    // Wait for `server-ready` event
    webContainerInstance.on('error', async (error) => {
      console.warn('server is error!!!!!');
      console.warn(error);
      console.warn(error.message);
    });

    console.log('Initializing WebContainer end...');

    return webContainerInstance;
  }).then( (webContainerInstance) => {
    startSlidevServer(webContainerInstance);

  })

  return await webcontainerInstancePromise;
}

const spawnCommand = async (webcontainerInstance:WebContainer, command:string, options:string[], displayLog = true) => {
  const process = await webcontainerInstance.spawn(command, options);

  if(displayLog) {
    process.output.pipeTo(new WritableStream({
      write(data) {
        console.log(data);
      }
    }));
  }

  return process;
}

// NOTE: cannot execute on WebContaienr cause cannot installing playwright-chromium
export const exportSlideToPDF = async (webcontainerInstance:WebContainer|undefined):Promise<number> => {
  if (!webcontainerInstance) return 1;

  const slidevExportProcess = await spawnCommand(webcontainerInstance, 'npm', ['run', 'slidev:export']);
  return await slidevExportProcess.exit
}

export const exportSlideToSPA = async (webcontainerInstance:WebContainer|undefined):Promise<number> => {
  if (!webcontainerInstance) return 1;

  const slidevBuildProcess = await spawnCommand(webcontainerInstance, 'npm', ['run', 'slidev:build']);
  if( (await slidevBuildProcess.exit) === 0 ) {
    const archiveProcess = await spawnCommand(webcontainerInstance, 'npm', ['run', 'archive']);
    return (await archiveProcess.exit);
  }
  return 1;
}

const startSlidevServer = async (webcontainerInstance:WebContainer) => {
  // Call only once
  await webcontainerInstance.mount(files);

  const packageJSON = await webcontainerInstance.fs.readFile('package.json', 'utf-8');
  console.debug(packageJSON);

  const installProcess = await spawnCommand(webcontainerInstance, 'npm', ['install']);
  // const installProcess = await webcontainerInstance.spawn('pnpm', ['install']);

  if (await installProcess.exit !== 0) {
    throw new Error('Installation failed');
  };

  console.log('npm run slidev start!!!');
  const slidevStartProcess = await spawnCommand( webcontainerInstance, 'npm', ['run', 'slidev'], false);

  if (await slidevStartProcess .exit !== 0) {
    throw new Error('Starting Server failed');
  };

  return webcontainerInstance;
};

type TreeNodeIF = TreeNode & {
  path: string
}

export const buildTree = async (webContainerInstance:WebContainer, rootDir: string) => {
  const rootNode:TreeNodeIF = {
    path: rootDir,
    key: rootDir,
    label: rootDir,
    icon: 'pi pi-fw pi-folder',
    expanded: undefined,
    children: [],
    id: `${rootDir}-${new Date().getTime()}`,
  };
  return buildSubTree(webContainerInstance, rootNode);
}

const buildSubTree = async (webContainerInstance:WebContainer, parentNode:TreeNodeIF) => {
  console.log(parentNode.path);
  const children = await webContainerInstance.fs.readdir(parentNode.path, {'encoding': 'utf8', 'withFileTypes': true})
  console.debug(children);
  for (const child of children) {
    if(child.name.match(/node_modules|pnpm-lock.y[a]ml|package.json|package-lock.json/)) continue;

    const parentNodePath = parentNode.path.endsWith('/') ? parentNode.path : `${parentNode.path}/`

    const childPath = `${parentNodePath}${child.name}`;
    console.log(childPath);
    const childNode:TreeNodeIF = {
       path: childPath,
       key: childPath,
       label: child.name,
       icon: detectIconClass(child),
       expanded: undefined,
       children: [],
       id: `${childPath}-${new Date().getTime()}`,
    };
    if(parentNode.children) parentNode.children.push(childNode);
    if( child.isDirectory() ) {
      buildSubTree(webContainerInstance, childNode);
    }
  }
  return parentNode;
}

const detectIconClass = (dirent:DirEnt<String>) => {
  const iconClass = dirent.isDirectory() ? 'pi-folder' : 'pi-file';
  return `pi pi-fw ${iconClass}`;
}

export const loadDownloadTargetBinaryData = async (webContainerInstance:WebContainer|undefined, downloadTargetFilePath:string) => {
  const fileData = await webContainerInstance!.fs.readFile(downloadTargetFilePath);
  return fileData;
}

export const saveMarkdownContent = async (webContainerInstance:WebContainer|undefined, targetMarkdownPath:string, editorContent:string) => {
  console.debug(targetMarkdownPath);
  if(!webContainerInstance) return;
  await webContainerInstance.fs.writeFile(targetMarkdownPath, editorContent, {encoding: 'utf8'});
}

export const loadMarkdownContent = async (webContainerInstance:WebContainer|undefined, targetMarkdownPath:string) => {
  console.debug(targetMarkdownPath);
  if(!webContainerInstance) return;
  return await webContainerInstance.fs.readFile(targetMarkdownPath, 'utf-8');
}

export const uploadImageFile = async (webContainerInstance:WebContainer|undefined, imageFile:File|null):Promise<string|undefined> => {
  console.log(imageFile);
  if(!imageFile) return;
  if(!webContainerInstance) return;

  const generatedRelativePath = `${new Date().getTime()}.png`;
  const generatedAbsolutePath = `/public/${generatedRelativePath}`;
  console.log(generatedAbsolutePath);

  const imageFileArrayBuffer = await imageFile.arrayBuffer().catch( (e) => console.error(e));
  if(imageFileArrayBuffer) {
    await webContainerInstance.fs.writeFile(generatedAbsolutePath, new Uint8Array(imageFileArrayBuffer));
    return generatedRelativePath;
  }

  return 'cannot write file!!!';
}