import { ICommand } from '@types';

export const TmuxCommands: ICommand[] = [
  {
    describe: 'Start a session',
    command: 'tmux',
    language: 'bash',
  },
  {
    describe: 'Start a session with name',
    command: 'tmux new -s <name>',
    language: 'bash',
  },
  {
    describe: 'List all sessions',
    command: 'tmux ls',
    language: 'bash',
  },
  {
    describe: 'Attach to a session with Name',
    command: 'tmux attach -t <name>',
    language: 'bash',
  },
  {
    describe: 'Command key',
    command: '<ctrl> b',
    language: 'bash',
  },
  {
    describe: 'Kill Session inside Tmux',
    command: '<ctrl> b + : kill-session',
    language: 'bash',
  },
  {
    describe: 'Detach from session',
    command: '<ctrl> b + d',
    language: 'bash',
  },
  {
    describe: 'List session inside tmux',
    command: '<ctrl> b + s',
    language: 'bash',
  },
  {
    describe: 'List windows inside tmux',
    command: '<ctrl> b + w',
    language: 'bash',
  },
  {
    describe: 'Rename session',
    command: '<ctrl> b + $',
    language: 'bash',
  },
  {
    describe: 'Create window',
    command: '<ctrl> b + c',
    language: 'bash',
  },
  {
    describe: 'List Window',
    command: '<ctrl> b + w',
    language: 'bash',
  },
  {
    describe: 'Rename a window',
    command: '<ctrl> b + ,',
    language: 'bash',
  },
  {
    describe: 'Going to Specific Window with name',
    command: "<ctrl> b + ' <name>",
    language: 'bash',
  },
  {
    describe: 'Kill Window',
    command: '<ctrl> b + &',
    language: 'bash',
  },
  {
    describe: 'Next window',
    command: '<ctrl> b + n',
    language: 'bash',
  },
  {
    describe: 'Previous window',
    command: '<ctrl> b + p',
    language: 'bash',
  },
  {
    describe: 'Show Time',
    command: '<ctrl> b + t',
    language: 'bash',
  },
  {
    describe: 'Vertical Split Pane',
    command: '<ctrl> b + %',
    language: 'bash',
  },

  {
    describe: 'Horizontal Split Pane',
    command: '<ctrl> b + "',
    language: 'bash',
  },
  {
    describe: 'Navigate to Pane',
    command: '<ctrl> b + <UP | DOWN | Right | LEFT>',
    language: 'bash',
  },
  {
    describe: 'Convert to window',
    command: '<ctrl> b + !',
    language: 'bash',
  },
  {
    describe: 'Move Pane to window',
    command: '<ctrl> b + !',
    language: 'bash',
  },
  {
    describe: 'kill Pane',
    command: '<ctrl> b + x',
    language: 'bash',
  },
  {
    describe: 'Move the panel',
    command: '<ctrl> b + m & <go to window><ctrl> b + :join-pane',
    language: 'bash',
  },
  {
    describe: 'Help Command',
    command: '<ctrl> b + ?',
    language: 'bash',
  },
];
