import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { env } from '@constants';

export const Footer: React.FC = () => {
  return (
    <Box
      component={'footer'}
      sx={{
        display: 'flex',
        flex: '0 0 50px',
        overflow: 'hidden',
        padding: 2,
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Typography component={'p'} sx={{ fontSize: '15px' }}>
          © 2024 Vimal Menon. All rights reserved
        </Typography>
      </div>
      <div>
        <Typography component={'p'} sx={{ fontSize: '15px' }}>
          {env.ENV}
        </Typography>
      </div>
    </Box>
  );
};
