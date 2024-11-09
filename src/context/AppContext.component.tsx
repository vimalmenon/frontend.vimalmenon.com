'use client';

import React, { useState } from 'react';

import { IReactChildren } from '@types';

import { AppContext as Context } from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  return (
    <Context.Provider
      value={{
        isDark,
        setIsDark,
      }}
    >
      {children}
    </Context.Provider>
  );
};
