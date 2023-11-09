import React from 'react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import { fireEvent, screen, within } from '@testing-library/react'
import UserDetails from '.'
import { render } from '../../../testSetup'

describe('Testing UserDetails component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <UserDetails />
      </ThemeProvider>
    )
  })

  test('renders UserDetails component', () => {
    const testingUserDetails = screen.getByTestId('user-details')
    expect(testingUserDetails).toBeDefined()
  })

  test('changing the first name input', () => {
    const fName = screen.getByPlaceholderText(/First name/i) as HTMLInputElement;
    fireEvent.change(fName, { target: { value: 'vamsi' } });
    expect(fName.value).toBe('vamsi');
    fireEvent.change(fName, { target: { value: '' } });
    expect(fName.value).toBe('');
  })

  test('changing the home address input', () => {
    const address = screen.getByPlaceholderText(/Home address/i)as HTMLInputElement;;
    fireEvent.change(address, { target: { value: 'eluru' } });
    expect(address.value).toBe('eluru');
    fireEvent.change(address, { target: { value: '' } });
    expect(address.value).toBe('');
  })

  test('ensures the form is valid', () => {
    const firstNameInput = screen.getByPlaceholderText(/First name/i)
    const addressInput = screen.getByPlaceholderText(/Home address/i)
    const continueBtn = screen.getByText('Continue')

    fireEvent.change(firstNameInput, { target: { value: 'John Doe' } })
    fireEvent.change(addressInput, { target: { value: '123 Street, City' } })
    
    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'India' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })

    expect(continueBtn).toBeEnabled()
  })
  
})
