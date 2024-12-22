'use client';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import { useVimContext, useVimForm, useVimSearch } from '../Vim.service';

export const VimCommandPanel: React.FC = () => {
  const { onFormAdd, mode } = useVimForm();
  const { tags } = useVimContext();
  const { search, onSearchChange } = useVimSearch();
  return (
    <Box>
      {mode === 'VIEW' ? (
        <Box>
          <Box>
            <TextField
              label="Search"
              fullWidth
              size="small"
              value={search}
              onChange={onSearchChange}
            />
          </Box>
          <Box>
            <IconButton size="small" onClick={onFormAdd}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {tags.map((tag) => {
              return <Chip label={tag} key={tag} />;
            })}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
