import React, { Fragment } from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";


//Template components
import Alert from "../../components/Alerts/Alert";
import Brand from "../../components/Brand/Brand"
import TextField from "../../components/Form/Textfields/Textfield"

//Mui components
import {
    Button,
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

    /*
        use the signIn function of the custom hook, this function receives the parameters to log into the account
    */
    const { signIn } = useAuth();


    /*
    That function sends the data to the api to start the session 
    */
    const handleSubmit = async (
        values, 
        { setErrors, setStatus, setSubmitting }) => {
        /*
        Once the fields are filled, it sends the information to the signIn function, 
        which in turn sends it to the api to validate if the user was created and access the application.
        */

        await signIn(values.email, values.password);
        
        setTimeout(() => {
            navigate("/dashboard/home");
        }, 1000)
        /*if (response.status === 200) {
            navigate("/dashboard/home");
        } else {
            const message = response.message || "Algo salió mal";
            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);    
        }*/
    }

    return  (
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
                <br/>
                { /* 
                Initialize the form with the initial values ​​and the validation scheme
                */ }
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}>
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            { /* Alert in case of error */ }
                            {errors.submit && (
                                <Alert mt={2} mb={3} title="Alerta" text={errors.submit} severity="warning" />
                            )}
                            { /* Form fields */ }
                            <TextField
                                type="email"
                                name="email"
                                label="Correo electrónico"
                                value={values.email}
                                error={Boolean(touched.email && errors.email)}
                                fullWidth
                                helperText={touched.email && errors.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={2}
                            />
                            <TextField
                                type="password"
                                name="password"
                                label="Contraseña"
                                value={values.password}
                                error={Boolean(touched.password && errors.password)}
                                fullWidth
                                helperText={touched.password && errors.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={2}/>

                            <Button
                                component={Link}
                                to="/auth/reset-password"
                                color="primary">
                                Olvide mi contraseña
                            </Button>

                            <br/>
                            <br/>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}>
                                Iniciar sesión
                            </Button>
                            <Button
                                component={Link}
                                to="/auth/sign-up"
                                fullWidth
                                color="primary">
                                No tiene cuenta? Registrese
                            </Button>
                        </form>
                    )}
                </Formik>

            </Wrapper>
        </Fragment>
    );
}

export default SignInPage
