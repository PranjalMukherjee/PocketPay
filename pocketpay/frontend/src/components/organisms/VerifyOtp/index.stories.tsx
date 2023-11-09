import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import VerifyOTP from '.';

export default {
  title: 'Organisms/VerifyOTP',
  component: VerifyOTP
} as Meta;

const Template: StoryFn<typeof VerifyOTP> = (args) => <VerifyOTP {...args} />;

export const Default = Template.bind({});
Default.args = {
  phoneNumber: '+44020 7947 6330'
};
