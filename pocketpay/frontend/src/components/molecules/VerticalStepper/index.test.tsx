import React from 'react';
import { render } from '@testing-library/react';
import VerticalStepper from '.';
import { steps } from '../../../utils/constants';

describe('Vertical Stepper', () => {
  test('should highlight the active step correctly', () => {
    const activeStep = 2;
    const { container } = render(<VerticalStepper steps={steps} activeStep={activeStep} />);
    const activeStepElement = container.querySelector('.active-step');
    expect(activeStepElement).toBeInTheDocument();
  });
});
