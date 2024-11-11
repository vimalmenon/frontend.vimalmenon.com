import { ITmuxCommand } from '@types';

export const TmuxCommands: ITmuxCommand[] = [
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
    describe: 'Attach to a session with number',
    command: 'tmux attach -t <name>',
    language: 'bash',
  },
  {
    describe: 'Command key',
    command: '<ctrl> b',
    language: 'bash',
  },
  {
    describe: 'Detach from session',
    command: '<ctrl> b + d',
    language: 'bash',
  },
  {
    describe: 'Show Time',
    command: '<ctrl> b + t',
    language: 'bash',
  },
];
