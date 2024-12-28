import { Box } from '@mui/material';
import { useVimForm } from '../Vim.service';
import { IVimDeleteConfirmation } from './VimDeleteConfirmation';

export const VimDeleteConfirmation: React.FC<IVimDeleteConfirmation> = () => {
  const { mode } = useVimForm();
  if (mode === 'DELETE') {
    return <Box></Box>;
  }
  return null;
};
