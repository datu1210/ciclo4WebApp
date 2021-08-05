
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
            <div className = "container py-5">

                <div className = "row pt-3" >

                    <div className = "col-sm-3 mt-3">
                        <div className = "card" >
                            <img 
                                src = {practica} 
                                className = "textoCentrado card-img-top" 
                                height = "200px" 
                                width = "40" 
                                alt = "practica">
                            </img>
                            <div className = "card-body">
                                <h5 className = "card-title">Todas las competencias</h5>                                
                                <Link to = "/responderpreguntas">
                                    <button className = "btn btn-outline-success btn-sm mx-2">Empieza ahora</button>
                                </Link>
                                {/* <Link to = "/resultadostc">
                                    <button className = "btn btn-outline-success btn-sm mx-2">Ver resultados</button>
                                </Link> */}
                            </div>
                        </div>
                    </div>
					<div className = "col-sm-3 mt-3">
                        <div className = "card" >
                            <img 
                                src = {quimica} 
                                height = "200px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "quimica">
                            </img>
                            <div className = "card-body">
                                <h5 className = "card-title">Razonamiento cuantitativo</h5>
                                <button className = "btn btn-outline-success btn-sm mx-2" data-bs-toggle = "modal" data-bs-target = "#cuantitativo">Empieza ahora</button>
                            </div>
                        </div>
                    </div>
					<div className = "col-sm-3 mt-3">
                        <div className = "card"  >
                            <img 
                                src = {matematicas}
                                height = "200px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "matematica">
                            </img>
                            <div className = "card-body">
                                <h5 className = "card-title">Inglés</h5>
                                <button className = "btn btn-outline-success btn-sm mx-2" data-bs-toggle = "modal" data-bs-target = "#ingles">Empieza ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-3 mt-3">
                        <div className = "card" >
                            <img 
                                src = {historia} 
                                height = "200px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt = "historia">
                            </img>
                            <div className = "card-body">
                                <h5 className = "card-title">Lectura crítica</h5>
                                <button className = "btn btn-outline-success btn-sm mx-2" data-bs-toggle = "modal" data-bs-target = "#critica">Empieza ahora</button>
                            </div>
                        </div>
                    </div>
                    <div className = "col-sm-3 mt-4">
                        <div className = "card" >
                            <img 
                                src = {sociales} 
                                height = "200px" 
                                width = "40px" 
                                className = "card-img-top" 
                                alt="sociales">
                            </img>
                            <div className = "card-body">
                                <h5 className = "card-title">Competencias ciudadanas</h5>
                                <button className = "btn btn-outline-success btn-sm mx-2" data-bs-toggle = "modal" data-bs-target = "#ciudadanas">Empieza ahora</button>
                            </div>
                        </div>
                    </div>	
		</div>
	</div>
	</>

)

}