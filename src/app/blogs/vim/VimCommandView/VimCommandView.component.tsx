'use client';

import { Fragment } from 'react';
import { Highlight } from '@components';
import { Icons } from '@constants';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

import {
  useVimForm,
  useVimSearch,
  isSearched,
  useTagHelper,
  useVimContext,
  useVimDeleteHelper,
} from '../Vim.service';

export const VimCommandView: React.FC = () => {
  const { mode, onFormEdit } = useVimForm();
  const { search } = useVimSearch();
  const { selectedTags } = useTagHelper();
  const { commands, isCommandsLoading } = useVimContext();
  const { onDeleteRequest } = useVimDeleteHelper();
  if (['VIEW', 'DELETE'].includes(mode)) {
    if (isCommandsLoading) {
      return <Box>Loading...</Box>;
    }
    return (
      <Box>
        {commands.map((data, index) => {
          if (isSearched(search, data, selectedTags)) {
            return (
              <Fragment key={index}>
                <Box sx={{ margin: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                  {data.describe}
                  <Box sx={{ display: 'flex', gap: 4 }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {data.tags.map((tag) => {
                        return <Chip label={tag} key={tag} />;
                      })}
                    </Box>

                    {data.id ? (
                      <Box>
                        <IconButton size="small" onClick={() => onFormEdit(data)}>
                          <Icons.Edit />
                        </IconButton>
                        <IconButton size="small" onClick={() => onDeleteRequest(data)}>
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
