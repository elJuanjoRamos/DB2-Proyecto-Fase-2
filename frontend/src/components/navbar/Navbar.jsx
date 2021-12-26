import React, { Fragment } from "react";
import styled from "styled-components/macro";
import PropTypes from 'prop-types'

/* MUI Componentes */
import {
  AppBar as MuiAppBar,
  Grid,
  Hidden,
  IconButton as MuiIconButton,
  Toolbar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

/* Template components */
import NavbarUserDropdown from "./NavbarUserDropdown";


/* Styled Componentes */
const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Navbar = ({ onDrawerToggle }) => {
  return (
    <Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Hidden mdUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={onDrawerToggle}
                  size="large"
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>

            <Grid item xs />
            <Grid item>
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

Navbar.protoTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
  notificationList: PropTypes.array.isRequired
}

export default Navbar;
