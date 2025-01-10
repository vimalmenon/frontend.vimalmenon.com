'use client';

import { Alert } from '@components';
import Box from '@mui/material/Box';
import { useAlertHelper } from '../Vim.service';

export const VimPanel: React.FC = () => {
  const { onAlertClose, alert } = useAlertHelper();
  return (
    <Box sx={{ display: 'flex' }}>
      <Alert alert={alert} onClose={onAlertClose} />
      <Box></Box>
    </Box>
  );
};
