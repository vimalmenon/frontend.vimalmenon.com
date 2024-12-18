import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented, apiCaller } from '@utility';
import { ICommand } from '@types';
import { API } from '@constants';
import { IUseVimForm } from './Vim';
import { useRouter } from 'next/navigation';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
  command: undefined,
  setCommand: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = (): IUseVimForm => {
  const { mode, setMode, command, setCommand } = useVimContext();
  const { refresh } = useRouter();
  const onFormSave = async (data: ICommand): Promise<void> => {
    await apiCaller(API.PostVimData(data));
    refresh();
    setMode('VIEW');
  };
  const onCommandDelete = async (id?: string): Promise<void> => {
    if (id) {
      await apiCaller(API.DeleteVimData(id));
      refresh();
    }
  };
  const onFormEdit = (data: ICommand): void => {
    setCommand(data);
    setMode('EDIT');
  };
  const onFormAdd = (): void => {
    setCommand(undefined);
    setMode('ADD');
  };
  const onFormCancel = (): void => {
    setMode('VIEW');
  };
  return {
    mode,
    command,
    setCommand,
    onFormSave,
    onFormEdit,
    onFormAdd,
    onCommandDelete,
    onFormCancel,
  };
};
