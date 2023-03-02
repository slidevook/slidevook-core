import fs from 'fs';

import { FileSystemTree } from "@webcontainer/api";
const packageJson             = fs.readFileSync('./files/package.json?raw', 'utf-8');
const slidesMarkdown          = fs.readFileSync('./files/slides.md?raw', 'utf-8');
const multipleEntriesMarkdown = fs.readFileSync('./files/pages/multiple-entries.md?raw', 'utf-8');
const titleAndConfigMarkdown  = fs.readFileSync('./files/pages/title-and-config.md?raw', 'utf-8');

export const files:FileSystemTree = {
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