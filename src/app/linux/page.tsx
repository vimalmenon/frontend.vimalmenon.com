import Box from '@mui/material/Box';
import { linuxCommands } from '@data';
import { Fragment } from 'react';
import { Highlight } from '@components';

const Linux: React.FC = () => {
  return (
    <Box>
      {linuxCommands.map((data, index) => {
        return (
          <Fragment key={index}>
            <Box component="p" sx={{ margin: 0.5 }}>
              {data.describe}
            </Box>
            <Highlight code={data.command} language={data.language} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default Linux;
