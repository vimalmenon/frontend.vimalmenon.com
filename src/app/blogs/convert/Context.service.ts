'use client';

import React from 'react';
import { IContext } from './Context';
import { NotImplemented } from '@utility';

export const ConvertContext = React.createContext<IContext>({
  selectedButton: 0,
  setSelectedButton: NotImplemented,
});

export const useConvertContext = (): IContext => React.useContext<IContext>(ConvertContext);
