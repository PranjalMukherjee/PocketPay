import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import BankCard from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import theme from '../../../theme';

describe('BankCard component', () => {
  const props = {
    cardName: 'My Card',
    lastFourDigits: '1234',
    expiryDate: '12/24',
    checked: true
  };

  it('should render the BankCard component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <BankCard {...props} />
      </ThemeProvider>
    );
    expect(screen.getByText('My Card')).toBeDefined();
    expect(screen.getByText('Last four digit')).toBeDefined();
    expect(screen.getByText('1234')).toBeDefined();
    expect(screen.getByText('Expiry date')).toBeDefined();
    expect(screen.getByText('12/24')).toBeDefined();
  });

  test('shold update the CVV value on input change', () => {
    render(
      <ThemeProvider theme={theme}>
        <BankCard cardName="Test Card" lastFourDigits={'1234'} expiryDate="12/24" />
      </ThemeProvider>
    );
    const cvvInput = screen.getByPlaceholderText('CVV / CVC') as HTMLInputElement;
    fireEvent.change(cvvInput, { target: { value: '123' } });

    expect(cvvInput.value).toBe('123');
  });
  it('should validate CVV correctly', () => {
    const { getByPlaceholderText, container } = render(
      <ThemeProvider theme={theme}>
        <BankCard
          cardName="Sample Card"
          lastFourDigits={'1234'}
          expiryDate="12/23"
          checked={true}
          onChange={() => {}}
          value="sample"
          cardDigits={4}
        />
      </ThemeProvider>
    );

    const cvvInput = getByPlaceholderText('CVV / CVC');
    expect(container.querySelector('.Mui-error')).toBeNull();

    fireEvent.change(cvvInput, { target: { value: 'abc' } });

    expect(container.querySelector('.Mui-error')).not.toBeNull();
  });
});
