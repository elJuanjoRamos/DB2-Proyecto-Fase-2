import React, { Fragment } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Card from "../../components/Cards/Card"
import {
    Button,
    Grid,
} from "@mui/material";


const Dashboard = () => {
    const funcion = () => {
        console.log("hola")
    }

    return (
        <Fragment>
            
            <Breadcrumb title='Tabla' pagetitle="Tabla" steps={[{ title: 'Tabla', to: '' }]} />

            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                    <div>
                        <Button
                            onClick={() => funcion() }
                        >Primer Semestre
                        </Button>

                        <Button
                            onClick={() => funcion() }
                        >Segundo Semestre
                        </Button>
                        </div>
                        <div>
                            aqui va la tabla
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}



export default Dashboard
