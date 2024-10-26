// RegisterService.ts
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Update with your actual API URL

export default {
  register(username: string, email: string, password: string): Promise<AxiosResponse<any>> {
    return axios.post(`${API_BASE_URL}/register`, {
      username,
      email,
      password,
    });
  },
};
