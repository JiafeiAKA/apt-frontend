export interface OlympicDetail {
  NOC: string;
  Gold: number;
  Silver: number;
  Bronze: number;
  Total: number;
  Sports: CountrySportDetail[];
}

export interface CountrySportDetail {
  Sport: string;
  Gold: number;
  NOC: string;
  MedalCount: number;
  Bronze: number;
  Silver: number;
}

export interface CountryDetail{
  Name: string;
  Capital: string;
  Currency: string;
  Continent: string;
  Population: number;
  OfficialLanguage: string;
}