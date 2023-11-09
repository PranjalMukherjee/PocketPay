import React from 'react';
import SendingMoneyCard from '.';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Organisms/SendingMoneyCard',
  component: SendingMoneyCard,
  argTypes: {
    style: { control: 'object' }
  }
} as Meta;

const Template: Story = (args) => <SendingMoneyCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  style: {}
};
