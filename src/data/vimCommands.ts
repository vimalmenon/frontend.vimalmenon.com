import { ICommand } from '@types';

export const VimCommands: ICommand[] = [
  {
    describe: 'Start Vim from current folder',
    command: 'vim .',
    language: 'bash',
  },
  {
    describe: 'Show explorer',
    command: '<f5>',
    language: 'bash',
  },
  {
    describe: 'Switch between window',
    command: '<ctrl> w + <UP | DOWN | RIGHT | LEFT>',
    language: 'bash',
  },
  {
    describe: 'Quit pane',
    command: '<ctrl> a',
    language: 'bash',
  },
  {
    describe: 'Save pane',
    command: '<ctrl> s',
    language: 'bash',
  },
];
