import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import BankSelectionCard from '.'
import SBI_ICON from '../../../../public/assets/icons/Sbi.svg'
import { NOT_FOUND, SBI_NAME } from '../../../utils/constants'

export default {
  title: 'molecules/BankSelectionCard',
  component: BankSelectionCard,
} as Meta

const Template: StoryFn<typeof BankSelectionCard> = (args) => (
  <BankSelectionCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: SBI_ICON,
  alt: NOT_FOUND,
  bankName: SBI_NAME,
  disabled: true
}