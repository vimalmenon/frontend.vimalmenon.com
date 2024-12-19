import { ICommand } from '@types';

export const VimCommands: ICommand[] = [
  {
    describe: 'Start Vim from current folder',
    command: 'vim .',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Switch between window',
    command: '<ctrl> w + <UP | DOWN | RIGHT | LEFT>',
    language: 'bash',
  },
  {
    describe: 'Quit pane',
    command: '<ctrl> + q',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Save pane',
    command: '<ctrl> s',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Go to end of the page',
    command: '<shift> g',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Go to start of the page',
    command: 'gg',
    language: 'bash',
    hidden: true,
  },
  {
    describe: 'Go to end of the word',
    command: '$',
    language: 'bash',
    hidden: true,
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
    command: '<shift> + l',
    language: 'bash',
  },
  {
    describe: 'Vertical Split',
    command: '<ctr> w + v',
    language: 'bash',
  },
  {
    describe: 'Horizontal Split',
    command: '<ctr> w + s',
    language: 'bash',
  },
  {
    describe: 'Indent Line',
    command: '= =',
    language: 'bash',
  },
  {
    describe: 'Keep the cursor in middle',
    command: 'z z',
    language: 'bash',
  },
  {
    describe: 'Keep the cursor in top',
    command: 'z t',
    language: 'bash',
  },
  {
    describe: 'Keep the cursor in bottom',
    command: 'z b',
    language: 'bash',
  },
  {
    describe: 'Search on selected word that is selected',
    command: '*',
    language: 'bash',
  },
  {
    describe: 'Visually select the Hightlight word',
    command: 'g n',
    language: 'bash',
  },
  {
    describe: 'Perform the last operation',
    command: '.',
    language: 'bash',
  },
  {
    describe: 'Visually select inside bracket',
    command: 'v a }',
    language: 'bash',
  },
  {
    describe: 'Visually select inside bracket',
    command: 'v a B',
    language: 'bash',
  },
  {
    describe: 'Search for a file',
    command: '<ctrl> f',
    language: 'bash',
  },
  {
    describe: 'Go to <letter> forwards',
    command: 'f <letter>',
    language: 'bash',
  },
  {
    describe: 'Go to <letter> backwards',
    command: 'F <letter>',
    language: 'bash',
  },
  {
    describe: 'Go to end of line',
    command: '$',
    language: 'bash',
  },
  {
    describe: 'Go to start of line',
    command: '^',
    language: 'bash',
  },
  {
    describe: 'Go to beginning of line',
    command: '0',
    language: 'bash',
  },
  {
    describe: 'Insert new line at end',
    command: 'o',
    language: 'bash',
  },
  {
    describe: 'Insert new line at beginning',
    command: 'O',
    language: 'bash',
  },
  {
    describe: 'Insert mode at the beginning of Line',
    command: 'I',
    language: 'bash',
  },
  {
    describe: 'Insert mode at the end of line',
    command: 'A',
    language: 'bash',
  },
  {
    describe: 'Move cursor one line at top',
    command: '<ctrl> e',
    language: 'bash',
  },
  {
    describe: 'Move cursor one line to botom',
    command: '<ctrl> y',
    language: 'bash',
  },
  {
    describe: 'Move the screen one page down',
    command: '<ctrl> b',
    language: 'bash',
  },
  {
    describe: 'Insert mode at the end of line',
    command: 'A',
    language: 'bash',
  },
  {
    describe: 'Search and find for a reference',
    command: 'g r',
    language: 'bash',
  },
  {
    describe: 'Find the declaration for a reference',
    command: 'g d',
    language: 'bash',
  },
];
