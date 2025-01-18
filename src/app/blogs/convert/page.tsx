import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Context } from './Context.component';

export const metadata: Metadata = {
  title: 'Convert | Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = () => {
  return (
    <Context>
      <Box>
        <Box>
          <Button variant="outlined">Decimal</Button>
          <Button variant="contained">Binary</Button>
          <Button variant="outlined">HexaDecimal</Button>
        </Box>
        <Box>
          <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
        </Box>
        <Box>
          Decimal : 0 <br />
          Binary: 0 <br />
          Hexadecimal: 0 <br />
        </Box>
      </Box>
    </Context>
  );
};

export default Page;
