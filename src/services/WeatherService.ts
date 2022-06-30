import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSearchEndpoint } from "../constants/weatherEndpoints";
import { IAutocompleteOption } from "../interfaces/autocompleteOptions";
import { ICurrentWeather, IForecast } from "../interfaces/currentForecast";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherapi.com/v1/",
  }),
  endpoints: (build) => ({
    fetchAutocomplete: build.query<IAutocompleteOption[], string>({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
    fetchForecast: build.query<IForecast, string>({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
    fetchAllCities: build.query<ICurrentWeather[], string[]>({
      async queryFn(parameters: string[], api, _, fetchWithBQ) {
        try {
          const forecastPromises = parameters.map((city) =>
            fetchWithBQ(getSearchEndpoint(city))
          );
          const promisesData = await Promise.all(forecastPromises);

          const forecastData = promisesData.map((data) => data.data);
          return { data: forecastData as ICurrentWeather[] }; //TODO change this with providing typing for fetchWithBQ function
        } catch (error) {
          throw error;
        }
      },
    }),
  }),
});
