'use client';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useVimForm } from '../Vim.service';
import TextField from '@mui/material/TextField';

export const VimCommandPanel: React.FC = () => {
  const { onFormAdd, mode } = useVimForm();
  return (
    <Box>
      {mode === 'VIEW' ? (
        <Box>
          <Box>
            <TextField label="Search" fullWidth size="small" />
          </Box>
          <Box>
            <IconButton size="small" onClick={onFormAdd}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
