import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextChip, TextChipProps } from '.'; 
import theme from '../../../theme/index';

export default {
  component: TextChip,
  title: 'atoms/Chip',
  argTypes: {
    label: {
      control: 'text',
    }
  },
} as Meta;

const defaultStyle = {
  display: 'flex',
  width: 'max-width',
  height: theme.spacing(6.5),
  padding: `${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(0.5)} ${theme.spacing(3)}`,
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  flexShrink: 0,
  borderRadius: theme.spacing(4),
  background: theme.palette.structuralColors.buttonHover,
  color: theme.palette.primary[500],
    '& .MuiChip-deleteIcon': {
      display:'none',
    },
};

const Template: Story<TextChipProps> = (args) => <TextChip {...args} style={defaultStyle}/>;

export const Default: Story<TextChipProps> = Template.bind({});
Default.args = {
  label: 'New',
};
