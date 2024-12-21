import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IFormTags } from './FormTags';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import { KeyboardEventHandler } from 'react';

export const FormTags: React.FC<IFormTags> = ({ value = [], onChange }) => {
  const [tags, setTags] = useState<string[]>(value);
  const [inputTag, setInputTag] = useState<string>('');
  const onEnter: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!tags.includes(inputTag.toUpperCase())) {
        setTags([...tags, inputTag.toUpperCase()]);
        setInputTag('');
        onChange([...tags, inputTag.toUpperCase()]);
      }
    }
  };
  const onDelete = (index: number): void => {
    tags.splice(index, 1);
    setTags([...tags]);
    onChange([...tags]);
  };
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
      <TextField
        size="small"
        value={inputTag}
        onChange={(e) => setInputTag(e.target.value)}
        onKeyDown={onEnter}
        fullWidth
        label="Tags"
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        {tags.map((tag, index) => {
          return <Chip label={tag} key={tag} onDelete={() => onDelete(index)} />;
        })}
      </Box>
    </Box>
  );
};
