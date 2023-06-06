import * as React from 'react';
import { Button, Grid, InputLabel, Typography } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactDetailsModel, contactDetailsSchema } from './schema';
import InputController from '@/components/Forms/InputController';

type Props = {
  contactDetails?: any;
  onSuccess: (data: any) => void;
  onForward: () => void;
};

export default function ContactDetails({ contactDetails, onSuccess, onForward }: Props) {
  const defaultValues = React.useMemo(
    () => ({
      ...contactDetails,
      name: contactDetails?.name ?? '',
      email: contactDetails?.email ?? '',
      phone_number: contactDetails?.phone_number ?? '',
      company_name: contactDetails?.company_name ?? '',
    }),
    [contactDetails]
  );

  const { formState, reset, getValues, handleSubmit, ...methods } = useForm<ContactDetailsModel>({
    mode: 'onBlur',
    resolver: yupResolver(contactDetailsSchema()) as any,
    defaultValues,
  });

  const submitForm = (data: ContactDetailsModel) => {
    if (data) {
      onSuccess({ ...data });
      onForward();
    }
  };

  return (
    <FormProvider
      handleSubmit={handleSubmit}
      getValues={getValues}
      formState={formState}
      reset={reset}
      {...methods}
    >
      <form onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" tw="font-bold">
              Contact details
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" tw="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisc.
            </Typography>
          </Grid>
          <Grid item container xs={12} spacing={2} mt={2}>
            <Grid item xs={6}>
              <InputLabel>Name</InputLabel>
              <InputController
                control={methods.control}
                errors={formState.errors}
                name="name"
                placeholder="John Carter"
                required
                InputProps={{
                  endAdornment: <PersonOutlineOutlinedIcon tw="text-gray-400" />,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Email</InputLabel>
              <InputController
                control={methods.control}
                errors={formState.errors}
                name="email"
                placeholder="Email address"
                required
                InputProps={{
                  endAdornment: <EmailOutlinedIcon tw="text-gray-400" />,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Phone Number</InputLabel>
              <InputController
                control={methods.control}
                errors={formState.errors}
                name="phone_number"
                placeholder="(123) 456 - 7890"
                required
                InputProps={{
                  endAdornment: <SmartphoneOutlinedIcon tw="text-gray-400" />,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Company</InputLabel>
              <InputController
                control={methods.control}
                errors={formState.errors}
                name="company_name"
                placeholder="Company name"
                required
                InputProps={{
                  endAdornment: <ApartmentOutlinedIcon tw="text-gray-400" />,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ width: 1, position: 'absolute', mt: 50 }}
            tw="flex flex-row justify-between"
          >
            <Grid item></Grid>
            <Grid item sx={{ pr: 2 }}>
              <Button type="submit" variant="contained">
                Next step
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
