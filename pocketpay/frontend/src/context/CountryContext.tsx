import React, { createContext, useState, useMemo } from 'react';

interface CountryType {
  selectedCountry: string;
  countryCode: string;
  phoneNumber: string;
  password: string;
  email: string;
}
interface CountryContextType {
  SignUpDetails: CountryType;
  setCountry: React.Dispatch<React.SetStateAction<CountryType>>;
}
interface SignUpContextProviderProps {
  children: React.ReactNode;
}

export const SignUpDetailsContext = createContext({} as CountryContextType);

export const SignUpContextProvider = ({ children }: SignUpContextProviderProps) => {
  const [SignUpDetails, setCountry] = useState<CountryType>({
    selectedCountry: '',
    countryCode: '+44',
    phoneNumber: '',
    password: '',
    email: ''
  });
  const contextValue = useMemo(
    () => ({ SignUpDetails: SignUpDetails, setCountry: setCountry }),
    [SignUpDetails]
  );
  return (
    <SignUpDetailsContext.Provider value={contextValue}>{children}</SignUpDetailsContext.Provider>
  );
};
