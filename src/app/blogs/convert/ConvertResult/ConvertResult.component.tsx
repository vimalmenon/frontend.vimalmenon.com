'use client';

import Box from '@mui/material/Box';
import { useConvertResultHelper } from '../Context.service';

export const ConvertResult: React.FC = () => {
  const { binaryValue, input } = useConvertResultHelper();
  return (
    <Box>
      Decimal : {input ? input : '0'} <br />
      Binary: {binaryValue ? binaryValue : '0'}
      <br />
      Hexadecimal: 0 <br />
    </Box>
  );
};
