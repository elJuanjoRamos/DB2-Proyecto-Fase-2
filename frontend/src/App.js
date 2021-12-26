import React from "react";
import { useRoutes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { create } from "jss";
import { ThemeProvider } from "styled-components/macro";

import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";

import createTheme from "./theme";
import { THEMES } from "./theme/themes";
import routes from "./routes";

import { AuthProvider } from "./contexts/JWTContext";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  const content = useRoutes(routes);
  const myTheme = createTheme(THEMES.DEFAULT)

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Bases "
        defaultTitle="Sistemas de bases de datos 2"
      />
      <StylesProvider jss={jss}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={myTheme}>
              <ThemeProvider theme={myTheme}>
                <AuthProvider>
                    {content}
                </AuthProvider>
              </ThemeProvider>
            </MuiThemeProvider>
          </StyledEngineProvider>
        </LocalizationProvider>
      </StylesProvider>
    </HelmetProvider>
  );
}

export default App;
