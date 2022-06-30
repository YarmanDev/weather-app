import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import { ICurrentWeather } from "../../interfaces/currentForecast";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks/redux";
import { citiesSlice } from "../../store/reducers/CitiesSlice";
import CachedIcon from "@mui/icons-material/Cached";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "30px",
    padding: "20px",
    maxHeight: 300,
    position: "relative",
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
  delete: {
    position: "absolute",
    fontSize: 30,
    right: 20,
  },
  refetch: {
    position: "absolute",
    fontSize: 30,
    left: 20,
  },
}));
type IProps = ICurrentWeather & { refetch: () => void };

export const ForecastCard = (props: IProps) => {
  const { location, current, refetch } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { removeCity } = citiesSlice.actions;

  const handleDelete = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    dispatch(removeCity(location.name));
  };

  const handleRefetch = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <Box className={classes.root}>
      <DeleteIcon className={classes.delete} onClick={handleDelete} />
      <CachedIcon className={classes.refetch} onClick={handleRefetch} />
      <Typography variant="h4">{location.name}</Typography>
      <Image
        src={`https:${current.condition.icon}`}
        alt={location.name}
        width={"150px"}
        height={"150px"}
      />
      <Typography variant="body1" className={classes.condition}>
        {current.condition.text}
      </Typography>
      <Box className={classes.info}>
        <span>Temp: {current.temp_c}°</span>
        <span>Wind: {current.wind_kph} km/h</span>
      </Box>
    </Box>
  );
};
