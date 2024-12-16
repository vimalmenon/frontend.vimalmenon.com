import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented } from '@utility';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = () => {
  const { mode } = useVimContext();
  const onFormSave = (data: ICommand): void => {};
  return {
    mode,
    onFormSave,
  };
};
