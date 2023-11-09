import React from 'react';
import '@testing-library/jest-dom';
import {  screen } from '@testing-library/react';
import { MainTemplate } from '.';
import SignIn from '../../organisms/SigninForm';
import UserDetails from '../../organisms/UserDetails';
import { STEPPER_LABELS } from '../../../utils/constants';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme/index';
import { render } from '../../../testSetup';
describe('MainTemplate', () => {
  test('should render the component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainTemplate>
          <SignIn />
        </MainTemplate>
      </ThemeProvider>
    );
    expect(screen.getByTestId('mainTemplate')).toBeInTheDocument();
    expect(screen.getByText('Welcome Back')).toBeInTheDocument;
  });
  test('should render the component when props value are true', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainTemplate
          isCloseVisible
          isStepperVisible
          stepperValues={STEPPER_LABELS[2]}
          presentValue={1}
          isBackVisible
          stepperWidth="788px">
          <UserDetails />
        </MainTemplate>
      </ThemeProvider>
    );
    expect(screen.getByText(STEPPER_LABELS[2][1])).toBeInTheDocument;
  });
  test('should render the component with default step value', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainTemplate
          isCloseVisible
          isStepperVisible
          stepperValues={STEPPER_LABELS[2]}
          isBackVisible
          stepperWidth="788px">
          <UserDetails />
        </MainTemplate>
      </ThemeProvider>
    );
    expect(screen.getByText(STEPPER_LABELS[2][1])).toBeInTheDocument;
  });
});
