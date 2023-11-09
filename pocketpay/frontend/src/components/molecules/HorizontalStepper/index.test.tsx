import React from 'react';
import { render } from '@testing-library/react';
import { Stepper } from '.';
import { STEPPER_LABELS } from '../../../utils/constants';

describe('Horizontal Stepper', () => {
  test('should render with labels', () => {
    const { getByText } = render(<Stepper labels={STEPPER_LABELS[0]} />);
    STEPPER_LABELS[0].forEach((label) => {
      const labelElement = getByText(label);
      expect(labelElement).toBeInTheDocument();
    });
  });
});
