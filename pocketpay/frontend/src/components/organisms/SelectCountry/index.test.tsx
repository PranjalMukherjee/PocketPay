import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import SelectCountry from '.'; 
import { SignUpContextProvider } from "../../../context/CountryContext";

describe('SelectCountry component', () => {
  const handleSelectCountry = jest.fn();
  beforeEach(() => {
    render(<SelectCountry handleSelectCountry={handleSelectCountry}/>,{ wrapper: SignUpContextProvider });
  });

  it('renders SelectCountry component correctly', () => {
    const mobileNumber = screen.getByTestId('select-country');
    expect(mobileNumber).toBeInTheDocument();
  });

  it('disables continue button initially', () => {
    const continueButton = screen.getByRole('button', { name: 'Continue' });
    expect(continueButton).toBeDisabled();
  });

  it('should enable the continue button when a country is selected', () => {

    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'A' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })
    
    const continueButton = screen.getByRole('button', { name: /Continue/i });
    expect(continueButton).toBeEnabled();
  });
});
