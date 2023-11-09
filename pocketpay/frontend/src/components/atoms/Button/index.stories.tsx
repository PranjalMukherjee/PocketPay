import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'
import { PRIMARY_BUTTON_TEXT, SECONDARY_BUTTON_TEXT } from '../../../utils/constants'
import theme from '../../../theme/index'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: PRIMARY_BUTTON_TEXT,
  sx: {
     '&:hover': {
      backgroundColor: theme.palette.primary[300],
      color: theme.palette.structuralColors.white,
      border: 'none',
    },
    width: '218px',
    height: '56px',
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.structuralColors.white,
  },
  onClick: action('Primary button clicked'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: SECONDARY_BUTTON_TEXT,
  variant: 'contained',
  sx: {
    '&:hover': {
        backgroundColor: theme.palette.structuralColors.buttonHover,
        color: theme.palette.primary[500],
    },
    color: theme.palette.primary[500],
    backgroundColor: theme.palette.structuralColors.white,
    width: '218px',
    height: '56px',
  },
  onClick: action('Secondary button clicked'),
}

