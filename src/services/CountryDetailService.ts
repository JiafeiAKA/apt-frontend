import axios, { AxiosResponse } from 'axios';
import { apiClient } from './ApiService';

const API_BASE_URL = 'http://localhost:8080/api';

export interface CountryResponse {
  CountryCode: string;
  Name: string;
  CapitalCity: string;
  Currency: string;
  Continent: string;
  Population: number;
  OfficialLanguage: string;
}

export const getCountryDetailByCode = async (
  countryCode: string
): Promise<CountryResponse> => {
  const response = await apiClient.get('/country', {
    params: {
      countryCode,
    },
  });
  console.log(response);
  return mapToCountryResponse(response.data);
};

export const addNewCountry = async (
  country: CountryResponse
): Promise<CountryResponse> => {
  const response = await apiClient.post('/country/newCountry', country);
  console.log(response);
  return mapToCountryResponse(response.data);
};

export const deleteCountry = async (
  country: CountryResponse
): Promise<CountryResponse[]> => {
  const response = await apiClient.request({
    url: '/country/delete',
    method: 'delete',
    data: country,
  });

  return response.data;
};

// export const deleteCountry = async (
//   CountryCode: string,
//   Name: string,
//   CapitalCity: string,
//   Currency: string,
//   Continent: string,
//   Population: number,
//   OfficialLanguage: string
// ): Promise<CountryResponse[]> => {
//   const response = await apiClient.request({
//     url: '/country/delete',
//     method: 'delete',
//     data: {
//       CountryCode: CountryCode,
//       Name: Name,
//       CapitalCity: CapitalCity,
//       Currency: Currency,
//       Continent: Continent,
//       Population: Population,
//       OfficialLanguage: OfficialLanguage,
//     },
//   });

//   return response.data;
// };

const mapToCountryResponse = (data: any): CountryResponse => ({
  CountryCode: data.CountryCode,
  Name: data.Name,
  CapitalCity: data.CapitalCity,
  Currency: data.Currency,
  Continent: data.Continent,
  Population: data.Population,
  OfficialLanguage: data.OfficialLanguage,
});

// export default CountryDetailService;
