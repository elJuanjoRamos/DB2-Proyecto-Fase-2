import React, { Fragment, useState } from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Card from "../../components/Cards/Card"
import Table from "../../components/Table/Table"
import {
    Button,
    Grid,
} from "@mui/material";

//services
import { getPrimerSemestreTable, getSegundoSemestreTable } from "../../services/consultas.service";

const Dashboard = () => {

    const [semestre, setSemestre] = useState(1)
    const [info, setInfo] = useState([])

    const getSemestre = async (valor) => {        
        if (valor === 1) {
            setSemestre(1)
            setInfo(await getPrimerSemestreTable())                            
        }
        else if (valor === 2) {
            setInfo(await getSegundoSemestreTable())                
            setSemestre(2)
        }
        console.log({valor:semestre, data:info})
    }
    return (
        <Fragment>
            
            <Breadcrumb title='Tabla' pagetitle="Tabla" steps={[{ title: 'Tabla', to: '' }]} />

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
                            <Table last={info} semestre={semestre}/>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}



export default Dashboard
