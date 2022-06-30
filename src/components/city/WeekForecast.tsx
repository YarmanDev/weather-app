import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IForecast } from "../../interfaces/currentForecast";
import { ForecastCard } from "./ForecastCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridColumnGap: 20,
    marginTop: 20,
    width: "100%",
  },
}));

export const WeekForecast = (data: IForecast) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {data.forecast.forecastday.map((day, index) => (
        <ForecastCard key={data.current.condition.text + index} {...day} />
      ))}
    </Box>
  );
};
