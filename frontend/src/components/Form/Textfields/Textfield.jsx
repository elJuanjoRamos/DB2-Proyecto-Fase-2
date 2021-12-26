import React from 'react'
import styled from "styled-components/macro";

/* MUI Componentes */
import { TextField as MuiTextField } from "@mui/material";
import { spacing } from "@mui/system";

/* Styled Componentes */
const MyTextField = styled(MuiTextField)(spacing);

/* 
    Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
    
    The TextField wrapper component is a complete form control including a label, input, and help text. 
    It comes with three variants: 
        - outlined (default)
        - filled 
        - standard.

    More info: https://mui.com/api/text-field/#main-content
*/
const TextField = (props) => {
    return (
        <MyTextField 
        {...props }
        />            
    )
}

export default TextField
