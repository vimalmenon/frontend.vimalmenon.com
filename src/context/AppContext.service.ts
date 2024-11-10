'use client';

import { IAppContext, IUseThemeHelper } from './AppContext';

import { NotImplemented } from '@utility';
import React from 'react';

export const initialValue: IAppContext = {
  isDark: true,
  setIsDark: NotImplemented,
};

export const AppContext = React.createContext<IAppContext>(initialValue);

export const useAppContext = (): IAppContext => {
  return React.useContext(AppContext);
};

export const useThemeHelper = (): IUseThemeHelper => {
  const { isDark, setIsDark } = useAppContext();
  const toggleTheme = (): void => {
    setIsDark(!isDark);
  };
  return {
    isDark,
    toggleTheme,
  };
};
