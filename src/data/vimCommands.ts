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
    command: '<ctrl> q',
    language: 'bash',
  },
  {
    describe: 'Save pane',
    command: '<ctrl> s',
    language: 'bash',
  },
  {
    describe: 'Go to Edit Mode',
    command: '<space>',
    language: 'bash',
  },
  {
    describe: 'Go to End of Page',
    command: '<shift> g',
    language: 'bash',
  },
  {
    describe: 'Got to start of Page',
    command: 'g + g',
    language: 'bash',
  },
];
