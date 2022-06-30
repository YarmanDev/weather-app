import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: "20px",
    borderRadius: "30px",
  },
  title: {
    fontWeight: "500 !important",
  },
}));

interface IProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const WidgetWrapper = ({ title, children }: IProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
