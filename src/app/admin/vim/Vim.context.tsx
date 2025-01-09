import { IReactChildren } from '@types';
import { Context } from './Vim.service';

export const VimContext: React.FC<IReactChildren> = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
