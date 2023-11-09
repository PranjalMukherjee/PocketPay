import { BusinessDetailsInterface, TradeAddressInterface } from "../../utils/types";
import API from "../index";

export const addBusinessDetails = async (data: BusinessDetailsInterface) => {
    return await API.post(`/business/`, data).catch((error)=>console.error(error));
};

export const addTradingAddress = async (data: TradeAddressInterface) => {
    return await API.post(`/business/tradeAddress`, data).catch((error)=>console.error(error));
};