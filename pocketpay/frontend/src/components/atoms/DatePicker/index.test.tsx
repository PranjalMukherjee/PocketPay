import * as React from 'react'
import { fireEvent,screen } from '@testing-library/react'
import DatePickerComponent from '.'
import { userEvent } from '@storybook/testing-library'
import { DOB } from '../../../utils/constants'
import { render } from '../../../testSetup'

describe('Testing the DatePickerComponent', () => {
  test('DatePickerComponent element is rendered', () => {
    render(<DatePickerComponent label={DOB}/>)
    const Date = screen.getByLabelText(DOB)
    expect(Date).toBeInTheDocument()
  })

  test('Change date value and verify', () => {
    render(<DatePickerComponent label={DOB}/>)
    const Date = screen.getByLabelText(DOB)
    fireEvent.change(Date)
    userEvent.click(Date)

    fireEvent.change(Date, {
      target: { value: '12-01-2023' },
    })
    expect(Date).toHaveValue('12-01-2023')

    fireEvent.change(Date, { target: { value: '' } })
    expect(Date).toHaveValue('')
  })

  it('should open the date picker on icon click', () => {
    render(<DatePickerComponent label="Date" />);
    
    // Initially, the date picker should be closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Find and click the calendar icon
    const calendarIcon = screen.getByTestId('calendar-icon');
    fireEvent.click(calendarIcon);

    // Now, the date picker should be open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
})
