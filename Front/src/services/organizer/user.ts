import { useApi } from "../../hooks/useApi";

// eslint-disable-next-line react-hooks/rules-of-hooks
const api = useApi();

export async function getAllUsers() {
  
  try {
    const response = await api.get(`users?_sort=id:desc`);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getUserByID(id: number) {
  
  try {
    const response = await api.get(`users/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function login(params : any) {
  
    try {
      const response = await api.post(`user/login`, params);      
      console.log("🚀 ~ file: user.ts:29 ~ login ~ response:", response)
      return response;
    } catch (error) {
      return error;
    }
  }
export async function register(params : any) {

  try {
    const response = await api.post(`users`, params);      
    console.log("🚀 ~ file: user.ts:29 ~ login ~ response:", response)
    return response;
  } catch (error) {
    return error;
  }
} 