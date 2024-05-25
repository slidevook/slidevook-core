import { FileSystemTree } from "@webcontainer/api";

import stylesIndexTs             from './files/styles/index.ts?raw';
import stylesSlidevookDefaultCss from './files/styles/slidevookDefault.css?raw';

import slidesMarkdown     from './files/slides.md?raw';
import titleMd            from './files/pages/title.md?raw';
import slidevookSamplesMd from './files/pages/slidevookSamples.md?raw'

import packageJson     from './files/package.json?raw';
import packageLockJson from './files/package-lock.json?raw';
import viteConfigTs    from './files/vite.config.ts?raw';
import indexHtml       from './files/index.html?raw';
import globalTopVue    from './files/global-top.vue?raw';
import globalBottomVue from './files/global-bottom.vue?raw';

import CoverLeftVue      from './files/layouts/CoverLeft.vue?raw';
import CoverRightVue     from './files/layouts/CoverRight.vue?raw';
import CenterImageVue    from './files/layouts/CenterImage.vue?raw';
import LeftRightImageVue from './files/layouts/LeftRightImage.vue?raw';
import RightImageVue     from './files/layouts/RightImage.vue?raw';
import RightImage2By1    from './files/layouts/RightImage2By1.vue?raw';
import LeftImageVue      from './files/layouts/LeftImage.vue?raw';
import TopBottomImageVue from './files/layouts/TopBottomImage.vue?raw';
import Column2Vue        from './files/layouts/Column2.vue?raw';
import Column2VueCenter  from './files/layouts/Column2Center.vue?raw';
import Column3Vue        from './files/layouts/Column3.vue?raw';
import Column3VueCenter  from './files/layouts/Column3Center.vue?raw';
import Square4Vue        from './files/layouts/Square4.vue?raw';
import Square4VueCenter  from './files/layouts/Square4Center.vue?raw';

export const files:FileSystemTree = {
  components: { directory: {} },
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
      'LeftImage.vue': {
        file: {
          contents: LeftImageVue
        }
      },
      'RightImage.vue': {
        file: {
          contents: RightImageVue
        }
      },
      'RightImage2By1.vue': {
        file: {
          contents: RightImage2By1
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
          contents: Column2VueCenter
        }
      },
      'Column3.vue': {
        file: {
          contents: Column3Vue
        }
      },
      'Column3Center.vue': {
        file: {
          contents: Column3VueCenter
        }
      },
      'Square4.vue': {
        file: {
          contents: Square4Vue
        }
      },
      'Square4Center.vue': {
        file: {
          contents: Square4VueCenter
        }
      },
    }
  },
  public: { directory: {} },
  setup: { directory: {} },
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
  'package.json': {
    file: {
      contents: packageJson
    },
  },
  'package-lock.json': {
    file: {
      contents: packageLockJson
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