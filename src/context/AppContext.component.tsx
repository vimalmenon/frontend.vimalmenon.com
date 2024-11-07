import React from 'react';

import { IReactChildren } from '@types';

import { AppContext as Context, initialValue } from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  return <Context.Provider value={initialValue}>{children}</Context.Provider>;
};
