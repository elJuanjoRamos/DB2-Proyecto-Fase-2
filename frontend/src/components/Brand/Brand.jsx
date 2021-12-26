import React from 'react'
import PropTypes from  "prop-types"
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../vendor/logo.svg";


/*
This component is responsible for rendering the logo
Props 
*/
const Brand = ({ width, height, marginBottom }) => {
    const MyLogo = styled(Logo)`
    fill: ${(props) => props.theme.palette.primary.main};
    width: ${width}px;
    height: ${height}px;
    margin-bottom: ${marginBottom}px;
  `;

    return (
        <MyLogo />
    )
}

Brand.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    marginBottom: PropTypes.number.isRequired
}

export default Brand
