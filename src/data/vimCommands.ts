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
    command: 'gg',
    language: 'bash',
  },
  {
    describe: 'Go to end of the word',
    command: '<shift> $',
    language: 'bash',
  },
  {
    describe: 'Copy to register with a letter',
    command: '" + <letter> + y',
    language: 'bash',
  },
  {
    describe: 'Paste from register with a letter',
    command: '" + <letter> + p',
    language: 'bash',
  },
  {
    describe: 'Start of bracket',
    command: '[{',
    language: 'bash',
  },
  {
    describe: 'End of bracket',
    command: ']}',
    language: 'bash',
  },
  {
    describe: 'Start of round bracket',
    command: '[(',
    language: 'bash',
  },
  {
    describe: 'End of round bracket',
    command: '])',
    language: 'bash',
  },
  {
    describe: 'Move to next buffer',
    command: '<ctr> b +n',
    language: 'bash',
  },
  {
    describe: 'List all buffer',
    command: ':ls',
    language: 'bash',
  },
  {
    describe: 'Move cursor to the top of Screen',
    command: '<shift> + h',
    language: 'bash',
  },
  {
    describe: 'Move cursor to the middle of the screen',
    command: '<shift> + m',
    language: 'bash',
  },
  {
    describe: 'Move cursor to the end of the screen',
    command: '<shift>  + l',
    language: 'bash',
  },
];
