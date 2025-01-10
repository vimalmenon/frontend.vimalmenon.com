import { IAlert, IReactChildren } from '@types';
import { Context } from './Vim.service';
import { useState } from 'react';

export const VimContext: React.FC<IReactChildren> = ({ children }) => {
  const [alert, setAlert] = useState<IAlert>();
  return (
    <Context.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {children}
    </Context.Provider>
  );
};
