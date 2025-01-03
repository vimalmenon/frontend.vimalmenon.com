import { FormMode, ICommand, InputChange, IReactChildren } from '@types';
import { Dispatch, SetStateAction } from 'react';

export interface IVimContext {
  mode: FormMode;
  setMode: Dispatch<SetStateAction<FormMode>>;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  commands: ICommand[];
  isCommandsLoading: boolean;
  isCommandsError: boolean;
  onFormSave: (data: ICommand) => void;
  isSaveLoading: boolean;
  onCommandDelete: (id?: string) => void;
  isDeleteLoading: boolean;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

export interface IContext extends IReactChildren {
  commands: ICommand[];
}

export interface IUseVimForm {
  mode: FormMode;
  command: ICommand | undefined;
  setCommand: Dispatch<SetStateAction<ICommand | undefined>>;
  onFormSave: (data: ICommand) => void;
  onFormEdit: (data: ICommand) => void;
  onFormAdd: () => void;
  onFormCancel: () => void;
  isSaveLoading: boolean;
}
export interface IUseTagHelper {
  tags: string[];
  selectedTags: string[];
  onTagSelectToggle: (tag: string) => void;
}

export interface IUseVimSearch {
  search: string;
  onSearchChange: InputChange;
}

export interface IUseDeleteHelper {
  mode: FormMode;
  isDeleteLoading: boolean;
  onDeleteRequest: (command: ICommand) => void;
  onDeleteConfirm: () => void;
  onDeleteCancel: () => void;
}
