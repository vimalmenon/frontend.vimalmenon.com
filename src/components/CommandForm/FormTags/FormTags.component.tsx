import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { IFormTags } from './FormTags';
import { useState } from 'react';
import Chip from '@mui/material/Chip';

export const FormTags: React.FC<IFormTags> = ({ value }) => {
  const [tags, setTags] = useState<string[]>(value);
  const [inputTag, setInputTag] = useState<string>('');
  const onEnter = (event: any): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setTags([...tags, inputTag]);
      setInputTag('');
    }
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
        {tags.map((tag) => {
          return <Chip label={tag} key={tag} />;
        })}
      </Box>
    </Box>
  );
};
