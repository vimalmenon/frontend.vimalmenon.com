import Box from '@mui/material/Box';

export const Footer: React.FC = () => {
  return (
    <Box component={'footer'} sx={{ display: 'flex', flex: '0 0 50px', overflow: 'hidden' }}>
      <div>
        <p>© 2021 Vimal Menon. All rights reserved</p>
      </div>
    </Box>
  );
};
