import React from 'react'
import styled from "styled-components/macro";
import { spacing } from "@mui/system";


import { Formik, Form, ErrorMessage } from 'formik';

// Template components
import TextField from "../Textfields/Textfield"


//MUI COmponents
import {
    Button as MuiButton,
} from "@mui/material";
// Styled components
const Button = styled(MuiButton)(spacing);

const timeOut = (time) => new Promise((res) => setTimeout(res, time));


const CustomInputComponent = (props) => {
    /**
     * This function returns a Textfield type object with the properties and functions required by the form
     */
    return (
        <>
            <TextField
                name={props.name}
                label={props.label}
                value={props.value}
                type={props.type}
                fullWidth
                variant="outlined"
                onBlur={props.onBlur}
                onChange={props.onChange}
                my={2}
                {...props}
            />
            <ErrorMessage name={props.name} component="div" style={{ color: 'red' }} />
        </>
    );
}


/* 
    Documentation
    This component is used to create custom forms using the Formik 
    library that provides some functionalities such as field validation, etc.
    initialValues:initial values ​​of the form
    validationSchema: validation scheme of the fields, such as lengths, if required, etc.
    handleSubmit:function that will be executed when the button is clicked
    children: form fields
    titleButton: button action title
*/

const FormikForm = ({ initialValues, validationSchema, functionToExecute, children, titleButton }) => {

    const handleSubmit = async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
    ) => {
        try {
            await functionToExecute(values)
            await timeOut(1500);
            resetForm();
            setStatus({ sent: true });
            setSubmitting(false);
        } catch (error) {
            setStatus({ sent: false });
            setErrors({ submit: error.message });
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    {children}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting}
                        mt={3}
                    >
                        {titleButton}
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export { FormikForm, CustomInputComponent }
