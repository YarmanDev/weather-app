import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAutocompleteOption } from "../interfaces/autocompleteOptions";

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
    fetchForecast: build.query<IAutocompleteOption[], string>({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
  }),
});
