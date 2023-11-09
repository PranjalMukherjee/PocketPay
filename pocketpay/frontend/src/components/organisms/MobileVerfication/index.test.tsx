import React from 'react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import { fireEvent, render, screen } from '@testing-library/react'
import MobileVerification from './index'
import { VALID_MOBILENUMBER } from '../../../utils/regex'
import { SignUpContextProvider } from "../../../context/CountryContext";

describe('MobileVerification component', () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
           <MobileVerification handleChange={handleChange} />
       </ThemeProvider>,{ wrapper: SignUpContextProvider });
  });

  it('renders MobileVerification component correctly', () => {
    const mobileNumber = screen.getByTestId('mobile-verification');
    expect(mobileNumber).toBeInTheDocument();
  });

  it('enables continue button for valid mobile number', () => {
    const inputField = screen.getByDisplayValue('+44');
    const continueButton = screen.getByText('Continue');
    fireEvent.change(inputField, { target: { value: '+91 789 1234 5760' } });
    expect(continueButton).toBeEnabled();
  });

  it('disables button for invalid mobile number', () => {
    const validNumber = '+44 020 7947 6202';
    const invalidNumber = 'invalidnumber';

    const handleValue = (value: string) => {
      return !VALID_MOBILENUMBER.test(value.replace(/\s/g, ''));
    };

    expect(handleValue(validNumber)).toBe(false);

    expect(handleValue(invalidNumber)).toBe(true);
  });
})
