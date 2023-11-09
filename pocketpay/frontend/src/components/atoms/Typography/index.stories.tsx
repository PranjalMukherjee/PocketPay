import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Typography, { TypographyProps } from './index'
import { BODY_TEXT, CAPTION_TEXT, HEADING_TEXT } from '../../../utils/constants'

export default {
  title: 'atoms/Typography',
  component: Typography,
} as Meta

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />

export const Heading = Template.bind({})
Heading.args = {
  variant: 'h1',
  children: HEADING_TEXT,
}

export const Body = Template.bind({})
Body.args = {
  variant: 'body3',
  children: BODY_TEXT,
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  children: CAPTION_TEXT,
}
