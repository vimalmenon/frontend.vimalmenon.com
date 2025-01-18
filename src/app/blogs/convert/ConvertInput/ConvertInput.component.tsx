'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useInputHelper } from '../Context.service';

export const ConvertInput: React.FC = () => {
  const { input, setInput } = useInputHelper();
  return (
    <Box>
      <TextField
        required
        label="Input a value"
        size="small"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Box>
  );
};
