'use client';

import { FormMode, ICommand, ITags } from '@types';
import { useEffect, useState } from 'react';

import { IContext } from './Vim';
import { VimContext as Context } from './Vim.service';

export const VimContext: React.FC<IContext> = ({ children, commands }) => {
  const [mode, setMode] = useState<FormMode>('VIEW');
  const [command, setCommand] = useState<ICommand | undefined>();
  const [search, setSearch] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<ITags[]>([]);

  useEffect(() => {
    const localTags: string[] = [];
    setTags(
      commands.reduce<string[]>((initialValue, data) => {
        const tags = data.tags.filter((tag) => {
          if (localTags.includes(tag)) {
            localTags.push(tag);
            setSelectedTags([
              ...selectedTags,
              {
                name: tag,
                selected: true,
              },
            ]);
            return !initialValue.includes(tag);
          }
        });
        return [...initialValue, ...tags];
      }, [])
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
        tags,
        setTags,
      }}
    >
      {children}
    </Context.Provider>
  );
};
