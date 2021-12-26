import React, { Fragment, useState } from "react";

// template components
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Card from "../../components/Cards/Card"
import DashedChart from "../../components/Charts/DashedChart"
// mui components
import {
    Grid,
    Button,
} from "@mui/material";

//services
import { getPrimerSemestre, getSegundoSemestre } from "../../services/consultas.service";


const Grafica = () => {
    const [semestre, setSemestre] = useState([])
    const [info, setInfo] = useState([])


    const getSemestre = async (valor) => {
        if (valor === 1) {
            setSemestre(["Noviembre", "Diembre", "Enero", "Febrero", "Marzo", "Abril"])
            setInfo(await getPrimerSemestre())                
        }
        else if (valor === 2) {
            setInfo(await getSegundoSemestre())                
            setSemestre(["Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre"])
        }
    }


    return (
        <Fragment>
            
            <Breadcrumb title='Grafica' pagetitle="Grafica" steps={[{ title: 'Grafica', to: '' }]} />

            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <div>
                        <Button
                            onClick={() => getSemestre(1) }
                        >Primer Semestre
                        </Button>

                        <Button
                            onClick={() => getSemestre(2) }
                        >Segundo Semestre
                        </Button>
                        </div>

                        <div>
                            <DashedChart series={info} names={semestre} yAxisTitle={"Ranking bancario"} xAxisTitle={"Meses evaluados"} />
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Grafica
