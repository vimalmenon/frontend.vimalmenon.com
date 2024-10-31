import Box from '@mui/material/Box';

import { IReactChildren } from '@types';

export const Body: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box component="main" sx={{ display: 'flex', flex: '1 1 100%' }}>
      {children}
    </Box>
  );
};
