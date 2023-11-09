import React from 'react';
import { render } from '@testing-library/react';
import MenuItem, { MenuItemProps } from '.';

const defaultProps: MenuItemProps = {
  imgSrc: 'test-src',
  imgAlt: 'test-alt',
};

const renderMenuItem = (props?: MenuItemProps) => {
  const mergedProps = { ...defaultProps, ...props };
  return render(<MenuItem {...mergedProps} />);
};

describe('MenuItem Component', () => {
  
  it('should render with custom props', () => {
    const customProps: MenuItemProps = {
      imgSrc: 'custom-src',
      imgAlt: 'custom-alt',
      variant: 'h6',
      style: { color: 'red' },
    };

    const { getByText, getByAltText } = renderMenuItem(customProps);
    const imgElement = getByAltText('custom-alt');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe('IMG');
  });
});
