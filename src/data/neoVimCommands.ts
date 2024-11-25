import { ICommand } from '@types';

export const NeoVimCommands: ICommand[] = [
  {
    describe: 'Show Buffers in telescope',
    command: 'space space',
    language: 'bash',
  },
  {
    describe: 'Show navigation tree',
    command: '\\',
    language: 'bash',
  },
  {
    describe: 'Refresh the buffer',
    command: 'F5',
    language: 'bash',
  },
];
