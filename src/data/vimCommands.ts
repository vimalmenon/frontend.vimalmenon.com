import { ICommand } from '@types';

export const VimCommands: ICommand[] = [
  {
    describe: 'Start Vim from current folder',
    command: 'vim .',
    language: 'bash',
  },
];
