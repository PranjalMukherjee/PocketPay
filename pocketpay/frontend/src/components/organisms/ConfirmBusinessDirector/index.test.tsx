import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import ConfirmBusinessDirectors from '.';
import { ConfirmDirectors } from '../../../utils/constants';
import { render } from '../../../testSetup';
describe('ConfirmBusinessDirectors Component', () => {
  it('renders without crashing', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
  });

  it('adds a new director when "Add another director" button is clicked', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
    const button = screen.getByTestId('add-button');
    fireEvent.click(button);
    expect(screen.getByText('Director 2')).toBeInTheDocument();

    const close = screen.getByTestId('close-icon');
    fireEvent.click(close);
  });
  it('adds a new Owner when "Add another Owner" button is clicked', () => {
    render(<ConfirmBusinessDirectors isDirectors={false} />);
    const button = screen.getByTestId('add-button');
    fireEvent.click(button);
    expect(screen.getByText('Shareholder 2')).toBeInTheDocument();

    const close = screen.getByTestId('close-icon');
    fireEvent.click(close);
  });
  it('should update the firstName input field', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const firstNameInput = screen.getByLabelText('First name') as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: 'person1' } });
    expect(firstNameInput.value).toBe('person1');

    fireEvent.change(firstNameInput, { target: { value: '' } });
  });
  it('should update the firstName input field error', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const firstNameInput = screen.getByLabelText('First name') as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: ' ' } });
    const errorText = screen.getByText(ConfirmDirectors.FIRSTNAMEERR);
    expect(errorText).toBeInTheDocument();
  });
  it('should update the firstName input field', () => {
    render(<ConfirmBusinessDirectors isDirectors={false} />);

    const firstNameInput = screen.getByLabelText('Last name') as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: 'person1' } });
    expect(firstNameInput.value).toBe('person1');

    fireEvent.change(firstNameInput, { target: { value: '' } });
  });

  test('calls the onChange function when the date is changed', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const textfields = screen.getAllByRole('textbox');
    fireEvent.change(textfields[2], { target: { value: '18-03-2001' } });
  });
});
