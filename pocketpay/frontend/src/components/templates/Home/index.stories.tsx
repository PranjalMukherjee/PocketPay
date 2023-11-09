import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DashBoard from './index';
import SideNavBar from '../../organisms/SideNavigation';
import { Header } from '../../organisms/Header';

export default {
  title: 'Templates/DashBoard',
  component: DashBoard
} as Meta;

const Template: StoryFn<typeof DashBoard> = (args) => <DashBoard {...args} />;

export const Default = Template.bind({});

Default.args = {
  navBar: <SideNavBar newUser={true} />,
  header: <Header username={'Ross Gener'} />
};
