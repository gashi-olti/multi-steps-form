import { Stepper, Step, StepLabel } from '@mui/material';

type Props = {
  activeStep?: number;
  steps: string[];
};

function MfsStepper({ activeStep, steps }: Props) {
  return (
    <div tw="mb-3">
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel sx={{ fontSize: '16px' }}>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default MfsStepper;
