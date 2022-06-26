import { Box, Switch, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { formatDate } from "../utils/formatDate";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "30px 0",
    height: "100vh",
  },
  mainInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "top",
  },
  time: {
    color: theme.palette.primary.main,
    fontSize: "3rem",
  },
  greetWrapper: {
    display: "flex",
    alignItems: "center",
    margin: "12px 0 0 10px",
  },
  greetings: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: "1.7rem",
    marginLeft: 7,
  },
}));

export const TimeInfo = () => {
  const classes = useStyles();
  const time = formatDate({
    hour12: true,
    timeStyle: "short",
  });

  const fullDate = formatDate({
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <div className={classes.mainInfo}>
        <Typography variant="h3" className={classes.time}>
          {time}
        </Typography>
        <Switch />
      </div>
      <Typography variant="body2">{fullDate}</Typography>
      <Box className={classes.greetWrapper}>
        <WbSunnyIcon color="primary" sx={{ fontSize: 31 }} />
        <Typography variant="body2" className={classes.greetings}>
          Good {getDayPeriod()}, Yarik
        </Typography>
      </Box>
    </div>
  );
};

function getDayPeriod() {
  const hour = new Date().getHours();

  return hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
}
