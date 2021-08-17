
// import React, {useState, useEffect} from 'react'
import React from 'react'
import {Link} from "react-router-dom";
// import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
// import Axios from 'axios'
// import {Image, Button, Modal, Jumbotron} from 'react-bootstrap'
// import Swal from 'sweetalert2'
import './Pregunta'
import Nav from './Nav';
import practica from '../img/practicaNorm.jpg'
import matematicas from '../img/matematicaNorm.jpg'
import ingles from '../img/inglesNorm.jpg'
import historia from '../img/historiaNorm.jpg'
import sociales from '../img/socialesNorm.jpg'


export default function Principal(){
	
return(
	<>
        <Nav/>

        <div className = "d-flex flex-wrap justify-content-center p-5">

            <div className = "m-3 d-flex">
                <div className = "card shadow mx-auto" >
                    <img 
                        src = {practica} 
                        className = "card-img-top" 
                        height = "150px" 
                        width = "40px" 
                        alt = "practica">
                    </img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title">Todas las competencias</h5>                                
                        <Link to = {"/responderpreguntas/todasComp"}>
                            <button className = "btn btn-outline-success btn-sm">Empieza ahora</button>
                        </Link>
                        {/* <Link to = "/resultadostc">
                            <button className = "btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className = "m-3 d-flex">
                <div className = "card shadow mx-auto" >
                    <img 
                        src = {matematicas} 
                        height = "150px" 
                        width = "40px" 
                        className = "card-img-top" 
                        alt = "quimica">
                    </img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title">Razonamiento cuantitativo</h5>
                        <Link to = {"/responderpreguntas/Razonamiento Cuantitativo"}>
                            <button className = "btn btn-outline-success btn-sm">Empieza ahora</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "m-3 d-flex">
                <div className = "card shadow mx-auto"  >
                    <img 
                        src = {ingles}
                        height = "150px" 
                        width = "40px" 
                        className = "card-img-top" 
                        alt = "matematica">
                    </img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title">Inglés</h5>
                        <Link to = {"/responderpreguntas/Inglés"}>
                            <button className = "btn btn-outline-success btn-sm">Empieza ahora</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "m-3 d-flex">
                <div className = "card shadow mx-auto" >
                    <img 
                        src = {historia} 
                        height = "150px" 
                        width = "40px" 
                        className = "card-img-top" 
                        alt = "historia">
                    </img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title">Lectura crítica</h5>
                        <Link to = {"/responderpreguntas/Lectura Crítica"}>
                            <button className = "btn btn-outline-success btn-sm">Empieza ahora</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "m-3 d-flex">
                <div className = "card shadow mx-auto" >
                    <img 
                        src = {sociales} 
                        height = "150px" 
                        width = "40px" 
                        className = "card-img-top" 
                        alt="sociales">
                    </img>
                    <div className = "card-body text-center">
                        <h5 className = "card-title">Competencias ciudadanas</h5>
                        <Link to = {"/responderpreguntas/Competencias Ciudadanas"}>
                            <button className = "btn btn-outline-success btn-sm">Empieza ahora</button>
                        </Link>
                    </div>
                </div>
            </div>	
        </div>

	</>
)

}