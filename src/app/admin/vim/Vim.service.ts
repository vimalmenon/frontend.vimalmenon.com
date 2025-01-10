import React from 'react';
import { IVimContext } from './Vim';
import { NotImplemented } from '@utility';

export const Context = React.createContext<IVimContext>({
  alert: undefined,
  setAlert: NotImplemented,
});

export const useContext = (): IVimContext => React.useContext(Context);

export const useAlertHelper = () => {
  const { alert, setAlert } = useContext();
  const onAlertClose = (): void => {
    setAlert(undefined);
  };
  return {
    alert,
    onAlertClose,
  };
};
