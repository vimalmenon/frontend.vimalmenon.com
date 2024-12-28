import React from 'react';
import { IUseVimSearch, IVimContext, IUseTagHelper } from './Vim';
import { NotImplemented, apiCaller } from '@utility';
import { ICommand, ICommandTag, InputChange } from '@types';
import { API } from '@constants';
import { IUseVimForm } from './Vim';
import { useRouter } from 'next/navigation';

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
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = (): IUseVimForm => {
  const { mode, setMode, command, setCommand, onFormSave, isSaveLoading } = useVimContext();
  const { refresh } = useRouter();
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
  const { selectedTags, setSelectedTags } = useVimContext();
  const onTagSelect = (index: number): void => {
    const tag = selectedTags[index];
    selectedTags.splice(index, 1, {
      ...tag,
      selected: !tag.selected,
    });
    setSelectedTags([...selectedTags]);
  };
  return {
    selectedTags,
    onTagSelect,
  };
};

export const isSearched = (
  searchedValue: string,
  command: ICommand,
  selectedTags: ICommandTag[]
): boolean => {
  const isTagSelected = selectedTags.some((tag) => {
    return command.tags.includes(tag.name) && tag.selected;
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
