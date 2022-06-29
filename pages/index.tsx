import * as React from "react";
import type { NextPage } from "next";

import { Box, Container, Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Autocomplete } from "../src/components/Autocomplete";
import { ForecastCard } from "../src/components/ForecastCard";

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

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Autocomplete />
      <Box className={classes.cards}>
        <ForecastCard />
      </Box>
    </Container>
  );
};

export default Home;
