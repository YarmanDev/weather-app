import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h1" color="#5A83F8">
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Link href={"/login"}>
          <Typography component="h2" color="secondary">
            Boilerplate for building faster.
          </Typography>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
