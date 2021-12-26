import React, { Fragment } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Card from "../../components/Cards/Card"
import {
    Grid,
    Button,
} from "@mui/material";

import DashedChart from "../../components/Charts/DashedChart"

const funcion = () => {
    console.log("hola")
}

const Grafica = () => {
    return (
        <Fragment>
            
            <Breadcrumb title='Grafica' pagetitle="Grafica" steps={[{ title: 'Grafica', to: '' }]} />

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
                            <DashedChart />
                        </div>
                    </Card>
                </Grid>
            </Grid>


        </Fragment>
    )
}

export default Grafica
