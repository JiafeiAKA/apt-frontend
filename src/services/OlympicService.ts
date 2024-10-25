import { OlympicDetail } from '@/types';
import axios, { AxiosResponse } from 'axios';

const OLYMPIC_API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: OLYMPIC_API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getOlympic(year: number): Promise<AxiosResponse<OlympicDetail[]>> {
    return apiClient.get<OlympicDetail[]>('/althletes' + '/' + year);
  },
  getOlympicWithPagination(
    year: number,
    currentPage: number,
    pageSize: number
  ): Promise<AxiosResponse<OlympicDetail[]>> {
    return apiClient.get<OlympicDetail[]>('/althletes', {
      params: {
        year: year,
        page: currentPage,
        pageSize: pageSize,
      },
    });
  },
};
