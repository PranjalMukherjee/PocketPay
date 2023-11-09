import type { Meta, StoryObj } from "@storybook/react";
import { TransferDetailsCard } from ".";
import { amountCardProps } from "./TransferDetailsUtils";
import { TransactionContextProvider } from "../../../context/TransactionContext";
import React from "react";
const meta: Meta<typeof TransferDetailsCard> = {
  title: "organisms/TransferDetails",
  component: TransferDetailsCard,
  decorators: [
    (Story) => (
      <TransactionContextProvider>
        <Story />
      </TransactionContextProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const AmountCardDetails: Story = {
  name: "amount card details",
  args: amountCardProps,
};
