import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theming/theme";
import { Provider } from "react-redux";
import { setupStore } from "../src/store/store";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const store = setupStore();

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Provider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </StyledEngineProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
