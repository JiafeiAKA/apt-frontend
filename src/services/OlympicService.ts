import { OlympicDetail } from '@/types';
import axios, { AxiosResponse } from 'axios';
import { apiClient } from './ApiService';

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