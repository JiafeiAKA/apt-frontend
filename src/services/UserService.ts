import { apiClient, Role } from "./ApiService";

export interface UserRes{
    userId : number;
    username : string;
    passwordHash : string;
    email : string ;
    role : Role;
    createdAt : string

 
}


export const getAllUser = async (
  ): Promise<UserRes[]> => {
    const response = await apiClient.get('/users');
    // loginRespone.value = response.data;
  
    return response.data;
  };



  export const updateUserRole = async (
    id : number,
    userDetails : UserRes
  ): Promise<UserRes[]> => {
    const response = await apiClient.put('/users'+'/'+id,
      userDetails
    );
    // loginRespone.value = response.data;
  
    return response.data;
  };


export const deleteUser = async (
  id : number
): Promise<UserRes[]> => {
  const response = await apiClient.delete('/users'+'/'+id );
  
  // loginRespone.value = response.data;

  return response.data;
};