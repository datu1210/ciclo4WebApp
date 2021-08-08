import React, { useState, useEffect } from 'react'
import practica from '../img/practica.jpg'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import './Pregunta'
import quimica from '../img/quimica.png'
import matematicas from '../img/matematica.jpg'
import historia from '../img/historia.jpg'
import sociales from '../img/sociales.jpg'

const preguntas = [

    {

        "id": "1",

        "categoria": "Razonamiento cuantitativo",

        "encabezado": "Este es el encabezado de la pregunta",

        "opciona": "123",
        "opcionb": "456",
        "opcionc": "789",
        "opciond": "000"

    },

    {

        "id": "2",

        "categoria": "Comprensión lectora",

        "encabezado": "Este es el encabezado de la pregunta CL",

        "opciona": "321",
        "opcionb": "654",
        "opcionc": "357",
        "opciond": "090"

    },

    {

        "id": "3",

        "categoria": "Inglés",

        "encabezado": "Este es el encabezado de la pregunta Inglés",

        "opciona": "999",
        "opcionb": "222",
        "opcionc": "111",
        "opciond": "300"

    },

    {

        "id": "4",

        "categoria": "Competencias ciudadanas",

        "encabezado": "Este es el encabezado de la pregunta CC",

        "opciona": "989",
        "opcionb": "333",
        "opcionc": "444",
        "opciond": "555"

        
    }


]


export default function Principal() {





    const [preguntast, setPreguntast] = useState([])
    const [resultados, setResultados] = useState([])
    const [encabezado, setEncabezado] = useState('')
    const [ids, setIds] = useState('')
    const [puntaje, setPuntaje] = useState('')
    const [estado, setEstado] = useState('')
    const [respuestaA, setRespuestaA] = useState('')
    const [respuestaB, setRespuestaB] = useState('')
    const [respuestaC, setRespuestaC] = useState('')
    const [respuestaD, setRespuestaD] = useState('')
    const [correcta, setCorrecta] = useState([])
    const [displayModal, setDisplayModal] = useState(false);
    const [preguntasdes, setPreguntasdes] = useState([])

    const obtenerResultados = async () => {
        /* const id = props.match.params.id */
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/resultado/buscarresultadoest/' + id, {
            headers: { 'autorizacion': token }
        })
        setResultados(respuesta.data)
        if (resultados === "") {

        }
        else {
            /* obtenerPreguntas() */
            let arraypreguntas = []
            resultados.map((estudiante, i) => (
                arraypreguntas.push(estudiante.pregunta._id)
            ))
            const preguntasR = await Axios.get('http://localhost:4000/pregunta/buscarpregsest/', {
                headers: { 'autorizacion': token },
                params: {
                    ids: arraypreguntas,
                }
            },
            )
            preguntasR.data.map((item, i) => (
                preguntasdes.push(item)
                ))
                setPreguntasdes (preguntasdes)
        }

            /* console.log(preguntasdes) */


        /* console.log(generico) */
        /* console.log('http://localhost:4000/pregunta/buscarpregsest/' + arraypreguntas) */
    }









    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((i) => (i + 1) % preguntasdes.length);
    };
    const prev = () => {
        setIndex(
            (i) => (((i - 1) % preguntasdes.length) + preguntasdes.length) % preguntasdes.length
        );
    };

    useEffect(() => {
        obtenerResultados()
        window.addEventListener("click", onClickOutside);
        return () => window.removeEventListener("click", onClickOutside);
    }, []);

    const onClickOutside = (e) => {
        if (e.target.localName !== "button") {
            setDisplayModal(false);
        }
    };

    return (
        <div>
            <Nav />
            <div className="container py-5">

                <div className="row pt-3" >

                    <div className="col-sm-3 mt-3">
                        <div className="card" >
                            <img src={practica} className="textoCentrado card-img-top" height="200px" width="40" alt="practica"></img>
                            <div className="card-body">
                                <h5 className="card-title">Todas las competencias</h5>
                                <button className="btn btn-outline-success btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#todas">Empieza ahora</button>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <div className="card" >
                            <img src={quimica} height="200px  " width="40px" className="card-img-top" alt="quimica"></img>
                            <div className="card-body">
                                <h5 className="card-title">Razonamiento cuantitativo</h5>
                                <button className="btn btn-outline-success btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#cuantitativo">Empieza ahora</button>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <div className="card"  >
                            <img src={matematicas} height="200px  " width="40px" className="card-img-top" alt="matematica"></img>
                            <div className="card-body">
                                <h5 className="card-title">ingles</h5>
                                <button className="btn btn-outline-success btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#ingles">Empieza ahora</button>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <div className="card" >
                            <img src={historia} height="200px  " width="40px" className="card-img-top" alt="historia"></img>
                            <div className="card-body">
                                <h5 className="card-title">Lectura crítica</h5>
                                <button className="btn btn-outline-success btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#critica">Empieza ahora</button>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 mt-4">
                        <div className="card" >
                            <img src={sociales} height="200px" width="40px" className="card-img-top" alt="sociales"></img>
                            <div className="card-body">
                                <h5 className="card-title">Competencias ciudadanas</h5>
                                <button className="btn btn-outline-success btn-sm mx-2" data-bs-toggle="modal" data-bs-target="#ciudadanas">Empieza ahora</button>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* FALTA COMUNICACION ESCRITA */}
                    {/* ---------------------------------------------------Modal Todas las competencias--------------------------------------------------------------------------------------- */}
                    <div className="modal fade" id="todas" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="todasLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header table-dark" style={{ backgroundColor: "#182434" }}>
                                    <h5 className="modal-title" id="todasLabel"> {preguntas[index].categoria}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-check">
                                        <p>{preguntas[index].encabezado}</p>
                                    </div>
                                    <div className="form-check">
                                        <label>
                                            <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                                            A. {preguntas[index].opciona}
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check">
                                        <label>
                                            <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                                            B. {preguntas[index].opcionb}
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check">
                                        <label>
                                            <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                                            C. {preguntas[index].opcionc}
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="form-check">
                                        <label>
                                            <input type="radio" name="react-tips" value="option1" className="form-check-input" />
                                            D. {preguntas[index].opciond}
                                        </label>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className='btn btn-warning mr-1' onClick={prev}>Anterior</button>
                                    <button className='btn btn-warning mr-1' onClick={next}>Siguiente</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
