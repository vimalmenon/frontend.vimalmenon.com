'use client';

import { useVimDeleteHelper } from '../Vim.service';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export const VimDeleteConfirmation: React.FC = () => {
  const { mode } = useVimDeleteHelper();
  if (mode === 'VIEW') {
    return (
      <Dialog open={true} fullWidth>
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
