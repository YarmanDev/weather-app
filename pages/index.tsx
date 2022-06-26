import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TimeInfo } from "../src/components/TimeInfo";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: "20px 20px",
    height: "100vh",
  },
  wrapper: {
    minHeight: "100%",
    borderRadius: "20px",
    overflow: "hidden",
  },
  item: {
    padding: "30px",
    minHeight: "100%",
  },
}));

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container className={classes.wrapper}>
        <Grid
          item
          md={8}
          sx={{ backgroundColor: "#CCDDFF" }}
          className={classes.item}
        >
          <TimeInfo />
        </Grid>
        <Grid
          item
          md={4}
          sx={{ backgroundColor: "white" }}
          className={classes.item}
        >
          kek
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
