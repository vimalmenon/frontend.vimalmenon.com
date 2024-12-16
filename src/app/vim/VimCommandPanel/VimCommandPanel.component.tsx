'use client';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useVimForm } from '../Vim.service';

export const VimCommandPanel: React.FC = () => {
  const { onFormToggle, mode } = useVimForm();
  return (
    <Box>
      {mode === 'VIEW' ? (
        <IconButton size="small" onClick={onFormToggle}>
          <AddIcon />
        </IconButton>
      ) : null}
    </Box>
  );
};
