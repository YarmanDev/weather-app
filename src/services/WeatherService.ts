import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherAPI = createApi({
  reducerPath: "weatherAPI",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://api.weatherapi.com/v1/current.json?key=39d6a41f2f1d4974b1d181659212911&q=",
  }),
  endpoints: (build) => ({
    fetchWeather: build.query({
      query: (parameters: string) => ({
        url: parameters,
      }),
    }),
  }),
});
