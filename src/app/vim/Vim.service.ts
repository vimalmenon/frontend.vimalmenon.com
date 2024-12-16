import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented } from '@utility';
import { ICommand } from '@types';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = () => {
  const { mode, setMode } = useVimContext();
  const onFormSave = (data: ICommand): void => {};
  const onFormToggle = (): void => {
    setMode(mode === 'VIEW' ? 'EDIT' : 'VIEW');
  };
  return {
    mode,
    onFormSave,
    onFormToggle,
  };
};
