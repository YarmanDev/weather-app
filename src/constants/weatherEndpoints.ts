const API_KEY = "39d6a41f2f1d4974b1d181659212911"; // FYI in real project i would use environment variables

export const getSearchEndpoint = (city: string) =>
  `current.json?key=${API_KEY}&q=${city}`;

export const getAutocompleteEndpoint = (city: string) =>
  `search.json?key=${API_KEY}&q=${city}`;

export const getForecastEndpoint = (city: string) =>
  `forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;
