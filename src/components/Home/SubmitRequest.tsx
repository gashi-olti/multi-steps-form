import { Button, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '@/config/theme';

type Props = {
  onSuccess: () => void;
  onBack: () => void;
};

export default function SubmitRequest({ onSuccess, onBack }: Props) {
  const submitForm = () => {
    onSuccess();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div tw="text-center">
          <CheckCircleIcon tw="text-9xl" sx={{ color: theme.palette.primary.dark }} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" tw="text-2xl">
          Submit your quote request
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" tw="text-gray-500" align="center">
          Please review all the information you previously typed in the past steps, and if all is
          okay, submit your message to receive a project quote in 24 - 48 hours.
        </Typography>
      </Grid>

      <Grid item container xs={12} justifyContent="center" mt={4}>
        <Grid item>
          <Button variant="contained" onClick={submitForm}>
            Submit
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{ width: 1, position: 'absolute', mt: 52 }}
        tw="flex flex-row justify-between"
      >
        <Grid item sx={{ ml: -4 }}>
          <Button variant="outlined" onClick={onBack}>
            Previous step
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
}
