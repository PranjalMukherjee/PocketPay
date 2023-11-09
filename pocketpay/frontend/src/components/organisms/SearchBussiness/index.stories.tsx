import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BusinessSearch from '.';
export default {
  title: 'Organisms/BusinessSearch',
  component: BusinessSearch
} as Meta<typeof BusinessSearch>;

const template: StoryFn<typeof BusinessSearch> = (args) => <BusinessSearch{...args} />;

export const Primary = template.bind({});
Primary.args = {handleDropdownClick:(value:string)=>console.log(value)};
