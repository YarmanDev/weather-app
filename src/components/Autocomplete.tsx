import { Box, Input, ListItem, Theme } from "@mui/material";
import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {
  getAutocompleteEndpoint,
  getSearchEndpoint,
} from "../constants/weatherEndpoints";
import useDebounce from "../hooks/useDebounce";
import { IAutocompleteOption } from "../interfaces/autocompleteOptions";
import { weatherAPI } from "../services/WeatherService";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
    position: "relative",
  },
  input: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    borderRadius: 9999,
    padding: "10px",
  },
  list: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "20px",
    marginTop: "5px",
    padding: 0,
    position: "absolute",
    width: "100%",
  },
  listItem: {
    fontSize: 19,
    borderRadius: "10px",

    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.main, 0.3),
      cursor: "pointer",
    },
  },
}));

export const Autocomplete = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 200);
  const autocompleteEndpoint = getAutocompleteEndpoint(
    `${debouncedValue}&aqi=no`
  );

  const { data } = weatherAPI.useFetchAutocompleteQuery(autocompleteEndpoint);
  const options = data?.map((item) => item.name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const heh = new Array(10)
    .fill("lviv")
    .map((city) =>
      weatherAPI.useFetchAutocompleteQuery(getSearchEndpoint(`${city}&aqi=no`))
    );
  // eslint-disable-next-line no-console
  console.log(heh);

  return (
    <Box className={classes.root}>
      <Input
        className={classes.input}
        value={inputValue}
        placeholder="Enter city"
        onChange={handleInputChange}
      />

      {options && (
        <ul className={classes.list}>
          {options.map((option) => (
            <ListItem
              key={option}
              className={classes.listItem}
              //   onClick={handleOptionClick}
            >
              {option}
            </ListItem>
          ))}
        </ul>
      )}
    </Box>
  );
};
