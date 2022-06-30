import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { Current } from "../../interfaces/currentForecast";
import { formatDate } from "../../utils/formatDate";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "80%",
    width: "80%",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.common.white,
  },
  date: {
    fontSize: 20,
    fontWeight: 500,
  },
  degrees: {},
}));
type IProps = Current & { location: string };

export const MainWeatherInfo = (props: IProps) => {
  const classes = useStyles();
  const { condition, temp_c, location } = props;

  return (
    <Box className={classes.root}>
      <Typography variant="body2" sx={{ fontSize: 35 }}>
        {location}
      </Typography>
      <Image
        src={`https:${condition.icon}`}
        alt={condition.text}
        width={"150px"}
        height={"150px"}
      />
      <Typography variant="body1" className={classes.date}>
        Today, {formatDate({ day: "numeric", month: "long" })}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 80 }}>
        {temp_c.toFixed(0)}°
      </Typography>
      <Typography variant="body2" sx={{ fontSize: 27 }}>
        {condition.text}
      </Typography>
    </Box>
  );
};
