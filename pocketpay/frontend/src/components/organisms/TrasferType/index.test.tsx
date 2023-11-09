import { render, fireEvent, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import TransferType from '.';
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme/index';

describe('Transfer Type', () => {
  test('should render PaymentOptions component without crashing', () => {
    render(
      <ThemeProvider theme={theme}>
        <TransferType />
      </ThemeProvider>
    );
  });
  test('should render payment option component with icons', () => {
    render(
      <ThemeProvider theme={theme}>
        <TransferType />
      </ThemeProvider>
    );
    const debitCardRadio = screen.getAllByRole('img');
    expect(debitCardRadio).toHaveLength(4);
    expect(debitCardRadio[0]).toBeInTheDocument();
  });
  test('should render payment option text correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TransferType />
      </ThemeProvider>
    );
    expect(screen.getByText('Choose your transfer type')).toBeInTheDocument();
    expect(screen.getByText('Fast and easy transfer')).toBeInTheDocument();
    expect(screen.getByText('Low cost transfer')).toBeInTheDocument();
    expect(screen.getByText('Account transfer')).toBeInTheDocument();
    expect(screen.getByText('SWIFT Transfer')).toBeInTheDocument();
  });

  it('should select a radio button when clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <TransferType />
      </ThemeProvider>
    );
    const RadioButtons = screen.getAllByRole('radio') as HTMLInputElement[];

    expect(RadioButtons[2]).toBeInTheDocument();

    fireEvent.click(RadioButtons[0]);
    fireEvent.click(RadioButtons[2]);
  });
});
