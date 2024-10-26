// // LoginService.ts
// import axios, { AxiosResponse } from 'axios';
// import { LoginResponse, tokenKey } from './AuthenticationService';
// import { apiClient } from './ApiService';
// import { ref } from 'vue';


// export const loginRespone = ref<LoginResponse>();

// export default {
//   login(username: string, password: string): Promise<LoginResponse> {
//     return apiClient.post(`/login`, {
//       username,
//       password,
//     });
//   },
// };


// export const saveToken = (token: string): void => {
//   localStorage.setItem(tokenKey, token);
// };

// export const clearToken = (): void => {
//   localStorage.removeItem(tokenKey);
// };
