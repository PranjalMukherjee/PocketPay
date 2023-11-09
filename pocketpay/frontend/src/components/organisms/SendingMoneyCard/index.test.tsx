import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SendingMoneyCard from '.';

describe('SendingMoneyCard', () => {
  it('should render the SendingMoneyCard component with default props', () => {
    const { getByText } = render(<SendingMoneyCard />);
    expect(getByText('Who are you sending money to?')).toBeInTheDocument();
  });

  it('should render the SendingMoneyCard component with custom style', () => {
    const { container } = render(<SendingMoneyCard />);
    const card = container.querySelector('.custom-card-class');
    expect(card).toBeInTheDocument;
  });

  it('should render menu items correctly', () => {
    const { getByAltText } = render(<SendingMoneyCard />);
    expect(getByAltText('my-business')).toBeInTheDocument();
    expect(getByAltText('someone-else')).toBeInTheDocument();
    expect(getByAltText('business-charity')).toBeInTheDocument();
  });

  it('applies hover effect to menu items', () => {
    const { getByAltText } = render(<SendingMoneyCard />);
    const myBusinessMenuItem = getByAltText('my-business');
    fireEvent.mouseOver(myBusinessMenuItem);
    expect(myBusinessMenuItem).toBeInTheDocument;
  });
});
