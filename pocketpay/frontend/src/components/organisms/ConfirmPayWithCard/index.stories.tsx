import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PurchaseconfirmCard } from '.';

export default {
  title: 'Organisms/PurchaseconfirmCard',
  component: PurchaseconfirmCard
} as Meta<typeof PurchaseconfirmCard>;

const template: StoryFn<typeof PurchaseconfirmCard> = (args) => <PurchaseconfirmCard {...args} />;

export const ConfirmPurchase = template.bind({});
ConfirmPurchase.args = {
  cardDigits: 9319,
  currencytype: 'GBP',
  amount: 100
};
