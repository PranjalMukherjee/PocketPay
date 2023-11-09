import { Meta, Story } from '@storybook/react';
import React from 'react';
import MybusinessIcon from '../../../../public/assets/icons/MyBusiness.svg';
import MenuItem, { MenuItemProps } from '.';
import theme from '../../../theme';

export default {
  title: 'molecules/MenuItem',
  component: MenuItem,
  decorators: [(Story) => <Story />],
} as Meta;

const template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const MyBusinessStory = template.bind({});
MyBusinessStory.args = {
  imgSrc: MybusinessIcon,
  imgAlt: 'My Business',
  style: {
    width: theme.spacing(129),
  },
  text :'My Business'
};