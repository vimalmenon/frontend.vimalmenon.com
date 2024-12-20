'use client';

import { VimContext as Context } from './Vim.service';
import { IReactChildren, FormMode, ICommand } from '@types';
import { useState } from 'react';

export const VimContext: React.FC<IReactChildren> = ({ children }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  const [search, setSearch] = useState<string>('');
  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        command,
        setCommand,
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
