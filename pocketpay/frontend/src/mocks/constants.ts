import { BankInterface,TransactionInterface  } from "../utils/types";

export const bankPayments: BankInterface[] = [
  {
    id: 1,
    bankName: "LIoyda",
    accountNo: "729019188810",
    code: "24-14-70",
  },
];
export const transactions: TransactionInterface[] = [
  {
    id: 1,
    senderAmount: 100,
    senderCurrency: "GBR",
    receiverCurrency: "EUR",
    receiverAmount: 114,
    receipient: {
      email: "mario.gabriel@gmail.com",
      accountNo: "123456885865",
      firstName: "Mario",
      lastName: "Gabriel",
      ifsc: "ABFJ12929G",
      accountType: "Checking",
    },
    purpose: "Paying for goods or services abroad",
    date: new Date(),
    status: "Sending",
    transferNumber: "3227627272",
  },
  {
    id: 2,
    senderAmount: 100,
    senderCurrency: "GBR",
    receiverCurrency: "EUR",
    receiverAmount: 114,
    receipient: {
      email: "mario.gabriel@gmail.com",
      accountNo: "123456885865",
      firstName: "Sai",
      lastName: "sree",
      ifsc: "ABFJ12929G",
      accountType: "Checking",
    },
    purpose: "Paying for goods or services abroad",
    date: new Date(),
    status: "Cancelled",
    transferNumber: "3227627272",
  },
];