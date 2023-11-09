import React from 'react';
import { Meta, Story } from '@storybook/react';
import Icon, { IconProps } from '.';
import SocialIcon1 from '../../../../public/assets/icons/Google.svg';
import SocialIcon2 from '../../../../public/assets/icons/Facebook.svg';
import SocialIcon3 from '../../../../public/assets/icons/Apple.svg';
import theme from '../../../theme';

export default {
  title: 'atoms/IconButton',
  component: Icon,
  decorators: [(Story) => <Story />],
  parameters: {
    tags: ['autodocs'],
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const GoogleIcon = Template.bind({});
GoogleIcon.args = {
  icon: SocialIcon1,
  width: theme.spacing(7),
  height: theme.spacing(7),
};

export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
  icon: SocialIcon2,
  width: theme.spacing(7),
  height: theme.spacing(7),
};

export const AppleIcon = Template.bind({});
AppleIcon.args = {
  icon: SocialIcon3,
  width: theme.spacing(7),
  height: theme.spacing(7),
};
