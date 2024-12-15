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
          helperText={errors.description?.message || ''}
        />
        <TextField required label="Command" size="small" />
        <TextField required label="Language" size="small" />
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
