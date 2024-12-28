'use client';

import { useVimDeleteHelper } from '../Vim.service';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const VimDeleteConfirmation: React.FC = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const { mode } = useVimDeleteHelper();
  if (mode === 'VIEW') {
    return (
      <Dialog open={true} fullScreen={fullScreen}>
        <DialogTitle>Are you sure you want to Delete?</DialogTitle>
        <DialogActions>
          <Button autoFocus>Cancel</Button>
          <Button autoFocus>Confirm</Button>
        </DialogActions>
      </Dialog>
    );
  }
  return null;
};
