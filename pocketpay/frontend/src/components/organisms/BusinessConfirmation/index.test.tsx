import React from 'react'
import { ThemeProvider } from "@mui/material"
import theme from '../../../theme/index'
import { screen } from '@testing-library/react'
import BusinessConfirmation from './index'
import { fireEvent } from '@storybook/testing-library'
import { render } from '../../../testSetup'

describe('Testing BusinessConfirmation component', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <BusinessConfirmation />
      </ThemeProvider>
    )
  })

  test('renders BusinessConfirmation component', () => {
    const testingBusinessConfirmation = screen.getByTestId('business-confirmation')
    expect(testingBusinessConfirmation).toBeDefined()
  })

  test('clicking edit button before editing', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)
    expect(editBefore).toBeDefined()
  })

  test('clicking save button', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)

    const save = screen.getByTestId('save-btn')
    fireEvent.click(save)
    expect(save).toBeDefined()
  })

  test('clicking cancel button', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)

    const cancel = screen.getByTestId('cancel-btn')
    fireEvent.click(cancel)
    expect(cancel).toBeDefined()
  })

  test('changing business name input', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)

    const biz = screen.getByLabelText(/Business name/i) as HTMLInputElement;
    fireEvent.change(biz, { target: { value: 'Zemosolabs' } })
    expect(biz.value).toBe('Zemosolabs')
    fireEvent.change(biz, { target: { value: '' } })
    expect(biz.value).toBe('')
  })

  test('changing registration number input', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)

    const regNum = screen.getByLabelText(/Registration number/i) as HTMLInputElement;
    fireEvent.change(regNum, { target: { value: 'Zemosolabs' } })
    expect(regNum.value).toBe('Zemosolabs')
    fireEvent.change(regNum, { target: { value: '' } })
    expect(regNum.value).toBe('')
  })

  test('changing registration address input', () => {
    const editBefore = screen.getByText(/Edit/i)
    fireEvent.click(editBefore)

    const regAddr = screen.getByLabelText(/Registration address/i) as HTMLInputElement;
    fireEvent.change(regAddr, { target: { value: 'Zemosolabs' } })
    expect(regAddr.value).toBe('Zemosolabs')
    fireEvent.change(regAddr, { target: { value: '' } })
    expect(regAddr.value).toBe('')
  })
})
