'use client';

import { useVimForm } from '../Vim.service';
import { CommandForm } from '@components';

export const VimCommandForm: React.FC = () => {
  const { mode, onFormCancel, command, onFormSave, isSaveLoading } = useVimForm();
  if (mode === 'EDIT' || mode === 'ADD') {
    return (
      <CommandForm
        onChange={onFormSave}
        onFormCancel={onFormCancel}
        command={command}
        isLoading={isSaveLoading}
      />
    );
  }
  return null;
};
