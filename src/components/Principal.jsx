import React from 'react'
import practica from '../img/practica.jpg'
// import prueba from '../img/prueba.png'
// import resultados from '../img/resultados.jpg'
import Nav from './Nav';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import quimica from '../img/quimica.png'
import matematicas from '../img/matematica.jpg'
import historia from '../img/historia.jpg'
// import naturales from '../img/biologia.jpg'
// import ingles from '../img/ingles.jpg'
import sociales from '../img/sociales.jpg'

export default function Principal() {
    return (
        <div>
            <Nav/>
             <div className="container py-5">
               
               <div className="row pt-3" >
                   
                    <div className="col-sm-3 mt-3">
                        <div className="card" >
                            <img src={practica} className="textoCentrado card-img-top" height="200px" width="40" alt="practica"></img>
                            <div className="card-body">
                                <h5 className="card-title">Todas las competencias</h5>
                                <Link to="/pregunta">
                                    <button className="btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
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
                                <Link to="/pregunta">
                                    <button className="btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
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
                                <h5 className="card-title">Inglés</h5>
                                <Link to="/pregunta">
                                    <button className="btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
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
                                <Link to="/pregunta">
                                    <button className="btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
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
                                <Link to="/pregunta">
                                    <button className="btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
                                <Link to="/resultadostc">
                                    <button className="btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link>
                            </div>
                        </div>             
                    </div>
    {/* FALTA COMUNICACION ESCRITA */}
                </div>
            </div>
        </div>
)
}
