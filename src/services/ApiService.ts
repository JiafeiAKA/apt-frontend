import axios from 'axios';

const OLYMPIC_API_BASE_URL = 'http://localhost:8080/api';

export enum Role {
  ADMIN = 'ADMIN',
  REGISTERED = 'REGISTERED',
}

export const apiClient = axios.create({
  baseURL: OLYMPIC_API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});