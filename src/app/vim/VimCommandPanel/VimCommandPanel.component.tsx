'use client';

import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useVimForm } from '../Vim.service';

export const VimCommandPanel: React.FC = () => {
  const { onFormToggle } = useVimForm();
  return (
    <Box>
      <IconButton size="small" onClick={onFormToggle}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};
