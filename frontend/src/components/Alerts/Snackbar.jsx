import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

/* MUI Componentes */
import {
    Snackbar,
    IconButton
} from "@mui/material";

import {
    Close as CloseIcon
}
    from "@mui/icons-material";


/*
    Snackbars provide brief notifications. The component is also known as a toast.
    Snackbars inform users of a process that an app has performed or will perform. 
    They shouldn't interrupt the user experience, and they don't require user input to disappear.

    Snackbars contain a single line of text directly related to the operation performed. 
    They may contain a text action, but no icons. You can use them to display notifications.

    Props
    message: message that you want to notify the user
    open: flag to show or not the snackbar
    setOpen: function to change state the flag

*/


const SnackbarComponent = ({ message, open, setOpen }) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
            open={open}
            autoHideDuration={6000}
            message={message}
            action={
                <Fragment>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Fragment>
            }
        />
    )
}

SnackbarComponent.propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default SnackbarComponent
