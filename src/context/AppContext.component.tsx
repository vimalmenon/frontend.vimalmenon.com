'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { IReactChildren } from '@types';
import { ThemeProvider } from '@mui/material/styles';
import { generateTheme } from '@utility';

import { AppContext as Context } from './AppContext.service';

const queryClient = new QueryClient();

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const theme = generateTheme(!isDark);
  return (
    <QueryClientProvider client={queryClient}>
      <Context.Provider
        value={{
          isDark,
          setIsDark,
        }}
      >
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Context.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
