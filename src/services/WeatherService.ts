import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSearchEndpoint } from "../constants/weatherEndpoints";
import { IAutocompleteOption } from "../interfaces/autocompleteOptions";
import { ICurrentForecast } from "../interfaces/currentForecast";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.weatherapi.com/v1/",
  }),
  endpoints: (build) => ({
    fetchAutocomplete: build.query<IAutocompleteOption[], string>({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
    fetchForecast: build.query<ICurrentForecast, string>({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
    fetchAllCities: build.query<ICurrentForecast[], string[]>({
      async queryFn(parameters: string[], api, _, fetchWithBQ) {
        try {
          const forecastPromises = parameters.map((city) =>
            fetchWithBQ(getSearchEndpoint(city))
          );
          const promisesData = await Promise.all(forecastPromises);

          const forecastData = promisesData.map((data) => data.data);
          return { data: forecastData as ICurrentForecast[] }; //TODO change this with providing typing for fetchWithBQ function
        } catch (error) {
          throw error;
        }
      },
    }),
  }),
});
