import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { ForecastDay } from "../../interfaces/currentForecast";
import theme from "../../theming/theme";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 15,
  },
}));

export const ForecastCard = ({ day, date }: ForecastDay) => {
  const isToday = new Date().toDateString() === new Date(date).toDateString();
  const classes = useStyles();
  const background = isToday
    ? theme.palette.primary.main
    : theme.palette.secondary.main;

  return (
    <Box className={classes.root} sx={{ backgroundColor: background }}>
      <Image
        src={`https:${day.condition.icon}`}
        alt={day.condition.text}
        width={"75px"}
        height={"75px"}
      />
      <Typography variant="body2" sx={{ fontWeight: 500, margin: 1 }}>
        {getWeekDay(date)}
      </Typography>
      <Typography variant="body2">{day.avgtemp_c.toFixed(0)}°</Typography>
    </Box>
  );
};

function getWeekDay(date: string) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekdays[new Date(date).getDay()];
}
