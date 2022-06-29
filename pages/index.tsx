import * as React from "react";
import type { NextPage } from "next";

import { Box, Container, Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Autocomplete } from "../src/components/Autocomplete";
import { ForecastCard } from "../src/components/ForecastCard";
import { useAppSelector } from "../src/hooks/redux";
import { weatherAPI } from "../src/services/WeatherService";
import { getSearchEndpoint } from "../src/constants/weatherEndpoints";
import { ICurrentForecast } from "../src/interfaces/currentForecast";
import Link from "../src/components/Link";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 20px",
    height: "100vh",
  },
  cards: {
    display: "grid",
    marginTop: 30,
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: 45,
    gridRowGap: 45,
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();
  const { cities } = useAppSelector((state) => state.citiesReducer);
  const { data: cityData } = weatherAPI.useFetchAllCitiesQuery(cities);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Autocomplete />
      <Box className={classes.cards}>
        {cityData?.map((city) => (
          <Link key={city.location.name} href={`city/${city.location.name}`}>
            <ForecastCard {...city} />
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
