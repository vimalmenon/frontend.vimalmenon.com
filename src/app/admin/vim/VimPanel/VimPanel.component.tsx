'use client';

import { Alert } from '@components';
import Box from '@mui/material/Box';
import { useAlertHelper } from '../Vim.service';

export const VimPanel: React.FC = () => {
  const { onAlertClose } = useAlertHelper();
  return (
    <Box>
      <Alert alert={undefined} onClose={onAlertClose} />
    </Box>
  );
};
