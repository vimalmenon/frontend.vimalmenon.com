'use client';

import { useVimForm } from '../Vim.service';
import { CommandForm } from '@components';

export const VimCommandForm: React.FC = () => {
  const { mode, onFormSave, onFormToggle } = useVimForm();
  if (mode === 'EDIT') {
    return <CommandForm onChange={onFormSave} onFormCancel={onFormToggle} />;
  }
  return null;
};
