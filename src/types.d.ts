import React from 'react';

export type LanguageType = 'shell' | 'bash' | 'rust' | 'javascript';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface INavigation {
  name: string;
  url: string;
}

export interface ITmuxCommand {
  describe: string;
  command: string;
  language: LanguageType;
}
