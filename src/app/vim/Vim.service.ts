import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented, apiCaller } from '@utility';
import { ICommand } from '@types';
import { API } from '@constants';
import { IUseVimForm } from './Vim';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = (): IUseVimForm => {
  const { mode, setMode } = useVimContext();
  const onFormSave = async (data: ICommand): Promise<void> => {
    await apiCaller(API.PostVimData(data));
  };
  const onFormToggle = (): void => {
    setMode(mode === 'VIEW' ? 'EDIT' : 'VIEW');
  };
  const onCommandDelete = async (id?: string): Promise<void> => {
    if (id) {
      await apiCaller(API.DeleteVimData(id));
    }
  };
  return {
    mode,
    onFormSave,
    onFormToggle,
    onCommandDelete,
  };
};
