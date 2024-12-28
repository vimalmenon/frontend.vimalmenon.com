'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { FormMode, ICommand, ICommandTag } from '@types';
import { useEffect, useState } from 'react';
import { API } from '@constants';

import { apiCaller } from '@utility';
import { IContext } from './Vim';
import { VimContext as Context } from './Vim.service';

export const VimContext: React.FC<IContext> = ({ children, commands: initialData }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<ICommandTag[]>([]);
  const queryClient = useQueryClient();
  const {
    data: commands,
    isLoading: isCommandsLoading,
    isError: isCommandsError,
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
  useEffect(() => {
    const tags = commands.reduce<string[]>((initialValue, command) => {
      const tags = command.tags.filter((tag) => {
        return !initialValue.includes(tag);
      });
      return [...initialValue, ...tags];
    }, []);
    setSelectedTags(
      tags.map<ICommandTag>((tag) => {
        return {
          name: tag,
          selected: true,
        };
      })
    );
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
        isCommandsLoading,
        isCommandsError,
        onFormSave,
        isSaveLoading: isSavePending,
      }}
    >
      {children}
    </Context.Provider>
  );
};
