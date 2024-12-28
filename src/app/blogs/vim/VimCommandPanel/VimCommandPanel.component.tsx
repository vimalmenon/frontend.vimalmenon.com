'use client';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

import { useTagHelper, useVimForm, useVimSearch } from '../Vim.service';

export const VimCommandPanel: React.FC = () => {
  const { onFormAdd, mode } = useVimForm();
  const { selectedTags, onTagSelect } = useTagHelper();
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
            {selectedTags.map((tag, index) => {
              return (
                <Chip
                  label={tag.name}
                  key={tag.name}
                  variant={tag.selected ? 'filled' : 'outlined'}
                  onClick={() => onTagSelect(index)}
                />
              );
            })}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
