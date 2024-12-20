import { FormMode, ICommand, InputChange } from '@types';
import { Dispatch, SetStateAction } from 'react';

export interface IVimContext {
  mode: FormMode;
  setMode: Dispatch<SetStateAction<FormMode>>;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface IUseVimForm {
  mode: FormMode;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  onFormSave: (data: ICommand) => Promise<void>;
  onCommandDelete: (id?: string) => void;
  onFormEdit: (data: ICommand) => void;
  onFormAdd: () => void;
  onFormCancel: () => void;
}

export interface IUseVimSearch {
  search: string;
  onSearchChange: InputChange;
}
