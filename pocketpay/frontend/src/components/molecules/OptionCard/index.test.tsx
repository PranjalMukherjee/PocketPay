import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OptionCard, { OptionCardProps } from '.';

describe('OptionCard', () => {
  const defaultProps: OptionCardProps = {
    src: '../../../../public/assets/icons/PersonalAccount.svg',
    alt: 'Image Alt Text'
  };

  it('renders without caption', () => {
    render(<OptionCard {...defaultProps} width="100px" height="300px" />);

    expect(screen.getByAltText('Image Alt Text')).toBeInTheDocument();

    expect(screen.queryByText('Caption Text')).not.toBeInTheDocument();
  });

  it('renders with caption', () => {
    render(<OptionCard {...defaultProps} caption="Caption Text" />);

    expect(screen.getByAltText('Image Alt Text')).toBeInTheDocument();
    expect(screen.getByText('Caption Text')).toBeInTheDocument();
  });

  it('calls onclick when clicked', () => {
    const onClickMock = jest.fn();
    render(<OptionCard {...defaultProps} onclick={onClickMock} />);
  
    const customBox = screen.getByTestId('custom-box');
    fireEvent.click(customBox);
  
    expect(onClickMock).toHaveBeenCalled(); 
  });
});
