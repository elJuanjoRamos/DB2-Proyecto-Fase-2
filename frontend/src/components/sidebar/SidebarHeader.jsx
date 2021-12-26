import React from "react";
import styled from "styled-components/macro";

import { 
  Avatar, 
  Badge, 
  Grid, 
  Typography 
} from "@mui/material";


const Header = styled.div`
  background-color: ${(props) =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props) => props.theme.spacing(2.75)}
    ${(props) => props.theme.spacing(4)};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const HeaderText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
`;
const HeaderSubText = styled(Typography)`
  color: ${(props) => props.theme.sidebar.footer.color};
  font-size: 0.7rem;
  display: block;
  padding: 1px;
`;


const HeaderBadge = styled(Badge)`
  margin-right: ${(props) => props.theme.spacing(1)};
  span {
    background-color: ${(props) =>
    props.theme.sidebar.footer.online.background};
    border: 1.5px solid ${(props) => props.theme.palette.common.white};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

const SidebarHeader = ({ ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Header {...rest}>
      <Grid container spacing={2}>
        <Grid item>
          <HeaderBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            {!!user && <Avatar alt={user.name} src={user.photo_url} />}
            {/* Demo data */}
            {!user && (
              <Avatar
                alt="NO DATA"
                src=""
              />
            )}
          </HeaderBadge>
        </Grid>
        <Grid item>
          {user && <HeaderText variant="body2">{user.name} </HeaderText>}
          {user && <HeaderSubText variant="caption">{ user.companyName || "No company" }</HeaderSubText>}

        </Grid>
      </Grid>
    </Header>
  );
};

export default SidebarHeader;
