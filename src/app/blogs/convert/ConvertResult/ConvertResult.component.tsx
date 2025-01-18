'use client';

import Box from '@mui/material/Box';
import { useConvertResultHelper } from '../Context.service';

export const ConvertResult: React.FC = () => {
  const { binaryValue } = useConvertResultHelper();
  return (
    <Box>
      Decimal : {binaryValue ? binaryValue : '0'} <br />
      Binary: 0 <br />
      Hexadecimal: 0 <br />
    </Box>
  );
};
