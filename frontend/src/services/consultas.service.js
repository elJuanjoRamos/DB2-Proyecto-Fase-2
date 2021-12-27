import axios from "axios";


export const getPrimerSemestre = async () => {
    var response = await axios.get('http://localhost:3001/banco/get_primer_semestre')
    const data = response.data

    var newData = []

    data.forEach(e => {
        newData.push({
            name: e.nombre,
            data: [e.noviembre, e.diciembre, e.enero, e.febrero, e.marzo, e.abril]
        })
    });
    return newData;
}

export const getSegundoSemestre = async () => {
    var response = await axios.get('http://localhost:3001/banco/get_segundo_semestre')
    const data = response.data

    var newData = []

    data.forEach(e => {
        newData.push({
            name: e.nombre,
            data: [e.mayo, e.junio, e.julio, e.agosto, e.septiembre, e.octubre]
        })
    });
    return newData;
}

export const getPrimerSemestreTable = async () => {
    var response = await axios.get('http://localhost:3001/banco/get_primer_semestre')
    const data = response.data

    var newData = []

    data.forEach(e => {
        newData.push({
            nombre: e.nombre,
            noviembre: e.noviembre,
            diciembre: e.diciembre, 
            enero: e.enero, 
            febrero: e.febrero,
            marzo: e.marzo,
            abril: e.abril
        })
    });
    return newData;
}

export const getSegundoSemestreTable = async () => {
    var response = await axios.get('http://localhost:3001/banco/get_segundo_semestre')
    const data = response.data

    var newData = []
    console.log(data);
    data.forEach(e => {
        newData.push({
            nombre: e.nombre,
            mayo: e.mayo, 
            junio: e.junio, 
            julio: e.julio, 
            agosto: e.agosto, 
            septiembre: e.septiembre,
            octubre: e.octubre
        })
    });
    return newData;
}