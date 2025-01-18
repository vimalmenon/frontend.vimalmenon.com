import { ReactSetState } from '@types';

export type SelectedButtonType = 0 | 1 | 2;

export interface IContext {
  selectedButton: SelectedButtonType;
  setSelectedButton: ReactSetState<SelectedButtonType>;
  input: string;
  setInput: ReactSetState<string>;
}
