import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PayFromAccountCard } from './index';

export default {
  title: 'Organisms/PayFromAccount',
  component: PayFromAccountCard
} as Meta<typeof PayFromAccountCard>;

const template: StoryFn<typeof PayFromAccountCard> = (args) => <PayFromAccountCard {...args} />;

export const PayFromLloylodAccount = template.bind({});
PayFromLloylodAccount.args = {
  accountType: 'business',
  amount: '75.38 GBP'
};
