import axios, { AxiosResponse } from "axios";
import { IForm } from "../pages/User";
import { IUser } from '../redux/Interfaces/Users';

const usersApi = axios.create({
    baseURL: 'http://localhost:5000'
});

export const getUsers = async():Promise<AxiosResponse<AxiosResponse<any, any>, any>> => {
  return await usersApi.get<AxiosResponse>('/users');
  
}

export const createUser = async(newUser:IForm):Promise<AxiosResponse<AxiosResponse<any, any>, any>> => {
    return await usersApi.post<AxiosResponse>('/users',newUser )
}


export const updateUser = async(id:number, upUser:IForm):Promise<AxiosResponse<AxiosResponse<any, any>, any>> => {
    return await usersApi.put(`/users/${id}`, upUser)
}

export const deleteUser = async(id:number) => {
    return await usersApi.delete<AxiosResponse>(`/users/${id}`);
}


export default usersApi;
