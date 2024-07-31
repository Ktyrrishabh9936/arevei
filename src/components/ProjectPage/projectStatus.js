// CustomStepper.js

import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import { StepIconProps } from '@mui/material/StepIcon';

const steps = [
  'Payment Received',
  'Project Manager Assigned',
  'Project Brief and Research',
  'Design and Prototype',
  'Review',
  'Reiteration',
  '2nd Part Payment',
  'Final Delivery',
  'Feedback and Post Sales',
];

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: 'black',
  border:'2px solid rgba(155,225,63,1)',
  display: 'flex',
  borderRadius:'50%',
  alignItems: 'center',
  ...(ownerState.active && {
    color: 'rgba(155,225,63,1)',
    border:'2px solid white',
  }),
  ...(ownerState.completed && {
    color: 'rgba(155,225,63,1)',
    border:'none',
  }),
  '& .CustomStepIcon-completedIcon': {
    width: 18,
    height:18,
    borderRadius: '50%',
    backgroundColor: 'rgba(86,206,226,1)',
  },
  '& .CustomStepIcon-circle': {
    width: 14,
    height:14,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? (
        <div className="CustomStepIcon-completedIcon" />
      ) : (
        <div className="CustomStepIcon-circle" />
      )}
    </CustomStepIconRoot>
  );
}

const CustomConnector = styled(StepConnector)(() => ({
  [`& .${StepConnector.line}`]: {
    borderColor: 'rgba(155,225,63,1)',
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));
const CustomStepLabel = styled(StepLabel)({
  '& .MuiStepLabel-label': {
    color: 'gray',
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: 'rgba(86,206,226,1)',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: 'white',
  },
  
});

const CustomStepper = () => {
  return (
    <Stepper alternativeLabel activeStep={3} connector={<CustomConnector />}>
      {steps.map((label) => (
        <Step key={label}>
          <CustomStepLabel StepIconComponent={CustomStepIcon} >{label}</CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CustomStepper;
