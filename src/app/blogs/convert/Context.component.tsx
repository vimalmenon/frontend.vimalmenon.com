'use client';
import { IReactChildren } from '@types';
import { ConvertContext } from './Context.service';

export const Context: React.FC<IReactChildren> = ({ children }) => {
  return <ConvertContext.Provider value={{}}>{children}</ConvertContext.Provider>;
};
