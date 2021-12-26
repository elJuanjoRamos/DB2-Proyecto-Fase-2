import React, {Fragment} from "react";
import styled from "styled-components/macro";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";


import reduceChildRoutes from "./reduceChildRoutes";

const Title = styled(Typography)`
  color: ${(props) => props.theme.sidebar.color};
  font-size: ${(props) => props.theme.typography.caption.fontSize};
  padding: ${(props) => props.theme.spacing(4)}
    ${(props) => props.theme.spacing(7)} ${(props) => props.theme.spacing(1)};
  opacity: 0.4;
  text-transform: uppercase;
  display: block;
`;


const SidebarNavList = (props) => {
  const {  title, pages, depth } = props;
  const router = useLocation();
  const currentRoute = router.pathname;

  const childRoutes = pages.reduce(
    (items, page) => reduceChildRoutes({ items, page, currentRoute, depth }),
    []
  );

  return (
    <>
      {title && <Title variant="subtitle2">{title}</Title>}
      <Fragment>{childRoutes}</Fragment>
    </>
  );
};

export default SidebarNavList;
