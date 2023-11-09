import { fireEvent, screen } from '@testing-library/react';
import BusinessActivityPage from '.';
import { render } from '../../testSetup';
import React from 'react';

test('click on continue button when all dropdowns are sleceted', () => {
  render(<BusinessActivityPage />);
  const continueButton = screen.getByRole('button', { name: /Continue/i });
  expect(continueButton).toBeDisabled();
  const categoryDropdownButton = screen.getByLabelText('Category');
  fireEvent.change(categoryDropdownButton, { target: { value: 'Category 1' } });

  const subcategoryDropdownButton = screen.getByLabelText('Subcategory');
  fireEvent.change(subcategoryDropdownButton, { target: { value: 'Category 2' } });
  const businessSizeDropdownButton = screen.getByLabelText('Size of your business');
  fireEvent.change(businessSizeDropdownButton, { target: { value: 'Category 3' } });
});
