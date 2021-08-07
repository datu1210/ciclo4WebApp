
import React, {useState, useEffect} from 'react'
import {Image, Button, Modal, Jumbotron} from 'react-bootstrap'
import practica from '../img/practica.jpg'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import './Pregunta'
import quimica from '../img/quimica.png'
import matematicas from '../img/matematica.jpg'
import historia from '../img/historia.jpg'
import sociales from '../img/sociales.jpg'

export default function Principal(){
	
return(
	<>
            <Nav/>
            <div className = "container pb-5">

                <div className = "row pt-3 w-75 mx-auto" >

                    <div className = "col-sm-4 mt-5 d-flex">
                        <div className = "card shadow mx-auto" >
                            <img 
                                src = {practica} 
                                className = "card-img-top" 
                                height = "250px" 
                                width = "40px" 
                                alt = "practica">
                            </img>
                            <div className = "card-body mx-auto">
                                <h5 className = "card-title">Todas las competencias</h5>                                
                                <Link to = {'/responderpreguntas/' + "todasComp"}>
                                    <button className = "btn btn-outline-success btn-sm mx-auto d-flex">Empieza ahora</button>
                                </Link>
                                {/* <Link to = "/resultadostc">
                                    <button className = "btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
					<div className = "col-sm-4 mt-5 d-flex">
                        <div className = "card shadow mx-auto" >
                            <img 
                                src = {quimica} 
                                height = "250px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "quimica">
                            </img>
                            <div className = "card-body mx-auto">
                                <h5 className = "card-title">Razonamiento cuantitativo</h5>
                                <Link to = {'/responderpreguntas/' + "Razonamiento Cuantitativo"}>
                                    <button className = "btn btn-outline-success btn-sm mx-auto d-flex">Empieza ahora</button>
                                </Link>
                            </div>
                        </div>
                    </div>
					<div className = "col-sm-4 mt-5 d-flex">
                        <div className = "card shadow mx-auto"  >
                            <img 
                                src = {matematicas}
                                height = "250px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "matematica">
                            </img>
                            <div className = "card-body mx-auto">
                                <h5 className = "card-title">Inglés</h5>
                                <Link to = {'/responderpreguntas/' + "Inglés"}>
                                    <button className = "btn btn-outline-success btn-sm mx-auto d-flex">Empieza ahora</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-4 mt-5 d-flex">
                        <div className = "card shadow mx-auto" >
                            <img 
                                src = {historia} 
                                height = "250px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "historia">
                            </img>
                            <div className = "card-body mx-auto">
                                <h5 className = "card-title">Lectura crítica</h5>
                                <Link to = {'/responderpreguntas/' + "Lectura Crítica"}>
                                    <button className = "btn btn-outline-success btn-sm mx-auto d-flex">Empieza ahora</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-4 mt-5 d-flex">
                        <div className = "card shadow mx-auto" >
                            <img 
                                src = {sociales} 
                                height = "250px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt="sociales">
                            </img>
                            <div className = "card-body mx-auto">
                                <h5 className = "card-title">Competencias ciudadanas</h5>
                                <Link to = {'/responderpreguntas/' + "Competencias Ciudadanas"}>
                                    <button className = "btn btn-outline-success btn-sm mx-auto d-flex">Empieza ahora</button>
                                </Link>
                            </div>
                        </div>
                    </div>	
		</div>
	</div>
	</>

)

}