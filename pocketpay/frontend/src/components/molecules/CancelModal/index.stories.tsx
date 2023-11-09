import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CancelModal from '.'

export default {
  title: 'molecules/CancelModal',
  component: CancelModal,
} as Meta<typeof CancelModal>

const template: StoryFn<typeof CancelModal> = (args) => (
  <CancelModal{...args} />
)

export const Primary = template.bind({})
