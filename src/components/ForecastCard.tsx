import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    // maxWidth: "300px",
    // height: "300px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "30px",
    padding: "10px",
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

export const ForecastCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Lviv</Typography>
      <Image
        src="https://cdn.weatherapi.com/weather/64x64/day/113.png"
        width={"150px"}
        height={"150px"}
      />
      <Typography variant="body1" className={classes.condition}>
        Sunny
      </Typography>
      <Box className={classes.info}>
        <span>Temp: 29*</span>
        <span>Wind: 5.4</span>
      </Box>
    </Box>
  );
};
