import React from 'react'
import practica from '../img/practica.jpg'
import prueba from '../img/prueba.png'
import resultados from '../img/resultados.jpg'
import Nav from './Nav';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

export default function Principal() {
    return (
        <div>
            <Nav />
            <div className="container-fluid pt-3 ">

                <div className="container">

                    <h5>Selecciona la opción deseada</h5>
                </div>

                <div className="container row pt-3">
                    <div className="col-sm-4">
                        <div className="card" >
                            <img src={practica} className="textoCentrado card-img-top" height="200px" width="40" alt="practica"></img>
                            <div className="card-body">
                                <h5 className="card-title">Practicar todas las competencias</h5>
                                <p className="btn btn-outline-success btn-sm">Empieza ahora</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img className="textoCentrado card-img-top" height="200px" width="40" src={prueba}
                                alt="prueba"></img>
                            <div className="card-body">
                                <h5 className="card-title">Practicar una competencia</h5>
                                <p className="btn btn-outline-success btn-sm">Empieza ahora</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" >
                            <img src={resultados} className="textoCentrado card-img-top" height="200px" width="40" alt="Resultados"></img>
                            <div className="card-body">
                                <h5 className="card-title">Resultados</h5>
                                <p className="btn btn-outline-success btn-sm">Ver</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
