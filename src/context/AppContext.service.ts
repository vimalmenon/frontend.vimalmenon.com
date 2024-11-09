import React from 'react';
import { NotImplemented } from '@utility';
import { IAppContext } from './AppContext';

export const initialValue: IAppContext = {
  isDark: true,
  setIsDark: NotImplemented,
};

export const AppContext = React.createContext<IAppContext>(initialValue);
