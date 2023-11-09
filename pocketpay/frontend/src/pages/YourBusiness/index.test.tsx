import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import YourBusiness from '.';
import { render } from '../../testSetup';
import { UserBusinessDetailsContextProvider } from '../../context/UserBusinessDetailsContext';
import { BrowserRouter } from 'react-router-dom';

describe('Account setup - Business activity page test suit', () => {
  it('renders the entire flow of the YourBusinessPage', () => {
    render(

          <YourBusiness />
       
    );
    const inputElement = screen.getByPlaceholderText('Select your Business');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'z' } });
    const option = screen.getByText(/zemoso/i);
    expect(option).toBeInTheDocument;
    fireEvent.click(option);

    expect(screen.getByText('Confirm your business details')).toBeInTheDocument();

    const editBefore = screen.getByText(/Edit/i);
    fireEvent.click(editBefore);
    screen.debug();
    const regAddr = screen.getByLabelText(/Registration address/i) as HTMLInputElement;
    fireEvent.change(regAddr, { target: { value: 'Zemosolabs' } });
    expect(regAddr.value).toBe('Zemosolabs');
    fireEvent.change(regAddr, { target: { value: '' } });
    expect(regAddr.value).toBe('');
    fireEvent.click(screen.getByText(/Save/i));

    const confirmButton = screen.getByRole('button', { name: 'Confirm' });
    expect(confirmButton).toBeInTheDocument();
    fireEvent.click(confirmButton);
  });
  it('clicking on back button', () => {
    render(
        <YourBusiness />
   );
    const inputElement = screen.getByPlaceholderText('Select your Business');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'z' } });
    const option = screen.getByText(/zemoso/i);
    expect(option).toBeInTheDocument;
    fireEvent.click(option);

    expect(screen.getByText('Confirm your business details')).toBeInTheDocument();

    const backButton = screen.getByAltText('arrowRight');
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);

    expect(screen.getByText('Search for your business')).toBeInTheDocument();
  });
});
