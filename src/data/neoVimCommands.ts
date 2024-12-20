import { ICommand } from '@types';

export const NeoVimCommands: ICommand[] = [
  {
    describe: 'Show Buffers in telescope',
    command: '<space> <space>',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Show navigation tree',
    command: '\\',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Refresh the buffer',
    command: '<F5>',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Virtually select all',
    command: '<ctrl> a',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Copy the current line',
    command: 'yy',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Toggle hidden item in navigation',
    command: '<shift> h',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Open lazy git',
    command: '<space> lg',
    language: 'bash',
    hidden: true,
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
    hidden: true,
  },
  {
    describe: 'Check the error in the line',
    command: '<space> q',
    language: 'bash',
  },
];
