'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { Icons } from '@constants';

import { useTagHelper, useVimForm, useVimSearch } from '../Vim.service';

export const VimCommandPanel: React.FC = () => {
  const { onFormAdd, mode } = useVimForm();
  const { selectedTags, onTagSelectToggle, tags } = useTagHelper();
  const { search, onSearchChange } = useVimSearch();
  return (
    <Box>
      {['VIEW', 'DELETE'].includes(mode) ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flex: '1', gap: 2 }}>
            <Box sx={{ display: 'flex', flex: '1' }}>
              <TextField
                label="Search"
                fullWidth
                size="small"
                value={search}
                onChange={onSearchChange}
              />
            </Box>
            <IconButton size="small" onClick={onFormAdd}>
              <Icons.Add />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {tags.map((tag) => {
              return (
                <Chip
                  label={tag}
                  key={tag}
                  variant={selectedTags?.includes(tag) ? 'filled' : 'outlined'}
                  onClick={() => onTagSelectToggle(tag)}
                />
              );
            })}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
