import React from 'react';

export type LanguageType = 'shell' | 'bash' | 'rust' | 'javascript';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface INavigation {
  name: string;
  url: string;
  navigations: INavigation[];
}

export interface ICommand {
  id?: string;
  describe: string;
  command: string;
  language: LanguageType;
  tags: string[];
}

export type FormMode = 'VIEW' | 'EDIT' | 'ADD';

export interface IApi {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: string;
}
export interface ITags {
  name: string;
  selected: boolean;
}

export type InputChange = React.ChangeEventHandler<HTMLTextAreaElement>;
