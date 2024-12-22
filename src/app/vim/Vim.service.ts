import React from 'react';
import { IUseVimSearch, IVimContext, IUseTagHelper } from './Vim';
import { NotImplemented, apiCaller } from '@utility';
import { ICommand, InputChange } from '@types';
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
});

export const useVimContext = (): IVimContext => {
  return React.useContext<IVimContext>(VimContext);
};

export const useVimForm = (): IUseVimForm => {
  const { mode, setMode, command, setCommand } = useVimContext();
  const { refresh } = useRouter();
  const onFormSave = async (data: ICommand): Promise<void> => {
    if (data.id) {
      await apiCaller(API.UpdateVimData(data));
      refresh();
      setMode('VIEW');
    } else {
      await apiCaller(API.AddVimData(data));
      refresh();
      setMode('VIEW');
    }
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

export const isSearched = (searchedValue: string, command: ICommand): boolean => {
  if (searchedValue.trim() === '') {
    return true;
  }
  return command.describe.toLowerCase().includes(searchedValue.trim().toLowerCase());
};
