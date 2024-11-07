import React from 'react';

import { IAppContext } from './AppContext';

export const initialValue: IAppContext = {
  isDark: true,
};

export const AppContext = React.createContext<IAppContext>(initialValue);
