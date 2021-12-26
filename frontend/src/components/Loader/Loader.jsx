import React from "react";
import styled from "styled-components/macro";
/* MUI Componentes */
import { CircularProgress } from "@mui/material";

/* Styled Componentes */
const Root = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

/* 
    This component simulates the loading of new views, makes use of the CircularProgress component, 
    so that the page loads while this component is displayed.
    
    For more information on the supported properties, go here: https://mui.com/api/circular-progress/#main-content
*/

function Loader() {
  return (
    <Root>
      <CircularProgress color="secondary" />
    </Root>
  );
}

export default Loader;
