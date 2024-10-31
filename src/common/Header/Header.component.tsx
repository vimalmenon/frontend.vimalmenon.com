import Box from '@mui/material/Box';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex', flex: '0 0 50px', overflow: 'hidden' }}>
      <Link href="/">Home</Link> &nbsp;|&nbsp;
      <Link href="/rust">Rust</Link> &nbsp;|&nbsp;
      <Link href="/tmux">Tmux</Link> &nbsp;|&nbsp;
      <Link href="/vim">Vim</Link> &nbsp;|&nbsp;
    </Box>
  );
};
