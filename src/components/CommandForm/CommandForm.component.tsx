'use client';

import { useForm, Controller } from 'react-hook-form';
import { ICommand, LanguageType } from '@types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './CommandForm.service';
import { FormTags } from './FormTags';
import { ICommandForm } from './CommandForm';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';


const LanguageOption: LanguageType[] = ['bash', 'shell', 'rust', 'javascript'];

export const CommandForm: React.FC<ICommandForm> = ({
  onChange,
  onFormCancel,
  command = {
    language: 'bash',
    tags: [],
  },
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICommand>({
    defaultValues: command,
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
        <Controller
          control={control}
          name="language"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <TextField
              select
              error={!!errors.language?.message}
              required
              label="Language"
              size="small"
              id="language"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              ref={ref}
              onBlur={onBlur}
              helperText={errors.language?.message}
            >
              {LanguageOption.map((data) => {
                return (
                  <MenuItem key={data} value={data}>
                    {data}
                  </MenuItem>
                );
              })}
            </TextField>
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field: { onChange, value } }) => {
            return <FormTags value={value} onChange={onChange} error={errors.tags?.message} />;
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <LoadingButton
            loading={isLoading}
            variant="contained"
            type="submit"
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
          <Button
            variant="outlined"
            onClick={onFormCancel}
            disabled={isLoading}
            startIcon={<CloseIcon />}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </form>
  );
};
