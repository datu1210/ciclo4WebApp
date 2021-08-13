import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Preguntas() {

    const [preguntas, setPreguntas] = useState([])
    const [encabezado, setEncabezado] = useState('')
    const [puntaje, setPuntaje] = useState('')
    const [respuestaA, setRespuestaA] = useState('')
    const [respuestaB, setRespuestaB] = useState('')
    const [respuestaC, setRespuestaC] = useState('')
    const [respuestaD, setRespuestaD] = useState('')
    const [correcta, setCorrecta] = useState([])
    const [correctaSelect, setCorrectaSelect] = useState('')
    const [competencias, setCompetencias] = useState([])
    const [competenciasSelect, setCompetenciasSelect] = useState('')

    useEffect(() => {
        obtenerPreguntas()
        setCompetencias(['Razonamiento Cuantitativo', 'Inglés', 'Lectura Crítica', 'Competencias Ciudadanas'])
        setCompetenciasSelect('Razonamiento Cuantitativo')
        setCorrecta(['A', 'B', 'C', 'D'])
        setCorrectaSelect('A')
    }, [])

    const obtenerPreguntas = async () => {
        /* TODO Borrar --- const id = sessionStorage.getItem('idusuario') */
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/pregunta/listar',
            {
                headers: {'autorizacion': token}
            })
        //console.log(respuesta.data)
        setPreguntas(respuesta.data)
    }

    const buscar = async (e) => {

        if (e.target.value === '') {
            return obtenerPreguntas()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/pregunta/buscarpreguntaenca/' + buscar + '/', {
            headers: {'autorizacion': token}
        })
        setPreguntas(respuesta.data)
    }
    const guardar = async (e) => {
        e.preventDefault()
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
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('http://localhost:4000/pregunta/crear', pregunta,
            {
                headers: {'autorizacion': token}
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

    const ActDes = async (e) => {
        // const constEstado = (e.target.value).slice(-1)
        // const id = (e.target.value).slice(0,-1)
        e.preventDefault()
        const id = (e.target.value)
        // console.log(constEstado)
        // console.log(id)
        // console.log(e.target.value)
        const token = sessionStorage.getItem('token')
        
        const respuesta = await Axios.put('http://localhost:4000/pregunta/activar/' + id, {
        // const respuesta = await Axios.put('http://localhost:4000/pregunta/activar/' + id, constEstado, {
            headers: {'autorizacion': token}
        })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = '/preguntas'
        }, 3000)
    }


    return (
        <div>
            <Nav />

            
            <nav className = 'navbar py-4'>
                <div className = "container">
                    <div className = "col-md-3">
                        <Link 
                            to = '#' 
                            className = "btn btn-primary btn-block" 
                            data-bs-toggle = 'modal'
                            data-bs-target = '#addPregunta'
                        >
                            <i className = 'fas fa-plus'></i> Add Pregunta
                        </Link>
                    </div>
                    <div className = "col-md-6 ml-auto">
                        <div className = "input-group">
                            <input 
                                className = 'form-control mr-sm-2' 
                                type = 'search' 
                                placeholder = 'Buscar...' 
                                aria-label = 'Search' 
                                onChange = {(e) => buscar(e)} 
                            />
                        </div>
                    </div>
                </div>
            </nav>

         
            <section>
                <div className = "container">
                    <div className = "row">

                        <div className = "col-md-12">
                            <div className = "card">
                                <div className = "card-header">
                                    <h4>Preguntas</h4>
                                </div>
                                <div className = "table-responsive-lg">
                                    <table className = "table  table-striped card-text">
                                        <thead className = 'table-dark'>
                                            <tr>
                                                <th>#</th>
                                                <th>Encabezado</th>
                                                <th>Puntaje</th>
                                                <th>Categoría competencia</th>
                                                <th>Estado</th>
                                                <th>Editar</th>
                                                <th>Desactivar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                preguntas.map((pregunta, i) => (
                                                    <tr key={pregunta._id}>
                                                        <td>{i + 1}</td>
                                                        <td>{pregunta.encabezado}</td>
                                                        <td>{pregunta.puntaje}</td>
                                                        <td>{pregunta.competencias}</td>
                                                        <td>{pregunta.estado}</td>
                                                        <td>
                                                            <Link className = 'btn btn-danger mr-1' to = {'/editarpregunta/' + pregunta._id}>Editar</Link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                type = "button"
                                                                className = "btn btn-outline-danger"
                                                                data-bs-toggle = "button"
                                                                autocomplete = "off"
                                                                value = {pregunta._id + pregunta.estado}
                                                                onClick = {(e) => ActDes(e)} 
                                                            >
                                                                Activar/Desactivar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
         

            <div className = 'modal fade' id = 'addPregunta'>
                <div className = 'modal-dialog modal-lg'></div>
                <div className = 'modal-content'>
                    <div className = 'modal-header bg-primary text-white'>
                        <h5 className = 'modal-title'>Add Pregunta</h5>
                        <button 
                            type = "button" 
                            className = 'btn-close' 
                            data-bs-dismiss = 'modal'
                            aria-label = "Close">
                        </button>
                    </div>
                    <div className = 'modal-body'>
                        <form onSubmit = {guardar}>
                            {/*<div className="form-group">
                                    <label className='form-label'> Encabezado </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>*/}
                            <div className = "mb-3">
                                <label> Encabezado </label>
                                <textarea 
                                    class = "form-control" 
                                    id = "exampleFormControlTextarea1" 
                                    rows = "3" 
                                    required  
                                    onChange = {(e) => setEncabezado(e.target.value)}
                                ></textarea>
                            </div>

                            <div className = "mb-3">
                                <label className = 'form-label'> Opción A. </label>
                                <input 
                                     type = 'text' 
                                     className = 'form-control' 
                                     required 
                                     onChange = {(e) => setRespuestaA(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Opción B. </label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setRespuestaB(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Opción C. </label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setRespuestaC(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Opción D. </label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setRespuestaD(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'>Competencia </label>
                                <select className = 'form-control' required onChange = {(e) => setCompetenciasSelect(e.target.value)} >
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
                                <select className = 'form-control' required onChange = {(e) => setCorrectaSelect(e.target.value)} >
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
                                    onChange = {(e) => setPuntaje(e.target.value)}
                                />
                            </div>

                            <div className = "mb-3">
                                <button className = 'btn btn-primary' type = 'submit'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}