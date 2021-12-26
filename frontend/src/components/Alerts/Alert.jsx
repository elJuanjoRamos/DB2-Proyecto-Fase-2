import React, { useState } from "react";
import PropTypes from 'prop-types'
import styled from "styled-components/macro";
import { spacing } from "@mui/system";

/* MUI Componentes */
import {
    Alert as MuiAlert,
    AlertTitle,
    Box,
    Collapse,
    IconButton
} from "@mui/material";

import {
    Close as CloseIcon
}
    from "@mui/icons-material";

/* Styled Componentes */
const Alerts = styled(MuiAlert)(spacing);

/*

    An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
    you can find more references of this component here :https://mui.com/components/alert/#main-content

    Props
    title: title of the alert
    text: text that you want to show to the user
    severity: the alert offers four severity levels that set a distinctive icon and color, the options are
        – error
        – warning
        – info
        – success
    variant: Two additional variants are available 
        – outlined
        – filled
    show: flag to display the alert or not

*/

const Alert = ({ title, text, severity, variant, show }) => {

    const [open, setOpen] = useState(show);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alerts
                    variant={variant}
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    { title && <AlertTitle>{ title }</AlertTitle> } 
                    {text}
                </Alerts>
            </Collapse>
        </Box>
    )
}

Alert.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
}

export default Alert
