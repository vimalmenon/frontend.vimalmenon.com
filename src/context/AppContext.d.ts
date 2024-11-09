import React from 'react';
export interface IAppContext {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUseThemeHelper {
  isDark: boolean;
  toggleTheme: () => void;
}
