import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { Highlight } from '@components';

export const metadata: Metadata = {
  title: 'Rust Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const RustPage: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      This is Rust
      <Box>basic rust code</Box>
      <Highlight code={`println!("Hello World")`} language="rust" />
    </Box>
  );
};

export default RustPage;
