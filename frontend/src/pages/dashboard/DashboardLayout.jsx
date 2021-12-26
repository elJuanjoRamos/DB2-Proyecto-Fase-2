import React, { useState } from "react";
import styled from "styled-components/macro";
import { spacing } from "@mui/system";
import { Outlet } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

// utils
import GlobalStyle from "../../utils/GlobalStyle"

// MUI Components
import {
  CssBaseline,
  Hidden,
  Paper as MuiPaper
} from "@mui/material";

// Template components
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar"

// custom hooks
import { useTheme } from "@mui/material/styles";


/*";

import Footer from "../components/Footer";
import Settings from "../components/Settings";*/



/* Styled Components */

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: 258px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const MainContent = styled(styled(MuiPaper)(spacing))`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;


/*
This component is responsible for rendering the navbar, sidebar and the rest of the pages
You can obtain information on the components used here https://mui.com

*/
const DashboardLayout = ({ children }) => {

  //This property is used to identify whether or not the mobile view is shown.
  const [mobileOpen, setMobileOpen] = useState(false);
  //this function changes the state of the mobile flag
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //get current theme
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Root>
      { /* 
      these components provide the theme with material design styles
      is similar to calling the file directly
      <link src = "assets/css/globalstyle.css">
      */ }
      <CssBaseline />
      <GlobalStyle />

      <Drawer>
        {/* Hidden is a component that allows you to hide everything that is inside
            it is used to hide the mobile view when n need to show
        */}
        <Hidden lgUp implementation="js">
          { /*Insert the sidebar */}
          <Sidebar
            PaperProps={{ style: { width: 258 } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden mdDown implementation="css">
          { /*Insert the sidebar */}
          <Sidebar
            PaperProps={{ style: { width: 258 } }}
          />
        </Hidden>
      </Drawer>
      <AppContent>
        { /*Insert the navbar */}
        <Navbar onDrawerToggle={handleDrawerToggle} notificationList={[]} />
        
        <MainContent p={isLgUp ? 12 : 5}>
          {children}
          <Outlet />
        </MainContent>
      </AppContent>

    </Root>
  );
};

export default DashboardLayout;
