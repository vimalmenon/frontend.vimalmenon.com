'use client';

import { useState } from 'react';
import { IReactChildren } from '@types';
import { ConvertContext } from './Context.service';
import { SelectedButtonType } from './Context';

export const Context: React.FC<IReactChildren> = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState<SelectedButtonType>(0);
  const [input, setInput] = useState<string>('');
  const [binaryValue, setBinaryValue] = useState<string>('');
  return (
    <ConvertContext.Provider
      value={{
        selectedButton,
        setSelectedButton,
        input,
        setInput,
        binaryValue,
        setBinaryValue,
      }}
    >
      {children}
    </ConvertContext.Provider>
  );
};
