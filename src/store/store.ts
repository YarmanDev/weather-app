import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { weatherAPI } from "../services/WeatherService";
import { getLocalStorage } from "../utils/localStorageService";
import citiesReducer from "./reducers/CitiesSlice";

const rootReducer = combineReducers({
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  citiesReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState: getLocalStorage(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
