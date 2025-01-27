import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import { Context } from './Context.context';
import { SelectedButton } from './SelectButton';
import { ConvertInput } from './ConvertInput';
import { ConvertResult } from './ConvertResult';
import { NavigationMap } from '@data';

const data = NavigationMap['/convert'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const Page: NextPage = () => {
  return (
    <Context>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <SelectedButton />
        <ConvertInput />
        <ConvertResult />
      </Box>
    </Context>
  );
};

export default Page;
