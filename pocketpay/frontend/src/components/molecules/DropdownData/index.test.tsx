import * as React from 'react'
import { render, screen } from '@testing-library/react'
import DropdownData from './index'
import andorra from '../../../../public/assets/icons/andorra.svg'

describe('Should render Dropdown Data', () => {
  test('renders the Dropdown Data', () => {
    render(
      <DropdownData
        icon={{ image: andorra, name: 'Andorra', currency: 'EUR' }}
      />
    )
    const dropdownData = screen.getByTestId('dropdown-data')
    expect(dropdownData).toBeInTheDocument()
  })

  test('renders the Dropdown Data', () => {
    render(
      <DropdownData
        icon={{ name: 'Andorra', value: 'EUR' }}
      />
    )
    const dropdownData = screen.getByTestId('dropdown-data')
    expect(dropdownData).toBeInTheDocument()
  })
})
