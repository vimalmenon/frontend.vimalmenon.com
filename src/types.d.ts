import React, { Dispatch, SetStateAction } from 'react';

export type ReactSetState<T> = Dispatch<SetStateAction<T>>;

export type LanguageType = 'shell' | 'bash' | 'rust' | 'javascript';

export type AlertType = 'error' | 'success' | 'info' | 'info';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface INavigation {
  name: string;
  url: string;
  breadcrumbs: INavigation[];
}

export interface ICommand {
  id?: string;
  describe: string;
  command: string;
  language: LanguageType;
  tags: string[];
}

export type FormMode = 'VIEW' | 'EDIT' | 'ADD' | 'DELETE';

export interface IApi {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  body?: string;
}

export interface ILinkItem {
  title: string;
  content: string;
  link: string;
}

export interface IAlert {
  msg: string;
  alert: AlertType;
}

export type InputChange = React.ChangeEventHandler<HTMLTextAreaElement>;
