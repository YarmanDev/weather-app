import * as React from "react";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../src/hooks/redux";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { weatherAPI } from "../src/services/WeatherService";

const Home: NextPage = () => {
  const { data } = weatherAPI.useFetchWeatherQuery("Lviv&aqi=no");

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <div>
      <Typography></Typography>
    </div>
  );
};

export default Home;
