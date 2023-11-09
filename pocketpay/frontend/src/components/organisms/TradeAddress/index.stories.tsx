import { ComponentStory } from '@storybook/react'
import TradeAddress from './index'

export default {
  title: 'Organisms/TradeAddress',
  component: TradeAddress,
}

const Template: ComponentStory<typeof TradeAddress> = (args: any) => (
  <TradeAddress {...args} />
)

export const TradingAddress = Template.bind({})
TradingAddress.args = {}
