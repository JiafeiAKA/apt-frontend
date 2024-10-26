import axios from 'axios';
import { apiClient, Role } from './ApiService';

interface LoginResponse {
  token: string;
}

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await apiClient.post('/login', { username, password });
  return response.data;
};

/**
 * "username": "user2",
"passwordHash": "hashed_password_here",
"email": "user2@example.com",
"role": "REGISTERED",
"createdAt" : "2024-10-25T10:15:30"
 * @param username 
 * @param password 
 */

export const signup = async (
  username: string,
  passwordHash: string,
  email: string,
  role: Role,
  createdAt: string
): Promise<void> => {
  await apiClient.post('/users/newUser', {
    username,
    passwordHash,
    email,
    role,
    createdAt,
  });
};

export const saveToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

export const clearToken = (): void => {
  localStorage.removeItem('authToken');
};