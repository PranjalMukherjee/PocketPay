import { getUserIdAndToken } from '../../utils/functions';
import { BusinessUserInterface, TransactionInterface } from '../../utils/types';
import API from '../index';



export class TransactionService {
  static createTransaction = async (transaction: TransactionInterface) => {
    const { user_id, token } = await getUserIdAndToken();
    return await API.post(`/transaction/${user_id}`, transaction, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static getTransactions = async () => {
    const { user_id, token } = await getUserIdAndToken();
    return await API.get(`/transaction/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static updateStatus = async (
    id: number | undefined,
    status: 'SENT' | 'SENDING' | 'CANCELLED'
  ) => {
    const { token } = await getUserIdAndToken();
    return await API.patch(
      `/transaction/${id}`,
      { status: status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  };

  static addBusinessUser = async (user: BusinessUserInterface) => {
    const { token } = await getUserIdAndToken();
    await API.post(`/business/businessOwner`, user, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static getPaymentDetails = async (mode: 'BANK' | 'CARD') => {
    const { user_id, token } = await getUserIdAndToken();
    return await API.get(`/transaction/payments/users/${user_id}?paymentMode=${mode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static getPaymentById = async (id: number) => {
    const { token } = await getUserIdAndToken();
    return await API.get(`/transaction/payments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  static getBusiness = async () => {
    const { user_id, token } = await getUserIdAndToken();
    return await API.get(`/business/${user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
}
