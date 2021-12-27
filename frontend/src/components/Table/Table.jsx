import React from 'react'

const Banco = ({ id, nombre, mes1, mes2, mes3, mes4, mes5, mes6 }) => {

    return (
        <>
            <tr key={id}>
                <th>{nombre}</th>
                <td>{mes1}</td>
                <td>{mes2}</td>
                <td>{mes3}</td>
                <td>{mes4}</td>
                <td>{mes5}</td>
                <td>{mes6}</td>
            </tr>
        </>
    )
}



const getTable = (array, semestre) => {
    if(semestre === 1) {
        return (
            <>
                 {
                    array.map(element => <Banco key={element.nombre + element.noviembre} nombre={element.nombre} mes1={element.noviembre}  
                    mes2={element.diciembre} mes3={element.enero} mes4={element.febrero} mes5={element.marzo}
                    mes6={element.abril} />)
                }
            </>
        )
    }else {
        return (
            <>
                 {
                    array.map(element => <Banco key={element.nombre + element.noviembre} nombre={element.nombre} mes1={element.mayo}  
                    mes2={element.junio} mes3={element.julio} mes4={element.agosto} mes5={element.septiembre}
                    mes6={element.octubre} />)
                }
            </>
        )
    }
    
}


const Table = ({last, semestre}) => {
    if(semestre === 1){
        return (
            <>
              <table className="table" >
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Noviembre</th>
                        <th>Diciembre</th>
                        <th>Enero</th>
                        <th>Febrero</th>
                        <th>Marzo</th>
                        <th>Abril</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        getTable(last, semestre)
                    }
                    </tbody>
                </table>  
            </>
        )
    }
    else {
        return (
            <>
              <table className="table">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Mayo</th>
                        <th>Junio</th>
                        <th>Julio</th>
                        <th>Agosto</th>
                        <th>Septiembre</th>
                        <th>Octubre</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        getTable(last, semestre)
                    }
                    </tbody>
                </table>  
            </>
        )
    }    
}
export default Table