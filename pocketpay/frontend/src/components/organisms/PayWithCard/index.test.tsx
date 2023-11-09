import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PayWithCard from './index'; 
import { ThemeProvider } from '@mui/material';
import theme from '../../../theme/index';
describe('PayWithCard Component', () => {
  it('should render the component correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <PayWithCard />
      </ThemeProvider>
    );
    const titleElement = screen.getByText('Pay with your card');
    expect(titleElement).toBeInTheDocument();

    const savedCardTab = screen.getByText('SAVED CARD');
    expect(savedCardTab).toBeInTheDocument();

    const newCardTab = screen.getByText('NEW CARD');
    expect(newCardTab).toBeInTheDocument();
  });
  it('should change the selected value when a radio button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <PayWithCard />
      </ThemeProvider>
    );
    const RadioButtons = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(RadioButtons[0]).toBeInTheDocument();

    fireEvent.click(RadioButtons[0]);
    expect(RadioButtons[0]).toBeChecked();
    expect(RadioButtons[1]).not.toBeChecked();

    fireEvent.click(RadioButtons[1]);
    expect(RadioButtons[0]).not.toBeChecked();
    expect(RadioButtons[1]).toBeChecked();
  });
});
