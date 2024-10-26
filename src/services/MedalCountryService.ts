import { apiClient } from "./ApiService";

export interface OlympicYear {
    id: number;
    year: number;
    sport: string;
    male: number;
    female: number;
    gold: number;
    silver: number;
    bronze: number;
    male_gold: number;
    male_silver: number;
    male_bronze: number;
    female_gold: number;
    female_silver: number;
    female_bronze: number;
    team: string;
    noc: string;
    games: string;
    season: string;
    city: string;
    event: string;
    total_medals: number;
  }
  
  export const getMedalByCountryCodeAndYear = async (
    noc: string,
    year: number
  ): Promise<OlympicYear[]> => {
    const response = await apiClient.get('/medal', {
      params: {
        noc: noc,
        year: year,
      },
    });
    return response.data;
  };