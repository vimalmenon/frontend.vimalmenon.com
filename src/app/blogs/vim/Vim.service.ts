import React from 'react';
import { IUseVimSearch, IVimContext, IUseTagHelper, IUseDeleteHelper } from './Vim';
import { NotImplemented } from '@utility';
import { ICommand, InputChange } from '@types';
import { IUseVimForm } from './Vim';

export const VimContext = React.createContext<IVimContext>({
  mode: 'VIEW',
  setMode: NotImplemented,
  command: undefined,
  setCommand: NotImplemented,
  search: '',
  setSearch: NotImplemented,
  selectedTags: [],
  setSelectedTags: NotImplemented,
  commands: [],
  isCommandsError: false,
  isCommandsLoading: false,
  onFormSave: NotImplemented,
  isSaveLoading: false,
  onCommandDelete: NotImplemented,
  isDeleteLoading: false,
  tags: [],
  setTags: NotImplemented,
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = (): IUseVimForm => {
  const { mode, setMode, command, setCommand, onFormSave, isSaveLoading } = useVimContext();

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
    onFormCancel,
    isSaveLoading,
  };
};

export const useVimSearch = (): IUseVimSearch => {
  const { search, setSearch } = useVimContext();
  const onSearchChange: InputChange = (e) => {
    setSearch(e.target.value);
  };
  return {
    search,
    onSearchChange,
  };
};

export const useTagHelper = (): IUseTagHelper => {
  const { selectedTags, setSelectedTags, tags } = useVimContext();
  const onTagSelectToggle = (tag: string): void => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      selectedTags.splice(index, 1);
      setSelectedTags([...selectedTags]);
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  return {
    tags,
    selectedTags,
    onTagSelectToggle,
  };
};

export const useVimDeleteHelper = (): IUseDeleteHelper => {
  const { mode, setMode, setCommand, onCommandDelete, command, isDeleteLoading } = useVimContext();
  const onDeleteCancel = (): void => {
    setMode('VIEW');
  };
  const onDeleteConfirm = (): void => {
    onCommandDelete(command?.id);
    setCommand(undefined);
    setMode('VIEW');
  };
  const onDeleteRequest = (command: ICommand): void => {
    setMode('DELETE');
    setCommand(command);
  };
  return {
    mode,
    isDeleteLoading,
    onDeleteCancel,
    onDeleteConfirm,
    onDeleteRequest,
  };
};

export const isSearched = (
  searchedValue: string,
  command: ICommand,
  selectedTags: string[]
): boolean => {
  const isTagSelected = selectedTags.some((tag) => {
    return command.tags.includes(tag);
  });
  if (!isTagSelected) {
    return false;
  }
  if (!isTagSelected && searchedValue.trim() === '') {
    return true;
  }
  return (
    isTagSelected && command.describe.toLowerCase().includes(searchedValue.trim().toLowerCase())
  );
};
