import * as React from 'react';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { theme as twinTheme } from 'twin.macro';

import theme from '@/config/theme';

interface StyledBoxProps {
  selected?: boolean;
}

const StyledBox = styled(Box)<StyledBoxProps>(({ selected }) => ({
  borderRadius: twinTheme`borderRadius.xl`,
  border: selected ? `3px solid ${theme.palette.primary.main}` : 'none',
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px',
  padding: theme.spacing(2),
}));

interface ItemProps extends StyledBoxProps {
  id?: number;
  icon: React.ReactNode;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Item = ({ id, icon, title, selected, onClick, ...props }: ItemProps) => (
  <StyledBox
    selected={selected}
    tw="hover:cursor-pointer flex flex-row items-center select-none"
    onClick={onClick}
    {...props}
  >
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        padding: 2,
        borderRadius: twinTheme`borderRadius.full` as string,
      }}
    >
      {icon}
    </Box>
    <Typography variant="h4" tw="ml-2">
      {title}
    </Typography>
  </StyledBox>
);

type Props = {
  service?: number;
  onSuccess: (data: any) => void;
  onForward: () => void;
  onBack: () => void;
};

export default function OurServices({ service, onSuccess, onForward, onBack }: Props) {
  const [selectedItem, setSelectedItem] = React.useState<number>(service ?? 0);

  const items: ItemProps[] = [
    {
      id: 1,
      icon: <TerminalOutlinedIcon fontSize="large" tw="text-gray-200" />,
      title: 'Development',
    },
    {
      id: 2,
      icon: <WebOutlinedIcon fontSize="large" tw="text-gray-200" />,
      title: 'Web Design',
    },
    {
      id: 3,
      icon: <CampaignOutlinedIcon fontSize="large" tw="text-gray-200" />,
      title: 'Marketing',
    },
    {
      id: 4,
      icon: <SettingsOutlinedIcon fontSize="large" tw="text-gray-200" />,
      title: 'Other',
    },
  ];

  const handleSelectItem = (value: number) => {
    setSelectedItem(value);
  };

  const submitForm = () => {
    onSuccess({ service: selectedItem });
    onForward();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" tw="font-bold">
          Our services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" tw="text-gray-500">
          Please select which service you are interested in.
        </Typography>
      </Grid>

      <Grid item container xs={12} spacing={4} mt={1}>
        {items.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Item
              icon={item.icon}
              title={item.title}
              onClick={() => handleSelectItem(item.id!)}
              selected={selectedItem === item.id}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ width: 1, position: 'absolute', mt: 53 }}
        tw="flex flex-row justify-between"
      >
        <Grid item sx={{ ml: -4 }}>
          <Button variant="outlined" onClick={onBack}>
            Previous step
          </Button>
        </Grid>
        <Grid item sx={{ pr: 2 }}>
          <Button variant="contained" disabled={!selectedItem} onClick={submitForm}>
            Next step
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
