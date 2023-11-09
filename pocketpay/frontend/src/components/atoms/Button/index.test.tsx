import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from './index'
import { PRIMARY_BUTTON_TEXT } from '../../../utils/constants'

describe('Button atom renders', () => {
  test('OnClick event is working correctly', () => {
    const onClick = jest.fn()
    render(
      <Button color="primary" variant="text" onClick={onClick}>
        {PRIMARY_BUTTON_TEXT}
      </Button>
    )
    const image = screen.getByRole('button')
    fireEvent.click(image)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('text rendering correctly', () => {
    render(
      <Button color="primary" variant="text">
        {PRIMARY_BUTTON_TEXT}
      </Button>
    )
    const buttonText = screen.getByText(PRIMARY_BUTTON_TEXT)
    expect(buttonText).toBeInTheDocument()
  })

  test('should have variant contained default', () => {
    render(<Button color="primary">{PRIMARY_BUTTON_TEXT}</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('MuiButton-contained')
  })
})
