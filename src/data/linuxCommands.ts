import { ICommand } from '@types';

export const linuxCommands: ICommand[] = [
  {
    describe: 'Show Process running in port',
    command: 'lsof -i:<port>',
    language: 'bash',
    tags: [],
  },
  {
    describe: 'Go to previous directory',
    command: '-',
    language: 'bash',
    tags: [],
  },
  {
    describe: 'Scan for IP Address in subnet',
    command: 'nmap -sP 192.168.128.0/24',
    language: 'bash',
    tags: [],
  },
];

