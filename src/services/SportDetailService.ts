import axios, { AxiosResponse } from 'axios';

// Set up the base URL for your backend API
const API_BASE_URL = 'http://localhost:8080/api'; // Update this to your actual backend URL

class SportDetailService {
  /**
   * Fetch detailed information about a specific sport by sportId.
   * @param sportId - The ID of the sport to fetch details for
   * @returns A promise that resolves to the Axios response containing the sport details
   */
  static async getSportDetail(sportId: string): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/sport/${sportId}`);
      return response;
    } catch (error) {
      console.error(`Error fetching sport details for sportId: ${sportId}`, error);
      throw error;
    }
  }

  /**
   * Fetch medal summary information for a specific sport and year.
   * @param sportId - The ID of the sport to fetch medal details for
   * @param year - The year to filter medal data
   * @returns A promise that resolves to the Axios response containing the medal data
   */
  static async getSportMedals(sportId: string, year: number): Promise<AxiosResponse<any>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/medals`, {
        params: {
          sportId,
          year,
        },
      });
      return response;
    } catch (error) {
      console.error(`Error fetching medals for sportId: ${sportId} in year: ${year}`, error);
      throw error;
    }
  }
}

export default SportDetailService;
