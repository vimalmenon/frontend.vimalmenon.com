'use client';

import MuiAlert from '@mui/material/Alert';
import { IAlertComponent } from './Alert';

export const Alert: React.FC<IAlertComponent> = ({ alert, onClose }) => {
  if (alert) {
    return (
      <MuiAlert severity={alert.alert} onClose={onClose}>
        {alert.msg}
      </MuiAlert>
    );
  }
  return null;
};
