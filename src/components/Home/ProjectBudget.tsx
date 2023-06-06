import * as React from 'react';
import { Box, Button, Grid, Radio, Typography, styled } from '@mui/material';
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
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const Item = ({ id, label, selected, onClick, ...props }: ItemProps) => (
  <StyledBox
    selected={selected}
    tw="hover:cursor-pointer flex flex-row items-center select-none"
    onClick={onClick}
    {...props}
  >
    <Radio checked={selected} />
    <Typography variant="h5">{label}</Typography>
  </StyledBox>
);

type Props = {
  projectBudget?: number;
  onSuccess: (data: any) => void;
  onForward: () => void;
  onBack: () => void;
};

export default function ProjectBudget({ projectBudget, onSuccess, onForward, onBack }: Props) {
  const [selectedItem, setSelectedItem] = React.useState<number>(projectBudget ?? 0);

  const items: ItemProps[] = [
    { id: 1, label: '$5.000 - $10.000' },
    { id: 2, label: '$10.000 - $20.000' },
    { id: 3, label: '$20.000 - $50.000' },
    { id: 4, label: '$50.000 +' },
  ];

  const handleSelectItem = (value: any) => {
    setSelectedItem(value);
  };

  const submitForm = () => {
    onSuccess({ project_budget: selectedItem });
    onForward();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" tw="font-bold">
          What’s your project budget?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" tw="text-gray-500">
          Please select the project budget range you have in mind.
        </Typography>
      </Grid>

      <Grid item container xs={12} spacing={4} mt={1}>
        {items.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Item
              id={item.id}
              label={item.label}
              selected={selectedItem === item.id}
              onClick={() => handleSelectItem(item.id!)}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ width: 1, position: 'absolute', mt: 46 }}
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
