import React, { Fragment, useState } from "react";
import styled from "styled-components/macro";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

// MUI Components
import { 
    Avatar,
    Button,
    Grid,
    Paper,
    Typography
} from "@mui/material";

// Template components
import Alert from "../../components/Alerts/Alert";
import Brand from "../../components/Brand/Brand";
import Snackbar from "../../components/Alerts/Snackbar"
import TextField from "../../components/Form/Textfields/Textfield";

// Styled Components
const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)};
`;


/**
 * Default values ​​of the form, these values ​​are not valid and are not sent until the required fields are filled.
 */
const initialValues = {
    name: "",
    email: "",
    phone_number_whatsapp: "",
    phone_number_sms: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    nit: "",
    plan: "BA",
    isAnActiveFollower: false
}

/*
    Object to validate the entry of the elements, 
    that are required, that meet requirements such as size, the passwords must match, etc.
*/
const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required("Su nombre es requerido"),
    companyName:Yup.string().max(255),
    nit:Yup.string().max(255),
    phone_number_sms: Yup.string()
        .min(8, "El número debe tener 8 dígitos")
        .max(8, "El número debe tener 8 dígitos"),
    phone_number_whatsapp: Yup.string()
        .min(8, "El número debe tener 8 dígitos")
        .max(8, "El número debe tener 8 dígitos"),
    email: Yup.string()
        .email("Debe ingresar un correo válido")
        .max(255)
        .required("El correo es requerido"),
    password: Yup.string()
        .required('Ingrese su contraseña')
        .matches(
            /* eslint-disable no-useless-escape */
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Debe contener al menos 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial")
        .max(255),
    confirmPassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Las contraseñas deben ser iguales"
        ),

    }),
})




function SignUpPage() {
    //use this hook to move between views
    const navigate = useNavigate();
    /*
        use the signIn function of the custom hook, 
        this function receives the parameters to create the account and sends it to the api
    */
    const { signUp } = useAuth();
    
    /*This property is used to preview the photo selected to create the account */
    const [preview, setPreview] = useState()
    //This property is used to display a message when the request is made, if it fails or is successful.
    const [alertMessage, setAletMessage] = useState("")
    
    const [openSnack, setOpenSnack] = useState(false);

    //This function sends the data to the api to create the account
    const handleSubmit = async (
        values, 
        { setErrors, setStatus, setSubmitting }) => {
        try {

            /**
             * Once the data is filled, it is sent to the api to create the account
             */
            console.log(values)
            

            /*const res = await signUp(formData);
            console.log(res)*/
            /*setOpenSnack(true)
            setAletMessage(res.message)
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/auth/sign-in");
                }, 1200);
            }*/
        } catch (error) {
            const message = error.message || "Something went wrong";
            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
        }
    }
    
    return (
        <Fragment>
            <Brand height={64} width={64} marginBottom={32}  />
            <Wrapper>
                <Helmet title="Sign Up" />

                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Bienvenido!
                </Typography>
                <Typography component="h2" variant="body1" align="center">
                    Llene los campos solicitados y seleccione una foto de perfil para crear su cuenta
                </Typography>
                <br />

                { /* 
                    Initialize the form with the initial values ​​and the validation scheme
                */ }
                <Formik
                    initialValues={initialValues}
                    validationSchema={ validationSchema }
                    onSubmit={handleSubmit}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting,
                        touched,
                        values,
                    }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <label htmlFor="file-input">
                                <BigAvatar
                                    alt="Mi foto"
                                    src={preview}
                                />
                            </label>
                            <input id="file-input" onChange={
                                
                                /** this function is used to upload the profile picture */
                                (e) => {
                                    const fileReader = new FileReader();
                                    fileReader.onload = () => {
                                        if (fileReader.readyState === 2) {
                                            setFieldValue('photo_url', fileReader.result);
                                            setPreview(fileReader.result);
                                        }
                                    };
                                    fileReader.readAsDataURL(e.target.files[0]);
                                }
                            }
                            hidden name="url_photo" type="file" accept="image/*" />
                            { /* Alert in case of error */ }
                            {errors.submit && (

                                <Alert mt={2} mb={1} severity="warning" text={errors.submit} />
                                
                            )}
                            { /* Form fields */ }

                            <TextField 
                                type="text"
                                name="name"
                                label="Nombre completo"
                                value={values.name}
                                error={Boolean(touched.name && errors.name)}
                                fullWidth
                                helperText={touched.name && errors.name}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={3}
                            />

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
                                my={3}
                            />

                            <TextField
                                type="text"
                                name="companyName"
                                label="Nombre de compañía"
                                value={values.companyName}
                                error={Boolean(touched.companyName && errors.companyName)}
                                fullWidth
                                helperText={touched.companyName && errors.companyName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={3}
                            />

                            <TextField
                                type="text"
                                name="nit"
                                label="Nit"
                                value={values.nit}
                                error={Boolean(touched.nit && errors.nit)}
                                fullWidth
                                helperText={touched.nit && errors.nit}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                my={3}
                            />


                            <Grid container spacing={6}>
                                <Grid item md={6} lg={6} sm={12} >
                                    <TextField
                                        type="text"
                                        name="phone_number_sms"
                                        label="Número de teléfono"
                                        value={values.phone_number_sms}
                                        error={Boolean(touched.phone_number_sms && errors.phone_number_sms)}
                                        fullWidth
                                        helperText={touched.phone_number_sms && errors.phone_number_sms}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        my={3}
                                    />
                                </Grid>
                                <Grid item md={6} lg={6} sm={12} >
                                    <TextField
                                        type="number"
                                        name="phone_number_whatsapp"
                                        label="Teléfono de Whatsapp"
                                        value={values.phone_number_whatsapp}
                                        error={Boolean(touched.phone_number_whatsapp && errors.phone_number_whatsapp)}
                                        fullWidth
                                        helperText={touched.phone_number_whatsapp && errors.phone_number_whatsapp}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        my={3}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={6}>
                                <Grid item md={6} lg={6} sm={12} >
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
                                        my={3}
                                    />
                                </Grid>
                                <Grid item md={6} lg={6} sm={12} >
                                    <TextField
                                        type="password"
                                        name="confirmPassword"
                                        label="Confirmar Contraseña"
                                        value={values.confirmPassword}
                                        error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                                        fullWidth
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        my={3}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting}
                            >
                                Crear cuenta
                            </Button>
                        </form>
                    )}
                </Formik>
                {
                    alertMessage && <Snackbar message={alertMessage} open={openSnack} setOpen={setOpenSnack} ></Snackbar>
                }

            </Wrapper>
        </Fragment>
    );
}

export default SignUpPage;