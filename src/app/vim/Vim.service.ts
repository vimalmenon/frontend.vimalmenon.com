import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented, apiCaller } from '@utility';
import { ICommand } from '@types';
import { API } from '@constants';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = () => {
  const { mode, setMode } = useVimContext();
  const onFormSave = async (data: ICommand): Promise<void> => {
    await apiCaller(API.PostVimData(data));
  };
  const onFormToggle = (): void => {
    setMode(mode === 'VIEW' ? 'EDIT' : 'VIEW');
  };
  return {
    mode,
    onFormSave,
    onFormToggle,
  };
};
