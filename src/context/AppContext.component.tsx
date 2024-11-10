'use client';

import React, { useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { IReactChildren } from '@types';
import { generateTheme } from '@utility';

import { AppContext as Context } from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const theme = generateTheme(!isDark);
  return (
    <Context.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Context.Provider>
  );
};
