'use client';

import { useState } from 'react';
import { IReactChildren } from '@types';
import { ConvertContext } from './Context.service';
import { SelectedButtonType } from './Context';

export const Context: React.FC<IReactChildren> = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState<SelectedButtonType>(0);
  return (
    <ConvertContext.Provider
      value={{
        selectedButton,
        setSelectedButton,
      }}
    >
      {children}
    </ConvertContext.Provider>
  );
};
