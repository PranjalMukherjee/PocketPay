import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import BusinessSearch from '.';
import { render } from '../../../testSetup';

describe('BusinessSearch', () => {
  it('should render without errors', () => {
    render(<BusinessSearch handleDropdownClick={(value: string)=> {}} />);
    const headerElement = screen.getByText('Search for your business');
    expect(headerElement).toBeInTheDocument();
  });

  it('should updates the search value when the input changes', () => {
    render(<BusinessSearch handleDropdownClick={(value: string)=> {}} />);
    const inputElement = screen.getByPlaceholderText('Select your Business');

    fireEvent.change(inputElement, { target: { value: 'Test Value' } });

    expect(inputElement).toHaveValue('Test Value');
  });
  it('should render the input field with the correct placeholder', () => {
    render(<BusinessSearch handleDropdownClick={(value: string)=> {}} />);
    const inputElement = screen.getByPlaceholderText('Select your Business');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'z' } });
    const option = screen.getByText(/zemoso/i);
    expect(option).toBeInTheDocument;
    fireEvent.click(option);
    expect(screen.queryByText(/Zentech/i)).not.toBeInTheDocument;
  });
});
