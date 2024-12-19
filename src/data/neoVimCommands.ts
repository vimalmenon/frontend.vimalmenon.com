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
    describe: 'Toggle hidden item in navigation',
    command: '<shift> h',
    language: 'bash',
  },
  {
    describe: 'Open lazy git',
    command: '<space> lg',
    language: 'bash',
  },
  {
    describe: 'Toggle between corresponding brackets',
    command: '%',
    language: 'bash',
  },
  {
    describe: 'Add value to multiple lines',
    command: '<ctrl> v + action',
    language: 'bash',
  },
  {
    describe: 'Open a Link in browser',
    command: 'g x',
    language: 'bash',
  },
  {
    describe: 'Open a file in nvim',
    command: 'g f',
    language: 'bash',
  },
  {
    describe: 'Comment the code',
    command: 'g c',
    language: 'bash',
  },
  {
    describe: 'Change the case',
    command: '~',
    language: 'bash',
  },
  {
    describe: 'Check the error in the line',
    command: '<space> q',
    language: 'bash',
  },
];
