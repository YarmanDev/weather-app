import { alpha, Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 10,
    backgroundColor: alpha(theme.palette.info.main, 0.25),
    borderRadius: 10,
    minHeight: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: theme.palette.info.main,
  },
  condition: {
    fontWeight: 600,
    fontSize: 20,
    color: theme.palette.info.main,
  },
}));

export interface IAirInfo {
  name: string;
  quality: number;
}

export const AirCard = ({ quality, name }: IAirInfo) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography sx={{ fontWeight: 700 }}>{quality.toFixed(1)}</Typography>
      <Typography sx={{ fontWeight: 500 }}>{name}</Typography>
    </Box>
  );
};
