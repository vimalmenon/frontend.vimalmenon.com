import { ICommand } from '@types';

export interface ICommandForm {
  onChange: (data: ICommand) => void;
  onFormCancel: () => void;
  command?: ICommand;
  isLoading: boolean;
}
