'use client';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import { IConfirmDialog } from './ConfirmDialog';

export const ConfirmDialog: React.FC<IConfirmDialog> = ({
  open,
  onConfirmCancel,
  onConfirm,
  title,
}) => {
  if (open) {
    return (
      <Dialog open={open} fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogActions>
          <Button onClick={onConfirmCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    );
  }
  return null;
};
