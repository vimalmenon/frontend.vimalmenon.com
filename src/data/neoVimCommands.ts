import { ICommand } from '@types';

export const NeoVimCommands: ICommand[] = [
  {
    describe: 'Show Buffers in telescope',
    command: '<space> <space>',
    language: 'bash',
  },
  {
    describe: 'Show navigation tree',
    command: '\\',
    language: 'bash',
  },
  {
    describe: 'Refresh the buffer',
    command: '<F5>',
    language: 'bash',
  },
  {
    describe: 'Virtually select all',
    command: '<ctrl> a',
    language: 'bash',
  },
  {
    describe: 'Copy the current line',
    command: 'yy',
    language: 'bash',
  },
  {
    describe: 'Open lazy git',
    command: '<space> lg',
    language: 'bash',
  }
];
