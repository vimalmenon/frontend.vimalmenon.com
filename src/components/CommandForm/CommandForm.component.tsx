'use client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { ICommandForm } from './CommandForm';
import { ICommand, LanguageType } from '@types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './CommandForm.service';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const LanguageOption: LanguageType[] = ['bash', 'shell', 'rust', 'javascript'];

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
        <FormControl fullWidth size="small" error={!!errors.language?.message}>
          <InputLabel id="language">Language</InputLabel>
          <Select label="Language" id="language" {...register('language')}>
            {LanguageOption.map((data) => {
              return (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              );
            })}
          </Select>
          <FormHelperText>{errors.language?.message}</FormHelperText>
        </FormControl>
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
