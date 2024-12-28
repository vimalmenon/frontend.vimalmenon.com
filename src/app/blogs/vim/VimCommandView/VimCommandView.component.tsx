'use client';

import { useVimForm, useVimSearch, isSearched, useTagHelper } from '../Vim.service';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { Highlight } from '@components';
import { IVimCommandView } from './VimCommandView';
import { Icons } from '@constants';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

export const VimCommandView: React.FC<IVimCommandView> = ({ commands }) => {
  const { mode, onCommandDelete, onFormEdit } = useVimForm();
  const { search } = useVimSearch();
  const { selectedTags } = useTagHelper();
  if (mode === 'VIEW') {
    return (
      <Box>
        {commands.map((data, index) => {
          if (isSearched(search, data, selectedTags)) {
            return (
              <Fragment key={index}>
                <Box sx={{ margin: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                  {data.describe}
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      {data.tags.map((tag) => {
                        return <Chip label={tag} key={tag} />;
                      })}
                    </Box>

                    {data.id ? (
                      <Box>
                        <IconButton size="small" onClick={() => onFormEdit(data)}>
                          <Icons.Edit />
                        </IconButton>
                        <IconButton size="small" onClick={() => onCommandDelete(data.id)}>
                          <Icons.Delete />
                        </IconButton>
                      </Box>
                    ) : null}
                  </Box>
                </Box>
                <Highlight code={data.command} language={data.language} />
              </Fragment>
            );
          }
        })}
      </Box>
    );
  }
  return null;
};
