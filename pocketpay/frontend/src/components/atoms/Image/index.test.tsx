import React from 'react';
import ImageComponent from '.';
import { render } from '@testing-library/react';
import HOME_IMAGE from '../../../../public/assets/images/HomeImage.svg';
import { NOT_FOUND } from '../../../utils/constants';

test('render image', () => {
  const element = render(<ImageComponent imgAlt={NOT_FOUND} imgSrc={HOME_IMAGE} />);
  expect(element).toBeDefined();
});
