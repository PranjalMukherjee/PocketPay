import React from 'react'
import { fireEvent,screen } from '@testing-library/react'
import VerifyAccountCard from '.'
import { userEvent } from '@storybook/testing-library'
import { render } from '../../../testSetup'

describe('Testing VerifyAccountCard component', () => {
  test('renders  VerifyAccountCard  component', () => {
    render(<VerifyAccountCard />)
    const multiDropdown = screen.getByTestId('multi-dropdown')
    expect(multiDropdown).toBeInTheDocument()
  })

  test('selecting account category and checking the rendered components', () => {
    render(<VerifyAccountCard />)

    const placeHolderTxt = screen.getByLabelText('Category')
    userEvent.click(placeHolderTxt)
    fireEvent.keyDown(placeHolderTxt, { key: 'ArrowDown' })
    expect(placeHolderTxt).toBeDefined()

    const subCategoryDropdown = screen.getByLabelText(/Subcategory/i)
    const businessSizeDropdown = screen.getByLabelText(/Size of your business/i)

    expect(subCategoryDropdown).toBeInTheDocument()
    expect(businessSizeDropdown).toBeInTheDocument()
  })

  test('selecting account category and checking the disabled state of the button', () => {
    render(<VerifyAccountCard />)

    const categoryDropdown = screen.getByLabelText(/Category/i)
    fireEvent.change(categoryDropdown, { target: { value: 'Category 1' } })

    const continueButton = screen.getByRole('button', { name: /Continue/i })
    expect(continueButton).toBeDisabled()
  })
})
