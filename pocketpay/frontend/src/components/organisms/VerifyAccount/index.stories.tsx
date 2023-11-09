import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BusinessSearch from '.'
import VerifyAccountCard from '.'
import { UserBusinessDetailsContextProvider } from '../../../context/UserBusinessDetailsContext'

export default {
  title: 'Organisms/VerifyAccountCard',
  component: BusinessSearch,
} as ComponentMeta<typeof BusinessSearch>

const Template: ComponentStory<typeof VerifyAccountCard> = () => (
  <UserBusinessDetailsContextProvider>
  <VerifyAccountCard />
  </UserBusinessDetailsContextProvider>

)

export const Default = Template.bind({})
Default.args = {}
