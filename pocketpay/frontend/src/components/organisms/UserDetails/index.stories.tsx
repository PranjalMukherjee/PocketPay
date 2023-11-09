import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserDetails from '.';
import { UserBusinessDetailsContextProvider } from '../../../context/UserBusinessDetailsContext';

export default {
  title: 'Organisms/UserDetails',
  component: UserDetails
} as ComponentMeta<typeof UserDetails>;

const Template: ComponentStory<typeof UserDetails> = () => (
  <UserBusinessDetailsContextProvider>

    <UserDetails />
  </UserBusinessDetailsContextProvider>
);

export const YourDetails = Template.bind({});
YourDetails.args = {};
