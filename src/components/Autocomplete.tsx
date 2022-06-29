import { Box, Input, ListItem, Theme } from "@mui/material";
import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { getAutocompleteEndpoint } from "../constants/weatherEndpoints";
import useDebounce from "../hooks/useDebounce";
import { IAutocompleteOption } from "../interfaces/autocompleteOptions";
import { weatherAPI } from "../services/WeatherService";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
  input: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: "6%",
    borderRadius: 9999,
    padding: "10px",
  },
  list: {
    backgroundColor: theme.palette.common.white,
    borderRadius: "20px",
    marginTop: "5px",
    padding: 0,
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
            <ListItem key={option} className={classes.listItem}>
              {option}
            </ListItem>
          ))}
        </ul>
      )}
    </Box>
  );
};
