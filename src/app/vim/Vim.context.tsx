'use client';

import { VimContext as Context } from './Vim.service';
import { IReactChildren, FormMode } from '@types';
import { useState } from 'react';

export const VimContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  return (
    <Context.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
