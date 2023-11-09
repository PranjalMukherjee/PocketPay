import React from 'react';
import { Box, Step, StepLabel, Typography } from '@mui/material';
import { VerticalStepperProps } from '../../../utils/types';
import { StepperStyled, StyledStepperContainer, StyledStepperLabel } from '../../../utils/styledComponents';

const Circle = () => <Box className="dot"></Box>;

const VerticalStepper = ({ activeStep, steps }: VerticalStepperProps) => {
  return (
    <StepperStyled orientation="vertical" activeStep={activeStep - 1}>
      {steps.map((step, index) => (
        <Step key={step.leftLable} className={index === activeStep - 1 ? 'active-step' : ''}>
          <StyledStepperContainer>
            <StyledStepperLabel>
              <Typography variant="caption">{step.leftLable}</Typography>
            </StyledStepperLabel>
            <StepLabel StepIconComponent={Circle} />
            <StyledStepperLabel>
              <Typography variant="caption" className="right-typo">
                {step.rightLable}
              </Typography>
            </StyledStepperLabel>
          </StyledStepperContainer>
        </Step>
      ))}
    </StepperStyled>
  );
};

export default VerticalStepper;
