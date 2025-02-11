import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import NextLink from 'next/link';
import { INavigationItem } from './NavigationItem';
import { IconButton } from '@mui/material';
import { Icons } from '@constants';

export const NavigationItem: React.FC<INavigationItem> = ({ data }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', flex: '0 0 32%' }}>
      <CardHeader
        title={data.title}
        action={
          <IconButton LinkComponent={NextLink} href={data.link}>
            <Icons.KeyboardArrowRight />
          </IconButton>
        }
      />
      <CardContent>{data.content}</CardContent>
    </Card>
  );
};
