import { IAlert, ReactSetState } from '@types';

export interface IVimContext {
  alert: IAlert | undefined;
  setAlert: ReactSetState<IAlert | undefined>;
}
