import { ICommand } from '@types';

export const linuxCommands: ICommand[] = [
  {
    describe: 'Show Process running in port',
    command: 'lsof -i:<port>',
    language: 'bash',
    tags: [],
  },
];
