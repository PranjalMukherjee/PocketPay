import React from 'react';
import { Meta, Story } from '@storybook/react';
import SendIcon from '../../../../public/assets/icons/Send.svg';
import PersonalAccount from '../../../../public/assets/icons/Setup.svg';
import OptionCard, { OptionCardProps } from '.';
import theme from '../../../theme';

export default {
  title: 'molecules/OptionCard',
  component: OptionCard,
  decorators: [(Story) => <Story />]
} as Meta;

const template: Story<OptionCardProps & { style: React.CSSProperties }> = (args) => (
  <OptionCard {...args} />
);

export const SendMoney = template.bind({});

SendMoney.args = {
  style: {
    width: theme.spacing(129)
  },
  iconTitle: 'Send Money',
  src: SendIcon,
  caption: 'Pay an international employee, invoice, or expense'
};
export const FinishAccount = template.bind({});

FinishAccount.args = {
  style: {
    width: theme.spacing(129)
  },
  iconTitle: 'Finish Account Setup',
  src: PersonalAccount,
  caption: 'Get balances in multiple currencies, and take buisness goals'
};
