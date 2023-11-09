import API from "../index";
import { UserInterface } from "../../utils/types";

export const createSignUpDetails = async (userData: UserInterface) => {
  return await API.post(`/users/`,userData).catch((error)=>console.error(error));
  
};
export const addUserLoginDetails = async (email: string, password: string) => {
    getUserByEmail(email);
    return await API.post(`/users/login`, {
      email: email,
      password: password
    }).catch((error)=>console.error(error));
    
};
export const getUserByEmail = async (email: string) => {
  try {
    const response = await API.get(`/users/verify?email=${email}`);
    const userID = parseInt(response.data.id, 10); 
    localStorage.setItem('userID', `${userID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};