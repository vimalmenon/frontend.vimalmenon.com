'use client';

import { useVimForm } from '../Vim.service';
import { CommandForm } from '@components';

export const VimCommandForm: React.FC = () => {
  const { mode, onFormSave, onFormCancel, command } = useVimForm();
  if (mode === 'EDIT' || mode === 'ADD') {
    return <CommandForm onChange={onFormSave} onFormCancel={onFormCancel} command={command} />;
  }
  return null;
};
