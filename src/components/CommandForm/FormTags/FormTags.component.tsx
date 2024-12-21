import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IFormTags } from './FormTags';

export const FormTags: React.FC<IFormTags> = ({ value }) => {
  return (
    <Box>
      {value.join(', ')}
      <TextField />
    </Box>
  );
};
