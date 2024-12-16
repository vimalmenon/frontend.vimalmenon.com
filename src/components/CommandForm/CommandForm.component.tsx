'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';

export const CommandForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(console.log)}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          required
          label="Description"
          size="small"
          id="description"
          {...register('description', { required: true, minLength: 5 })}
          helperText={errors.description?.message || 'None'}
        />
        <TextField required label="Command" size="small" id="command" />
        <TextField required label="Language" size="small" id="language" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined">Clear</Button>
        </Box>
      </Box>
    </form>
  );
};
