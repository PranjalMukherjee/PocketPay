import React from 'react';
import BankCard from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/BankCard',
  component: BankCard
} as Meta<typeof BankCard>;

const template: StoryFn<typeof BankCard> = (args) => <BankCard {...args} />;

export const Default = template.bind({});
Default.args = {
  cardName: 'EUR Visa Debit',
  lastFourDigits: '4546',
  expiryDate: '09/25'
};
