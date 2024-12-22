import { FormMode, ICommand, InputChange, IReactChildren, ITags } from '@types';
import { Dispatch, SetStateAction } from 'react';

export interface IVimContext {
  mode: FormMode;
  setMode: Dispatch<SetStateAction<FormMode>>;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  selectedTags: ITags[];
}

export interface IContext extends IReactChildren {
  commands: ICommand[];
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
