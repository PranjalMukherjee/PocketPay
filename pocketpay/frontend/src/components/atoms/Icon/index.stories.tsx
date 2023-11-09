import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import IconComponent, { IconComponentProps } from '.';
import BANK_ICON from '../../../../public/assets/icons/BankIcon.svg';
import LLOYDS_BANK_ICON from '../../../../public/assets/icons/LloydsBankIcon.svg';
import CARD_ICON from '../../../../public/assets/icons/CardIcon.svg';
import { ICON_ALT_TEXT } from  '../../../utils/constants';

export default {
  title: "atoms/Icon",
  component: IconComponent,
} as Meta;

const Template: StoryFn<IconComponentProps> = (args) => <IconComponent {...args} />;

export const BankIcon = Template.bind({});
BankIcon.args = {
  height: "35px",
  width: "30px",
  padding: "10px",
  src: BANK_ICON,
  alt: ICON_ALT_TEXT
};

export const LloydsBankIcon = Template.bind({});
LloydsBankIcon.args = {
  height: "40px",
  width: "40px",
  src: LLOYDS_BANK_ICON,
  alt: ICON_ALT_TEXT
};

export const CardIcon = Template.bind({});
CardIcon.args = {
  src: CARD_ICON,
  alt: ICON_ALT_TEXT
};
