import React, { useState } from 'react';
import AddressCard, { AddressCardProps } from '.';
import { Meta, Story } from '@storybook/react';
import theme from '../../../theme';

export default {
  title: 'Molecules/AddressCard',
  component: AddressCard
} as Meta;

const Template: Story<AddressCardProps> = (args: any) => {

  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    transition: 'background-color 0.3s ease'
  };

  return (
    <AddressCard
      {...args}
      style={{
        ...baseStyle
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  head: 'Address 1',
  text: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
};
