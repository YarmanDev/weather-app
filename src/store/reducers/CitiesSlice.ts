import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICityState {
  cities: string[];
}

const initialState: ICityState = {
  cities: [],
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<string>) => {
      const city = action.payload;
      state.cities.indexOf(city) === -1 && state.cities.push(city);
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter(
        (city) => city.toLowerCase() !== action.payload.toLowerCase()
      );
    },
  },
});

export default citiesSlice.reducer;
