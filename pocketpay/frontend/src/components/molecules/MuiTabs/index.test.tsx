import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MuiTabs from './index';

describe('Testing the Mui tabs', () => {
  test('should renders MuiTabs component with default props', () => {
    const mockOnSelectTab = jest.fn();

    render(
      <MuiTabs
        tabNames={['UPDATES', 'DETAILS']}
        onSelectTab={mockOnSelectTab}
        selectedTab="UPDATES"
      />
    );

    const tab1 = screen.getByText('UPDATES');
    const tab2 = screen.getByText('DETAILS');

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();

    const tabs = screen.getByRole('tablist');
    expect(tabs).toBeInTheDocument();

    fireEvent.click(tab2);

    expect(mockOnSelectTab).toHaveBeenCalledTimes(1);
  });
});
