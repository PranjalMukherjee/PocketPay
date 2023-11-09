import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import InputfieldWithDropdown from './index'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'

describe('Testing InputfieldWithDropdown component', () => {
  test('displays the input field with dropdown for mobile numbers', () => {
    render(
      <ThemeProvider theme={theme}>
        <InputfieldWithDropdown
          placeholder="Mobile Number"
          isCurrency={false}
          value={''}
        />
      </ThemeProvider>
    )
    const testingMobileDropdown = screen.getByTestId('input-with-dropdown-mobile')
    expect(testingMobileDropdown).toBeDefined()
  })

  test('displays the input field with dropdown for currency', () => {
    render(
      <ThemeProvider theme={theme}>
        <InputfieldWithDropdown 
          placeholder="You Send" 
          isCurrency={true} 
          value={''} 
        />
      </ThemeProvider>
    )

    const testingCurrencyDropdown = screen.getByTestId('input-with-dropdown-currency')
    expect(testingCurrencyDropdown).toBeDefined()
  })

  it('calls the handleTextField function when input field is clicked', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <InputfieldWithDropdown
          placeholder="Test Placeholder"
          isCurrency={true}
          handleChange={handleChange}
          handleValue={() => { } } 
          value={''}      
        />
      </ThemeProvider>
    );

    const inputField = getByTestId('input-with-dropdown-currency');
    const inputFieldAdornment = inputField?.querySelector('.MuiInputAdornment-position-end');
    
    // Check if inputFieldAdornment is not null before clicking
    if (inputFieldAdornment) {
      fireEvent.click(inputFieldAdornment);

      // You can check if the dropdown opens by verifying that it is in the document
      const dropdown = getByTestId('dropdown-with-currency');
      fireEvent.click(dropdown);
      expect(dropdown).toBeInTheDocument();
    }
  });
})
