import fs from 'fs';

import { FileSystemTree } from "@webcontainer/api";
const packageJson             = fs.readFileSync('./files/package.json?raw', 'utf-8');

const stylesIndexTs             = fs.readFileSync('./files/styles/index.ts?raw', 'utf-8');
const stylesSlidevookDefaultCss = fs.readFileSync('./files/styles/slidevookDefault.css?raw', 'utf-8');

const slidesMarkdown          = fs.readFileSync('./files/slides.md?raw', 'utf-8');
const multipleEntriesMarkdown = fs.readFileSync('./files/pages/multiple-entries.md?raw', 'utf-8');
const titleAndConfigMarkdown  = fs.readFileSync('./files/pages/title-and-config.md?raw', 'utf-8');

const CoverLeftVue      = fs.readFileSync('./files/layouts/CoverLeft.vue.txt?raw', 'utf-8');
const CoverRightVue     = fs.readFileSync('./files/layouts/CoverRight.vue.txt?raw', 'utf-8');
const CenterImageVue    = fs.readFileSync('./files/layouts/CenterImage.vue.txt?raw', 'utf-8');
const LeftRightImageVue = fs.readFileSync('./files/layouts/LeftRightImage.vue.txt?raw', 'utf-8');
const RightImageVue     = fs.readFileSync('./files/layouts/RightImage.vue.txt?raw', 'utf-8');
const LeftImageVue      = fs.readFileSync('./files/layouts/LeftImage.vue.txt?raw', 'utf-8');
const TopBottomImageVue = fs.readFileSync('./files/layouts/TopBottomImage.vue.txt?raw', 'utf-8');
const Column3Vue        = fs.readFileSync('./files/layouts/Column3.vue.txt?raw', 'utf-8');
const Column3CenterVue  = fs.readFileSync('./files/layouts/Column3Center.vue.txt?raw', 'utf-8');

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
    }
  },
  'package.json': {
    file: {
      contents: packageJson
    },
  },
  'slides.md': {
    file: {
      contents: slidesMarkdown
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
  pages: {
    directory: {
      'multiple-entries.md': {
        file: {
          contents: multipleEntriesMarkdown
        },
      },
      'title-and-config.md': {
        file: {
          contents: titleAndConfigMarkdown
        }
      }
    }
  }
};