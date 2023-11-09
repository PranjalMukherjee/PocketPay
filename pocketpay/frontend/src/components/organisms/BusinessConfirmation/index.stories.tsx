import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BusinessConfirmation from './index'
import { ZENTECH_BUSINESS } from '../../../utils/constants'

export default {
  title: 'Organisms/BusinessConfirmation',
  component: BusinessConfirmation,
} as ComponentMeta<typeof BusinessConfirmation>

const Template: ComponentStory<typeof BusinessConfirmation> = () => (
  <BusinessConfirmation businessSelectedName={ZENTECH_BUSINESS} />
)

export const BusinessConfirmations = Template.bind({})
BusinessConfirmations.args = {
  businessSelectedName: ZENTECH_BUSINESS,
}
