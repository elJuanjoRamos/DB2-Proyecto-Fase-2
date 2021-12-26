import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components/macro";

import { CssBaseline } from "@mui/material";

import GlobalStyle from "../../utils/GlobalStyle";

//Styled component
const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

/*
This component is used as a container, 
it receives the elements it should contain, it is used by the SignIn and SignUp view.
*/
const Auth = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      {children}
      <Outlet />
    </Root>
  );
}

export default Auth


