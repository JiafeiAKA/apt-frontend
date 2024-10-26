import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

class CountryDetailService {
  /**
   * Fetch details of a specific country by ID
   * @param countryId - The ID of the country to retrieve details for
   * @returns {Promise<AxiosResponse<any>>} - The response data containing country details
   */
  static async getCountryDetail(countryId: string): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/country/${countryId}`);
      return response;
    } catch (error) {
      console.error('Error fetching country detail:', error);
      throw error;
    }
  }

  /**
   * Fetch medal data for a specific year and country (if needed)
   * @param year - The year to filter medals
   * @param countryId - The ID of the country
   * @returns {Promise<AxiosResponse<any>>} - The response data containing medal details
   */
  static async getCountryMedalData(year: number, countryId: string): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/medals`, {
        params: {
          year,
          countryId,
        },
      });
      return response;
    } catch (error) {
      console.error('Error fetching medal data:', error);
      throw error;
    }
  }
}

export default CountryDetailService;
