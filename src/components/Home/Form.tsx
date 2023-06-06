import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Card, Divider, Grid, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import theme from '@/config/theme';
import MfsStepper from '@/components/MsfStepper';

import ContactDetails from './ContactDetails';
import OurServices from './OurServices';
import ProjectBudget from './ProjectBudget';
import SubmitRequest from './SubmitRequest';

interface Props {
  onFormActive?: (active: boolean) => void;
}

export default function Form({ onFormActive }: Props) {
  const router = useRouter();

  const [formData, setFormData] = React.useState<any>();

  const [activeStep, setActiveStep] = React.useState(0);
  const [finished, setFinished] = React.useState(false);

  const steps = React.useMemo(() => ['', '', '', ''], []);

  const checkStep = React.useCallback(() => {
    const setStep = () => {
      const step = window.location.hash.length ? Number(window.location.hash.split('')[1]) : 0;
      setActiveStep(step);
    };
    setStep();
  }, []);

  React.useEffect(() => {
    const onHashChanged = () => {
      checkStep();
    };

    window.addEventListener('hashchange', onHashChanged);

    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, [checkStep, router]);

  React.useEffect(() => {
    checkStep();
  }, [checkStep]);

  React.useEffect(() => {
    const step = window.location.hash.length ? Number(window.location.hash.split('')[1]) : 0;
    if (activeStep !== step) {
      if (activeStep > 0) {
        window.history.pushState({}, '', `#${activeStep}`);
      } else {
        window.history.pushState({}, '', window.location.pathname);
      }
      document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeStep]);

  const goForward = React.useCallback(() => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  }, [activeStep, steps.length]);

  const triggerBack = React.useCallback(() => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  }, [activeStep, router]);

  const handleCreate = React.useCallback((data: any) => {
    if (data) {
      setFormData((prev: any) => ({ ...prev, ...data }));
    }
  }, []);

  const handleFinish = React.useCallback(() => {
    setFinished(true);
    setActiveStep(0);
    if (onFormActive) onFormActive(false);
  }, []);

  const resetFormData = () => {
    setFormData({});
    setActiveStep(0);
    setFinished(false);
    if (onFormActive) onFormActive(true);
  };

  return (
    <Grid container>
      {!finished ? (
        <Grid item container xs={12} rowSpacing={4} tw="relative">
          <Grid item xs={12}>
            <Card elevation={2} tw="w-full shadow-lg rounded-3xl mt-10">
              <Box sx={{ padding: { xs: 2, sm: 2.5, md: 5 } }}>
                <Box sx={{ mb: 4 }}>
                  <MfsStepper activeStep={activeStep} steps={steps} />
                  <Divider tw="py-2" />
                </Box>

                {activeStep === 0 && (
                  <ContactDetails
                    contactDetails={formData}
                    onSuccess={handleCreate}
                    onForward={goForward}
                  />
                )}

                {activeStep === 1 && (
                  <OurServices
                    service={formData?.service}
                    onSuccess={handleCreate}
                    onBack={triggerBack}
                    onForward={goForward}
                  />
                )}

                {activeStep === 2 && (
                  <ProjectBudget
                    projectBudget={formData?.project_budget}
                    onSuccess={handleCreate}
                    onBack={triggerBack}
                    onForward={goForward}
                  />
                )}

                {activeStep === 3 && (
                  <SubmitRequest onSuccess={handleFinish} onBack={triggerBack} />
                )}
              </Box>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid item container xs={12} justifyContent="center" mt={5}>
          <Grid item xs={12}>
            <Stack direction="column" spacing={2}>
              <div tw="text-center">
                <CheckCircleIcon tw="text-9xl" sx={{ color: theme.palette.primary.dark }} />
              </div>
              <Typography variant="h3" tw="text-gray-500 text-center">
                You have successfully submitted. Thank you
              </Typography>
            </Stack>
          </Grid>
          <Grid item mt={5}>
            <Button fullWidth={false} variant="outlined" onClick={resetFormData}>
              Reset Form
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
