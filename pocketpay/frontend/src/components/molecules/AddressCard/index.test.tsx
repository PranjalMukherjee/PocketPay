import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddressCard from '.';

jest.mock('../../../theme', () => ({
  spacing: (value: number) => value,
  palette: {
    structuralColors: {
      hoverColor: 'lightgrey'
    },
    text: {
      mediumEmphasis: 'gray'
    }
  }
}));

jest.mock('../../atoms/RadioButton', () => ({ value }: { value: string }) => (
  <input type="radio" value={value} />
));

describe('AddressCard Component', () => {
  it('should render with the provided head and text', () => {
    const head = 'Address 1';
    const text =
      '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054';

    const { getByText } = render(<AddressCard head={head} text={text} />);

    expect(getByText(head)).toBeInTheDocument();
    expect(getByText(text)).toBeInTheDocument();
  });

  it('should apply the provided style', () => {
    const customStyle: React.CSSProperties = {
      backgroundColor: 'red',
      color: 'white'
    };

    const { container } = render(<AddressCard style={customStyle} />);

    const addressCard = container.firstChild as HTMLElement;
    expect(addressCard).toHaveStyle('background-color: red; color: white;');
  });

  it('should have a default background color on hover', () => {
    const { container } = render(<AddressCard />);
    const addressCard = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(addressCard);

    expect(addressCard).toHaveStyle('background-color: lightgrey;');

    fireEvent.mouseLeave(addressCard);

    expect(addressCard).not.toHaveStyle('background-color: transparent;');
  });

  it('should invoke onMouseEnter and onMouseLeave handlers', () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    const { container } = render(<AddressCard />);
    const addressCard = container.firstChild as HTMLElement;

    fireEvent.mouseEnter(addressCard);
    expect(onMouseEnter).toHaveBeenCalledTimes(0);

    fireEvent.mouseLeave(addressCard);
    expect(onMouseLeave).toHaveBeenCalledTimes(0);
  });
});
