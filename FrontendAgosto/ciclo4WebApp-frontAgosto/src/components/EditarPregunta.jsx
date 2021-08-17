import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';
import Pregunta from './Pregunta';

export default function EditarPregunta(props) {


    const [encabezado, setEncabezado] = useState('')
    const [puntaje, setPuntaje] = useState('')
    const [estado, setEstado] = useState('')
    const [respuestaA, setRespuestaA] = useState('')
    const [respuestaB, setRespuestaB] = useState('')
    const [respuestaC, setRespuestaC] = useState('')
    const [respuestaD, setRespuestaD] = useState('')
    const [correcta, setCorrecta] = useState([])
    const [correctaSelect, setCorrectaSelect] = useState('')
    const [competencias, setCompetencias] = useState([])
    const [competenciasSelect, setCompetenciasSelect] = useState('')

    useEffect(() => {
        obtenerPregunta()
        setCompetencias(['Razonamiento Cuantitativo', 'Inglés', 'Lectura Crítica', 'Competencias Ciudadanas'])
        setCompetenciasSelect('Razonamiento Cuantitativo')
        setCorrecta(['A', 'B', 'C', 'D'])
        setCorrectaSelect('A')
    }, [])

    const obtenerPregunta = async () => {
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('pregunta/listarid/' + id, {
            headers: {'autorizacion': token }
        })
        setEncabezado(respuesta.data.encabezado)
        setPuntaje(respuesta.data.puntaje)
        setRespuestaA(respuesta.data.respuestaA)
        setRespuestaB(respuesta.data.respuestaB)
        setRespuestaC(respuesta.data.respuestaC)
        setRespuestaD(respuesta.data.respuestaD)
        setEstado(respuesta.data.estado)
        setCorrectaSelect(respuesta.data.correcta)
        setCompetenciasSelect(respuesta.data.competencias)
    }

    const actualizar = async (e) => {
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const pregunta = {
            encabezado,
            puntaje,
            competencias: competenciasSelect,
            respuestaA,
            respuestaB,
            respuestaC,
            respuestaD,
            correcta: correctaSelect,
            estado: 1
        }
        const respuesta = await Axios.put('pregunta/actualizar/' + id, pregunta, {
            headers: {'autorizacion': token }
        })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = '/preguntas'
        }, 1500)
    }

    return (
        <div>
            <Nav />
            <div className = "container">
                <form onSubmit = {actualizar}>

                    <div className = "mb-3">
                        <label> Encabezado </label>
                        <textarea 
                            class = "form-control" 
                            id = "exampleFormControlTextarea1" 
                            rows = "3" 
                            required 
                            value = {encabezado} 
                            onChange = {(e) => setEncabezado(e.target.value)}
                        >
                        </textarea>
                    </div>

                    <div className = "mb-3">
                        <label className = 'form-label'> Opción A. </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            required value = {respuestaA} 
                            onChange = {(e) => setRespuestaA(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'> Opción B. </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            required 
                            value = {respuestaB} 
                            onChange = {(e) => setRespuestaB(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'> Opción C. </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            required 
                            value = {respuestaC} 
                            onChange = {(e) => setRespuestaC(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'> Opción D. </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            required 
                            value = {respuestaD} 
                            onChange = {(e) => setRespuestaD(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'>Competencia </label>
                        <select 
                            className = 'form-control' 
                            required 
                            value = {competenciasSelect} 
                            onChange = {(e) => setCompetenciasSelect(e.target.value)} 
                        >
                            {
                                competencias.map(competencias1 => (
                                    <option key = {competencias1}>
                                        {competencias1}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className = "mb-3">
                        <label className = 'form-label'>Opción correcta </label>
                        <select 
                            className = 'form-control' 
                            required 
                            value = {correctaSelect} 
                            onChange = {(e) => setCorrectaSelect(e.target.value)} 
                        >
                            {
                                correcta.map(correcta1 => (
                                    <option key = {correcta1}>
                                        {correcta1}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className = "mb-3">
                        <label className = 'form-label'>Puntuación </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            required 
                            value = {puntaje} 
                            onChange = {(e) => setPuntaje(e.target.value)}
                        />
                    </div>

                    <div className = "mb-3">
                        <button className = 'btn btn-primary' type = 'submit'>Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
