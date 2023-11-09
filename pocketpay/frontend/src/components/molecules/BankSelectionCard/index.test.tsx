import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BankSelectionCard, { BankCardProps } from '.';
import theme from '../../../theme/index';
import { ThemeProvider } from "@mui/material"

describe('BankSelectionCard', () => {
  const defaultProps: BankCardProps = {
    icon: 'icon-url',
    alt: 'Bank Icon',
    bankName: 'Bank Name',
    disabled: false,
    onClick: jest.fn(),
  };

  it('renders the bank selection card component with provided props', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <BankSelectionCard {...defaultProps} />
        </ThemeProvider>
    );

    const bankSelectionCard = getByTestId('bank-selection-card');
    expect(bankSelectionCard).toBeInTheDocument();
  });
   
  it('calls onClick when the bank selection card is clicked', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <BankSelectionCard {...defaultProps} />
        </ThemeProvider>
    );
    const bankSelectionCard = getByTestId('bank-selection-card');
    fireEvent.click(bankSelectionCard);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});
