import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import Container from "@mui/material/Container";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TimeInfo } from "../../src/components/city/TimeInfo";
import { useRouter } from "next/router";
import { weatherAPI } from "../../src/services/WeatherService";
import { getForecastEndpoint } from "../../src/constants/weatherEndpoints";
import { WeekForecast } from "../../src/components/city/WeekForecast";
import { AirQuality } from "../../src/components/city/AirQuality";
import { MainWeatherInfo } from "../../src/components/city/MainWeatherInfo";
import { HourForecast } from "../../src/components/city/HourForecast";

interface IProps {
  params: {
    id: string;
  };
}

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  widgets: {
    display: "grid",
    marginTop: 20,
    width: "100%",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridColumnGap: 25,
  },
}));

const CityPage: NextPage<IProps> = ({ params }) => {
  const { id } = params;
  const classes = useStyles();
  const { data } = weatherAPI.useFetchForecastQuery(getForecastEndpoint(id));
  if (!data) return <></>;
  console.log(data);
  const hourForecast = data.forecast.forecastday[0].hour.slice(0, 7);

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
          <WeekForecast {...data} />
          <Box className={classes.widgets}>
            <AirQuality airData={data.current.air_quality} />
            <HourForecast info={hourForecast} />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ backgroundColor: "white" }}
          className={classes.item}
        >
          <MainWeatherInfo {...data.current} location={data.location.name} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { params: context.params },
  };
};

export default CityPage;
