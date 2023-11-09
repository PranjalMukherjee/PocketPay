import * as React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import DropdownWithIconAndInputfield from './index'
import {
  ACCOUNT_OPTION_PLACEHOLDER,
  COUNTRYREGISTRATION,
  PURPOSEOFPOCKETPAY,
  SELECTACCOUNTOPTION,
} from '../../../utils/constants'

describe('Testing DropdownWithIconAndInputfield component', () => {
  test('renders the Dropdown text', () => {
    render(
      <DropdownWithIconAndInputfield
        placeholder="Select your country"
        data={COUNTRYREGISTRATION}
        label="Country of registration"
        isCurrency={false}
        isLabelText={true}
      />
    )
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
  })

  test('renders the Dropdown icon', () => {
    render(
      <DropdownWithIconAndInputfield
        placeholder="Select your country"
        data={[]}
        label="Select your country"
        currencyData={COUNTRYREGISTRATION}
        isCurrency={false}
        isLabelText={false}
        handleValue={() => {}}
      />
    )
    const dropdown = screen.getByTestId('dropdown-icon')
    expect(dropdown).toBeInTheDocument()
    const data = screen.getByTestId('click-data')
    fireEvent.click(data)
    const menuItem = screen.getAllByRole('menuitem')[1]
    fireEvent.click(menuItem)
  })

  test('renders the Dropdown currency icon', () => {
    render(
      <DropdownWithIconAndInputfield
        placeholder="Select currency"
        data={[]}
        label="Select currency"
        currencyData={COUNTRYREGISTRATION}
        isCurrency={true}
        defaultValue={0}
        isLabelText={false}
      />
    )
    const dropdown = screen.getByTestId('dropdown-icon')
    expect(dropdown).toBeInTheDocument()
  })

  test('renders the Dropdown Data Purpose', () => {
    render(
      <DropdownWithIconAndInputfield
        placeholder="Select currency"
        data={PURPOSEOFPOCKETPAY}
        label="Select currency"
        isCurrency={false}
        isLabelText={true}
        isCard={false}
      />
    )
    const test = screen.getByTestId('dropdown-text')
    expect(test).toBeInTheDocument()
  })

  test('renders the Dropdown Data Card', () => {
    render(
      <DropdownWithIconAndInputfield
        placeholder={ACCOUNT_OPTION_PLACEHOLDER}
        data={SELECTACCOUNTOPTION}
        isCurrency={false}
        label={ACCOUNT_OPTION_PLACEHOLDER}
        isLabelText={true}
        isCard={true}
      />
    )
    const dropdown = screen.getByTestId('dropdown-text')
    expect(dropdown).toBeInTheDocument()
    const test = screen.getByTestId('dropdown-id')
    const input = within(test).getByRole('combobox')
    fireEvent.click(input)
    fireEvent.focusOut(input)
    test.focus()
    fireEvent.change(input, { target: { value: 'R' } })
    fireEvent.keyDown(test, { key: 'ArrowDown' })
    fireEvent.keyDown(test, { key: 'Enter' })
  })
})
