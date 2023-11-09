import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChooseBankCard, { ChooseBankProps } from '.';
import theme from '../../../theme';

export default {
  title: 'organisms/ChooseBank',
  component: ChooseBankCard,
  decorators: [(Story) => <Story />],
  tags: ['autodocs']
} as Meta;

const template: Story<ChooseBankProps> = (args) => <ChooseBankCard {...args} />;

export const ChooseBankStory = template.bind({});

ChooseBankStory.args = {
  style: {
    width: theme.spacing(129)
  }
};
