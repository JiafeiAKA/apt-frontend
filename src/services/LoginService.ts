// LoginService.ts
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Update to your actual login endpoint

export default {
  login(username: string, password: string): Promise<AxiosResponse<any>> {
    return axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });
  },
};
