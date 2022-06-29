import * as React from "react";
import type { NextPage } from "next";

import { Container, Theme } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Autocomplete } from "../src/components/Autocomplete";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    padding: "20px 20px",
    height: "100vh",
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Autocomplete />
    </Container>
  );
};

export default Home;
