import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    body2: {
      fontSize: "20px",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4588ff",
    },
    secondary: {
      main: "#fff8ef",
    },
    info: {
      main: "#fff8ef",
      dark: "#3ace78",
    },
  },
  components: {
    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
