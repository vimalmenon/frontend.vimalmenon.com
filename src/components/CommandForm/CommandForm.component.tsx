'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { ICommandForm } from './CommandForm';
import { ICommand } from '@types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './CommandForm.service';

export const CommandForm: React.FC<ICommandForm> = ({ onChange, onFormCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommand>({
    resolver: yupResolver<ICommand>(schema),
  });
  return (
    <form onSubmit={handleSubmit(onChange)} noValidate>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          error={!!errors.describe?.message}
          required
          label="Describe"
          size="small"
          id="describe"
          {...register('describe')}
          helperText={errors.describe?.message}
        />
        <TextField
          error={!!errors.command?.message}
          required
          label="Command"
          size="small"
          id="command"
          {...register('command')}
          helperText={errors.command?.message}
        />
        <TextField
          error={!!errors.language?.message}
          required
          label="Language"
          size="small"
          id="language"
          {...register('language')}
          helperText={errors.language?.message}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button variant="outlined" onClick={onFormCancel}>
            Clear
          </Button>
        </Box>
      </Box>
    </form>
  );
};
