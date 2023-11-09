import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TextChip, TextChipProps } from '.';

describe('TextChip', () => {
  const defaultProps: TextChipProps = {
    label: 'Example Chip',
    style: {},
  };

  it('should render with the provided label', () => {
    const { getByText } = render(<TextChip {...defaultProps} />);
    expect(getByText('Example Chip')).toBeInTheDocument();
  });

  it('applies the provided style', () => {
    const customStyle = {
      background: 'red',
      color: 'white',
    };
    const { container } = render(<TextChip {...defaultProps} style={customStyle} />);
    
    const chipElement = container.querySelector('.MuiChip-root');
    expect(chipElement).toHaveStyle('background: red');
    expect(chipElement).toHaveStyle('color: white');
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<TextChip {...defaultProps} onClick={onClickMock} />);
    
    const chipElement = getByText('Example Chip');
    fireEvent.click(chipElement);
    
    expect(onClickMock).toHaveBeenCalled();
  });
});
