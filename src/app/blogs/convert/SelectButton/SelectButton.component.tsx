'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useConvertContext } from '../Context.service';

export const SelectedButton: React.FC = () => {
  const { selectedButton, setSelectedButton } = useConvertContext();
  return (
    <Box>
      <Button
        variant={selectedButton === 0 ? 'contained' : 'outlined'}
        onClick={() => setSelectedButton(0)}
      >
        Decimal
      </Button>
      <Button
        variant={selectedButton === 1 ? 'contained' : 'outlined'}
        onClick={() => setSelectedButton(1)}
      >
        Binary
      </Button>
      <Button
        variant={selectedButton === 2 ? 'contained' : 'outlined'}
        onClick={() => setSelectedButton(2)}
      >
        HexaDecimal
      </Button>
    </Box>
  );
};
