import React from 'react'
import styled from "styled-components/macro";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* MUI Componentes */
import {
    Divider,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

/* Styled Componentes */
const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

/*

    Breadcrumbs allow users to make selections from a range of values.
    More information here: https://mui.com/components/breadcrumbs/#main-content

    Props
    title: title that is displayed within the page where this component is used
    pagetitle: title shown in the browser tab
    steps: array containing the steps to get to the page where the component was used, for example 'dashboard / calendar / event'

    steps structure: 
    the steps object is an array containing objects with the following structure
    {
        title: title shown as steps to get to the page 
        to : url that takes me to the page from which I come
    }    

    example
    {
        title: 'home'
        to: '/dashboard/home'
    }
*/

const Breadcrumb = ({ title, pagetitle, steps }) => {
    return (
        <>
            <Helmet title={pagetitle} />
            <Typography variant="h3" gutterBottom display="inline">
                {title}
            </Typography>
            {
                steps.length > 0 ?
                    <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                        <Link key="home" component={NavLink} to="/dashboard/home"> Home </Link>
                        {
                            steps.slice(0, steps.length - 1).map(element => <Link key={element.title} component={NavLink} to={element.to}> {element.title} </Link>)
                        }
                        <Typography>{steps[steps.length - 1].title}</Typography>]

                    </Breadcrumbs>

                    :
                    <></>
            }
            <Divider my={6} />
        </>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    steps: PropTypes.array.isRequired
}

export default Breadcrumb


