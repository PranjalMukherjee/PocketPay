import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import PaymentCard from '.'
import DEBIT_CARD from '../../../../public/assets/images/DebitCard.svg'
import { PAYMENT_CARD_TEXT, PAYMENT_PRIMARY_TEXT, PAYMENT_SECONDARY_TEXT } from '../../../utils/constants'

export default {
  title: 'Molecules/PaymentCard',
  argTypes: {
    onChange: { action: 'Radio clicked' },
  },
  component: PaymentCard,
} as Meta

const Template: StoryFn<typeof PaymentCard> = (args) => (
  <PaymentCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  icon: DEBIT_CARD,
  cardHeader: PAYMENT_CARD_TEXT,
  cardDescription: PAYMENT_PRIMARY_TEXT,
  arrivalDescription: PAYMENT_SECONDARY_TEXT,
}
