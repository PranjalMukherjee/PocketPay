import { ComponentStory } from '@storybook/react'
import {
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  ACCOUNT_SELECT_DATA,
} from '../../../utils/constants'
import AccountTypeCard from './index'

export default {
  title: 'Organisms/AccountTypeCard',
  component: AccountTypeCard,
}

const Template: ComponentStory<typeof AccountTypeCard> = (args) => (
  <AccountTypeCard {...args} />
)
export const AccountSelection = Template.bind({})
AccountSelection.args = {
  title: ACCOUNT_SELECT_TITLE,
  subtitle: ACCOUNT_SELECT_VALUE,
  data: ACCOUNT_SELECT_DATA,
}

