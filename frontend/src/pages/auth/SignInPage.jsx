import React, { Fragment, useState } from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";

import { useNavigate } from "react-router-dom";
import { Field } from "formik";
import * as Yup from "yup";


//Template components
import Brand from "../../components/Brand/Brand"
import { FormikForm, CustomInputComponent } from "../../components/Form/Formik/FormikForm"
import Snackbar from "../../components/Alerts/Snackbar"

//Mui components
import {
    Paper,
    Typography
} from "@mui/material";

// Styled components
const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;


/**
 * Default values ​​of the form, these values ​​are not valid and are not sent until the required fields are filled.
 */
const initialValues = {
    email: "",
    password: "",
    submit: false,
}

/*
    Object to validate the entry of the elements, 
    that are required, that meet requirements such as size, the passwords must match, etc.
*/
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Debe ingresar un correo válido")
        .max(255)
        .required("El correo es requerido"),
    password: Yup.string().max(255).required("La contraseña es requerida"),
})



/**
 * This view is used to create an account in the application
 * 
 */

const SignInPage = () => {
    //use this hook to move between views
    const navigate = useNavigate();
    const [openSnack, setOpenSnack] = useState(false)
    const [message, setMessage] = useState("")

    /*
    That function sends the data to the api to start the session 
    */
    const SignIn = async (form) => {

        console.log(form)
        
        //sendToLogin(form.email, form.password)

        /**
         *  si response no es valido, hacer setOpenSnack(true) setMessage("usuario no valido")
         * 
         */

        /**
         *  si response SI es valido, hacer setOpenSnack(true) 
         * setMessage("Bienvenido") 
         * navigate("/dashboard/tabla");
         */


        /*setTimeout(() => {
            navigate("/dashboard/home");
        }, 1000)*/
        /*if (response.status === 200) {
            navigate("/dashboard/home");
        } else {
            const message = response.message || "Algo salió mal";
            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);    
        }*/
    }

    return (
        <Fragment>
            <Brand height={64} width={64} marginBottom={32} />
            <Wrapper>
                <Helmet title="Sign In" />
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Hola de nuevo!
                </Typography>
                <Typography component="h2" variant="body1" align="center">
                    Inicie sesión en su cuenta para continuar
                </Typography>
                <br />
                { /* 
                Initialize the form with the initial values ​​and the validation scheme
                */ }

                <FormikForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    functionToExecute={SignIn}
                    titleButton={"Iniciar Sesion"}
                >

                    <Field
                        type="email"
                        name="email"
                        label="Correo electrónico"
                        as={CustomInputComponent} />


                    <Field
                        name="password"
                        label="Contraseña"
                        type="password"
                        as={CustomInputComponent} />
                </FormikForm>
                <Snackbar message={message} open={openSnack} setOpen={setOpenSnack}></Snackbar>
            </Wrapper>
        </Fragment>
    );
}

export default SignInPage
