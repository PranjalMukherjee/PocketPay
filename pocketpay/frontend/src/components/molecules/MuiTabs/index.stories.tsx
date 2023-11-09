import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import theme from '../../../theme';
import MuiTabs, { MuiTabsProps } from '.';

export default {
  title: 'molecules/MuiTabs',
  component: MuiTabs
} as Meta;

const Template: StoryFn<MuiTabsProps> = (args) => <MuiTabs {...args} />;

export const StandardVariant = Template.bind({});
StandardVariant.args = {
  variant: 'standard',
  tabNames: ['UPDATES', 'DETAILS'],
  selectedColor: theme.palette.primary.main,
  backgroundColor: theme.palette.structuralColors.white,
  notSelectedColor: theme.palette.text.mediumEmphasis,
  isTabDisabled: false,
  selectedTab: 'UPDATES',
  onSelectTab: (tabName) => {
    console.log(`Selected tab: ${tabName}`);
  }
};
