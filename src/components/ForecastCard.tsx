import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { ICurrentForecast } from "../interfaces/currentForecast";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "30px",
    padding: "20px",
  },
  condition: {
    margin: "0 0 15px 0",
    fontSize: 24,
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
}));

export const ForecastCard = ({ location, current }: ICurrentForecast) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">{location.name}</Typography>
      <Image
        src={`https:${current.condition.icon}`}
        alt={location.name}
        width={"150px"}
        height={"150px"}
      />
      <Typography variant="body1" className={classes.condition}>
        {current.condition.text}
      </Typography>
      <Box className={classes.info}>
        <span>Temp: {current.temp_c}°</span>
        <span>Wind: {current.wind_kph} km/h</span>
      </Box>
    </Box>
  );
};
