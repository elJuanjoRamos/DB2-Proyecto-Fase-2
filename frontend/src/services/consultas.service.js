import axios from "axios";


export const getPrimerSemestre = async () => {
    var response = await axios.get('http://localhost:3000/banco/get_primer_semestre')
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
    var response = await axios.get('http://localhost:3000/banco/get_segundo_semestre')
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