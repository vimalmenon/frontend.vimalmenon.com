'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { ICommandForm } from './CommandForm';
import { ICommand } from '@types';

export const CommandForm: React.FC<ICommandForm> = ({ onChange, onFormCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommand>();
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onChange)} noValidate>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          error
          required
          label="Describe"
          size="small"
          id="describe"
          {...register('describe', { required: true, minLength: 5 })}
          helperText={'None'}
        />
        <TextField required label="Command" size="small" id="command" />
        <TextField required label="Language" size="small" id="language" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined" onClick={onFormCancel}>Clear</Button>
        </Box>
      </Box>
    </form>
  );
};
