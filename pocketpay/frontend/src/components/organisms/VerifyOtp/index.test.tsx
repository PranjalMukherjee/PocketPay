import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import VerifyOTP from '.';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme/index';

describe('VerifyOTP component', () => {
  const defaultProps = {
    phoneNumber: '+44020 7947 6330',
    handleVerifySubmit: jest.fn(),
    handleDifferentNumber: jest.fn()
  };

  it('should render the initial UI correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <VerifyOTP {...defaultProps} />
      </ThemeProvider>
    );

    expect(getByText('Enter the 6-digit code')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter code here')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should enable the Submit button when a valid OTP is entered', () => {
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider theme={theme}>
        <VerifyOTP {...defaultProps} />
      </ThemeProvider>
    );

    const otpInput = getByPlaceholderText('Enter code here');
    const submitButton = getByText('Submit');

    fireEvent.change(otpInput, { target: { value: '123456' } });

    expect(submitButton).not.toBeDisabled();
  });

  it('should handle "I didn’t receive a code" click', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <VerifyOTP {...defaultProps} />
      </ThemeProvider>
    );

    const notReceivedLink = screen.getByTestId('notReceived');

    fireEvent.click(notReceivedLink);
    expect(getByText('Approve another way')).toBeInTheDocument();
  });
  test('should focus on input fields  correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <VerifyOTP {...defaultProps} />
      </ThemeProvider>
    );
    const otpInput = screen.getByPlaceholderText('Enter code here');

    fireEvent.focus(otpInput);
    fireEvent.blur(otpInput);
    fireEvent.change(otpInput, { target: { value: '123456' } });
    fireEvent.blur(otpInput);
    expect(otpInput).toBeInTheDocument();
  });
});
