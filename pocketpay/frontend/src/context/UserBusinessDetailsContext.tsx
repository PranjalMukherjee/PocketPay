import React, { createContext, useMemo, useState } from "react";
import { DEFAULT_BUSINESS_ADDRESS } from "../utils/constants";
import { Dayjs } from "dayjs";

interface UserBusinessDetailsType {
  businessName: string | undefined;
  businessAddress: string;
  tradeAddress: string[];
  category: string | undefined;
  subCategory: string;
  sizeOfBusiness: string;
  firstName: string;
  lastName: string;
  dob: any;
  country: string;
  address: string;
  city: string;
  postalCode: string;
  addressError?: boolean;
  firstNameError?: boolean;
  lastNameError?: boolean;
  cityError?: boolean;
  postalCodeError?: boolean;
  registrationNumber: string | number;
}
interface UserBusinessDetailsContextProviderProps {
  children: React.ReactNode;
}
interface UserBusinessDetailsContextType {
  userBusinessDetails: UserBusinessDetailsType;
  setUserBusinessDetails: React.Dispatch<
    React.SetStateAction<UserBusinessDetailsType>
  >;
}
export const UserBusinessDetailsContext = createContext(
  {} as UserBusinessDetailsContextType
);

export const UserBusinessDetailsContextProvider = ({
  children,
}: UserBusinessDetailsContextProviderProps) => {
  const [userBusinessDetails, setUserBusinessDetails] =
    useState<UserBusinessDetailsType>({
      businessName: "",
      businessAddress:DEFAULT_BUSINESS_ADDRESS,
      tradeAddress: [],
      category: undefined,
      subCategory: "",
      sizeOfBusiness:"",
      firstName: "",
      lastName: "",
      dob: null,
      country: "",
      address: "",
      city: "",
      postalCode: "",
      registrationNumber:"#23124324342"
    });
  const contextValue = useMemo(
    () => ({
      userBusinessDetails: userBusinessDetails,
      setUserBusinessDetails: setUserBusinessDetails,
    }),
    [userBusinessDetails]
  );
  return (
    <UserBusinessDetailsContext.Provider value={contextValue}>
      {children}
    </UserBusinessDetailsContext.Provider>
  );
};
