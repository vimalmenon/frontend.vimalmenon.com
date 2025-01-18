import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import TextField from '@mui/material/TextField';
import { Context } from './Context.context';
import { SelectedButton } from './SelectButton';

export const metadata: Metadata = {
  title: 'Convert | Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = () => {
  return (
    <Context>
      <Box>
        <SelectedButton />
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
