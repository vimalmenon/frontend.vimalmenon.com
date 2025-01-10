'use client';

import MuiAlert from '@mui/material/Alert';
import { IAlertComponent } from './Alert';

export const Alert: React.FC<IAlertComponent> = ({ alert }) => {
  return <MuiAlert severity={alert.alert}>{alert.msg}</MuiAlert>;
};
