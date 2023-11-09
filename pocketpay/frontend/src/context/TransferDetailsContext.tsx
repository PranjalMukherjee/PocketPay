import React, { useContext } from 'react';
import { ContextValue } from '../components/organisms/TransferDetailsCard/TransferDetailsUtils';

export const AppContext = React.createContext<any>({});
export const useAppContext = () => {
  return useContext<ContextValue>(AppContext);
};
