'use client';

import { FormMode, ICommand, ICommandTag } from '@types';
import { useEffect, useState } from 'react';

import { IContext } from './Vim';
import { VimContext as Context } from './Vim.service';
import { useQuery } from '@tanstack/react-query';

export const VimContext: React.FC<IContext> = ({ children, commands }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<ICommandTag[]>([]);
  const { data } = useQuery<ICommand[]>({
    queryKey: ['Command'],
    queryFn: () => Promise.resolve([]),
    initialData: commands,
  });
  console.log(data);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
