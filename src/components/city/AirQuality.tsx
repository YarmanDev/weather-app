import { Box, Theme, Typography } from "@mui/material";
import React from "react";
import { IAirQuality } from "../../interfaces/currentForecast";
import { WidgetWrapper } from "./WidgetWrapper";
import AirIcon from "@mui/icons-material/Air";
import { makeStyles } from "@mui/styles";
import theme from "../../theming/theme";
import { AirCard } from "./AirCard";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  condition: {
    fontWeight: 600,
    fontSize: 20,
    color: theme.palette.info.main,
  },
  airInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    gridColumnGap: 10,
  },
}));

export const AirQuality = ({ airData }: { airData: IAirQuality }) => {
  const classes = useStyles();
  const { "gb-defra-index": _, "us-epa-index": _a, ...airInfo } = airData;

  return (
    <WidgetWrapper title="Air Quality Index">
      <Box className={classes.root}>
        <AirIcon color="info" sx={{ fontSize: 45 }} />
        <Box sx={{ marginLeft: 1 }}>
          <Typography variant="body2" className={classes.condition}>
            Good
          </Typography>
          <Typography variant="body1" color={theme.palette.secondary.dark}>
            A perfect day for a walk!
          </Typography>
        </Box>
      </Box>
      <Box className={classes.airInfo}>
        {Object.entries(airInfo).map(([key, value]) => (
          <AirCard key={key} name={key} quality={value} />
        ))}
      </Box>
    </WidgetWrapper>
  );
};
