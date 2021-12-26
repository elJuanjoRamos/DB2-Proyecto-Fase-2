import React from 'react'
import styled from "styled-components/macro";
import { spacing } from "@mui/system";

/* MUI Componentes */
import {
    Card as MuiCard,
    CardContent as MuiCardContent,
    CardHeader as MuiCardHeader
} from "@mui/material";

  
/* Styled Componentes */
const MyCard = styled(MuiCard)(spacing);
const CardContent = styled(MuiCardContent)(spacing);
const CardHeader = styled(MuiCardHeader)(spacing);


/* 
    Cards contain content and actions about a single subject.
    Although cards can support multiple actions, UI controls,
    and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
    
    For more information on supported properties go here: https://mui.com/components/cards/#main-content
*/
const Card = (props) => {
    return (
        <MyCard {...props} >

        <CardHeader
                title={props.title}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                pb={0}
                pt={2}
            />
            <CardContent>
                { props.children }
            </CardContent>
        </MyCard>
    )
}

export default Card
