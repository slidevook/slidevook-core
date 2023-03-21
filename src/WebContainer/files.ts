import fs from 'fs';

import { FileSystemTree } from "@webcontainer/api";
const packageJson  = fs.readFileSync('./files/package.json?raw', 'utf-8');
const viteConfigTs = fs.readFileSync('./files/vite.config.ts.txt?raw', 'utf-8');
const indexHtml    = fs.readFileSync('./files/index.html?raw', 'utf-8');

const stylesIndexTs             = fs.readFileSync('./files/styles/index.ts?raw', 'utf-8');
const stylesSlidevookDefaultCss = fs.readFileSync('./files/styles/slidevookDefault.css?raw', 'utf-8');

const slidesMarkdown     = fs.readFileSync('./files/slides.md?raw', 'utf-8');
const titleMd            = fs.readFileSync('./files/pages/title.md?raw', 'utf-8');
const slidevookSamplesMd = fs.readFileSync('./files/pages/slidevookSamples.md?raw', 'utf-8');

const globalTopVue    = fs.readFileSync('./files/global-top.vue?raw', 'utf-8');
const globalBottomVue = fs.readFileSync('./files/global-bottom.vue?raw', 'utf-8');

const CoverLeftVue      = fs.readFileSync('./files/layouts/CoverLeft.vue.txt?raw', 'utf-8');
const CoverRightVue     = fs.readFileSync('./files/layouts/CoverRight.vue.txt?raw', 'utf-8');
const CenterImageVue    = fs.readFileSync('./files/layouts/CenterImage.vue.txt?raw', 'utf-8');
const LeftRightImageVue = fs.readFileSync('./files/layouts/LeftRightImage.vue.txt?raw', 'utf-8');
const RightImageVue     = fs.readFileSync('./files/layouts/RightImage.vue.txt?raw', 'utf-8');
const LeftImageVue      = fs.readFileSync('./files/layouts/LeftImage.vue.txt?raw', 'utf-8');
const TopBottomImageVue = fs.readFileSync('./files/layouts/TopBottomImage.vue.txt?raw', 'utf-8');
const Column2Vue        = fs.readFileSync('./files/layouts/Column2.vue.txt?raw', 'utf-8');
const Column2CenterVue  = fs.readFileSync('./files/layouts/Column2Center.vue.txt?raw', 'utf-8');
const Column3Vue        = fs.readFileSync('./files/layouts/Column3.vue.txt?raw', 'utf-8');
const Column3CenterVue  = fs.readFileSync('./files/layouts/Column3Center.vue.txt?raw', 'utf-8');
const Square4Vue        = fs.readFileSync('./files/layouts/Square4.vue.txt?raw', 'utf-8');
const Square4CenterVue  = fs.readFileSync('./files/layouts/Square4Center.vue.txt?raw', 'utf-8');

export const files:FileSystemTree = {
  layouts: {
    directory: {
      'CoverLeft.vue': {
        file: {
          contents: CoverLeftVue
        }
      },
      'CoverRight.vue': {
        file: {
          contents: CoverRightVue
        }
      },
      'CenterImage.vue': {
        file: {
          contents: CenterImageVue
        }
      },
      'LeftRightImage.vue': {
        file: {
          contents: LeftRightImageVue
        }
      },
      'RightImage.vue': {
        file: {
          contents: RightImageVue
        }
      },
      'LeftImage.vue': {
        file: {
          contents: LeftImageVue
        }
      },
      'TopBottomImage.vue': {
        file: {
          contents: TopBottomImageVue
        }
      },
      'Column2.vue': {
        file: {
          contents: Column2Vue
        }
      },
      'Column2Center.vue': {
        file: {
          contents: Column2CenterVue
        }
      },
      'Column3.vue': {
        file: {
          contents: Column3Vue
        }
      },
      'Column3Center.vue': {
        file: {
          contents: Column3CenterVue
        }
      },
      'Square4.vue': {
        file: {
          contents: Square4Vue
        }
      },
      'Square4Center.vue': {
        file: {
          contents: Square4CenterVue
        }
      },
    }
  },
  'package.json': {
    file: {
      contents: packageJson
    },
  },
  public: {
    directory: {
    }
  },
  styles: {
    directory: {
      'index.ts': {
        file: {
          contents: stylesIndexTs
        }
      },
      'slidevookDefault.css': {
        file: {
          contents: stylesSlidevookDefaultCss
        }
      },
    }
  },
  'vite.config.ts': {
    file: {
      contents: viteConfigTs
    },
  },
  'index.html': {
    file: {
      contents: indexHtml
    },
  },
  'global-top.vue': {
    file: {
      contents: globalTopVue
    }
  },
  'global-bottom.vue': {
    file: {
      contents: globalBottomVue
    }
  },
  'slides.md': {
    file: {
      contents: slidesMarkdown
    },
  },
  pages: {
    directory: {
      'slidevookSamples.md': {
        file: {
          contents: slidevookSamplesMd
        },
      },
      'title.md': {
        file: {
          contents: titleMd
        }
      }
    }
  }
};