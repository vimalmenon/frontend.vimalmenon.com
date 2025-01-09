'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { FormMode, ICommand } from '@types';
import { useEffect, useState } from 'react';

import { API } from '@constants';
import { apiCaller } from '@utility';

import { IContext } from './Vim';
import { VimContext as Context } from './Vim.service';

export const VimContext: React.FC<IContext> = ({ children, commands: initialData }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>();
  const [tags, setTags] = useState<string[]>([]);
  const queryClient = useQueryClient();
  const {
    data: commands,
    isLoading: isCommandsLoading,
    isError: isCommandsError,
    isFetching: isCommandFetching,
  } = useQuery<ICommand[]>({
    queryKey: ['Command'],
    queryFn: () => apiCaller(API.GetVimData()),
    initialData,
  });
  const { mutate: onFormSave, isPending: isSavePending } = useMutation({
    mutationFn: (data: ICommand) => {
      if (data.id) {
        return apiCaller(API.UpdateVimData(data));
      } else {
        return apiCaller(API.AddVimData(data));
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Command'],
      });
      setMode('VIEW');
    },
  });
  const { mutate: onCommandDelete, isPending: isDeletePending } = useMutation({
    mutationFn: (id?: string) => {
      if (id) {
        return apiCaller(API.DeleteVimData(id));
      }
      return Promise.reject(`id doesn't exist`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Command'],
      });
      setMode('VIEW');
    },
  });
  useEffect(() => {
    const tags = commands.reduce<string[]>((initialValue, command) => {
      const tags = command.tags.filter((tag) => {
        return !initialValue.includes(tag);
      });
      return [...initialValue, ...tags];
    }, []);
    setTags([...tags]);
    if (!selectedTags) {
      setSelectedTags([...tags]);
    }
  }, [commands]);

  return (
    <Context.Provider
      value={{
        mode,
        setMode,
        command,
        setCommand,
        search,
        setSearch,
        selectedTags,
        setSelectedTags,
        commands,
        isCommandsLoading: isCommandsLoading || isCommandFetching,
        isCommandsError,
        onFormSave,
        isSaveLoading: isSavePending,
        onCommandDelete,
        isDeleteLoading: isDeletePending,
        tags,
        setTags,
      }}
    >
      {children}
    </Context.Provider>
  );
};
