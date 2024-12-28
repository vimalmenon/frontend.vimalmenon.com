import { FormMode, ICommand, InputChange, IReactChildren, ICommandTag } from '@types';
import { Dispatch, SetStateAction } from 'react';

export interface IVimContext {
  mode: FormMode;
  setMode: Dispatch<SetStateAction<FormMode>>;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedTags: ICommandTag[];
  setSelectedTags: Dispatch<SetStateAction<ICommandTag[]>>;
  commands: ICommand[];
  isCommandsLoading: boolean;
  isCommandsError: boolean;
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
export interface IUseTagHelper {
  selectedTags: ICommandTag[];
  onTagSelect: (index: number) => void;
}

export interface IUseVimSearch {
  search: string;
  onSearchChange: InputChange;
}
