import { IAlert, ReactSetState } from '@types';

export interface IVimContext {
  alert: IAlert | undefined;
  setAlert: ReactSetState<IAlert | undefined>;
}

export interface IUseAlertHelper {
  alert: IAlert | undefined;
  onAlertClose: () => void;
}
