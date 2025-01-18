'use client';

import React from 'react';
import { IContext } from './Context';
import { NotImplemented } from '@utility';

export const ConvertContext = React.createContext<IContext>({
  selectedButton: 0,
  setSelectedButton: NotImplemented,
  input: '',
  setInput: NotImplemented,
  binaryValue: '',
  setBinaryValue: NotImplemented,
});

export const useConvertContext = (): IContext => React.useContext<IContext>(ConvertContext);

export const useInputHelper = () => {
  const { input, setInput } = useConvertContext();
  return {
    input,
    setInput,
  };
};

export const useConvertResultHelper = () => {
  const { binaryValue, input } = useConvertContext();
  return {
    binaryValue,
    input,
  };
};
