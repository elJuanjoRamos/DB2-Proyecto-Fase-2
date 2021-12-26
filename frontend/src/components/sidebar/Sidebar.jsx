import React from "react";
import ReactPerfectScrollbar from "react-perfect-scrollbar";
import SidebarNavList from "./SidebarNavList";

import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { spacing } from "@mui/system";
import "../../vendor/perfect-scrollbar.css";

//MUI Components
import {
  Box as MuiBox,
  Drawer as MuiDrawer,
  ListItemButton,
  List
} from "@mui/material";

import { ReactComponent as Logo } from "../../vendor/logo.svg";
import navItems from "./dashboradItems"
import SidebarHeader from "./SidebarHeader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Box = styled(MuiBox)(spacing);

const Drawer = styled(MuiDrawer)`
  border-right: 0;
  > div {
    border-right: 0;
  }
`;

const Brand = styled(ListItemButton)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.sidebar.header.color};
  background-color: ${(props) => props.theme.sidebar.header.background};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;
  padding-left: ${(props) => props.theme.spacing(6)};
  padding-right: ${(props) => props.theme.spacing(6)};
  justify-content: center;
  cursor: pointer;
  flex-grow: 0;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }

  &:hover {
    background-color: ${(props) => props.theme.sidebar.header.background};
  }
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;
`;


const baseScrollbar = css`
  background-color: ${(props) => props.theme.sidebar.background};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const Scrollbar = styled.div`
  ${baseScrollbar}
`;

const PerfectScrollbar = styled(ReactPerfectScrollbar)`
  ${baseScrollbar}
`;

const Items = styled.div`
  padding-top: ${(props) => props.theme.spacing(2.5)};
  padding-bottom: ${(props) => props.theme.spacing(2.5)};
`;



const Sidebar = ({ ...rest }) => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const ScrollbarComponent = matches ? PerfectScrollbar : Scrollbar;

  return (
    <Drawer variant="permanent" {...rest}>
      <Brand component={NavLink} to="/home">
        <BrandIcon />{" "}
        <Box ml={1}>
          Bases de Datos 2
        </Box>
      </Brand>
      <SidebarHeader />
      <ScrollbarComponent>
      <List disablePadding>
        <Items>
          {navItems &&
            navItems.map((item) => (
              <SidebarNavList
                key={item.title}
                pages={item.pages}
                title={item.title}
              />
            ))}
        </Items>
      </List>
    </ScrollbarComponent>
    </Drawer>
  );
};

export default Sidebar;
