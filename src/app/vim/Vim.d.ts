import { FormMode, ICommand } from '@types';
import { Dispatch, SetStateAction } from 'react';

export interface IVimContext {
  mode: FormMode;
  setMode: Dispatch<SetStateAction<FormMode>>;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
}

export interface IUseVimForm {
  mode: FormMode;
  onFormSave: (data: ICommand) => Promise<void>;
  onFormToggle: () => void;
  onCommandDelete: (id?: string) => void;
}
