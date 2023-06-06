import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import Form from './Form';

export default function Home() {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <Grid container tw="justify-center my-20" spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" align="center">
          Get a project quote
        </Typography>
      </Grid>
      {isActive && (
        <Grid item xs={12} sm={10}>
          <Typography variant="body1" align="center" tw="text-gray-500">
            Please fill the form below to receive a quote for your project. Feel free to add as much
            detail as needed.
          </Typography>
        </Grid>
      )}
      <Grid item xs={12} mb={20}>
        <Form onFormActive={(active) => setIsActive(active)} />
      </Grid>
    </Grid>
  );
}
