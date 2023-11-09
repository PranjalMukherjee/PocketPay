import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import { Dropdown } from '.';
import Flag from '../../../../public/assets/images/ukflag.svg';
import Europe from '../../../../public/assets/images/europeFlag.svg';
import India from '../../../../public/assets/images/indiaFlag.svg';
import { DROPDOWN_OPTIONS, PLACEHOLDERS } from '../../../utils/constants';
const Items = ['Business', 'Personal', 'rent/utilities'];
const icons = [
  { flag: India, code: 'INR' },
  { flag: Flag, code: 'UK' },
  { flag: Europe, code: 'EUR' }
];
describe('Dropdown ', () => {
  test('should render dropdown correctly', () => {
    const handleCategoryChange = jest.fn();
    render(<Dropdown menu={Items} handleChange={handleCategoryChange} />);

    const selectButton = screen.getByRole('combobox');
    fireEvent.mouseDown(selectButton);

    const listbox = screen.getByRole('listbox');
    const list = within(listbox);
    const businessOption = list.getByText('Business');
    fireEvent.click(businessOption);

    expect(handleCategoryChange).toHaveBeenCalledWith('Business');
  });

  test('should render the icons with country code', () => {
    render(
      <Dropdown menu={DROPDOWN_OPTIONS[0]} labelText={PLACEHOLDERS[0]} displayIcon icons={icons} />
    );
    const selectButton = screen.getByRole('combobox');
    fireEvent.mouseDown(selectButton);

    const iconElements = screen.getAllByAltText('Flag');
    expect(iconElements).toHaveLength(icons.length);

    const iconTypo = screen.getAllByTestId('country-code');
    expect(iconTypo).toHaveLength(3);

    iconElements.forEach((icon, index) => {
      expect(icon).toHaveAttribute('src', icons[index].flag);
      expect(icon).toHaveAttribute('alt', 'Flag');
    });

    const countryTypo = screen.getByText(DROPDOWN_OPTIONS[0][1]);
    expect(countryTypo).toBeInTheDocument();
  });
  test(' should check Icons with null object', () => {
    render(<Dropdown menu={DROPDOWN_OPTIONS[0]} labelText={PLACEHOLDERS[0]} displayIcon />);
  });
});
