
import React, {useState, useEffect} from 'react'
import {Image, Button, Modal, Jumbotron} from 'react-bootstrap'
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

export default function Principal(){
	const [nasaData, setData]=useState({})
	const [idsPreguntasRes, setIdsPreguntasRes]=useState([])
	const [preguntasdes, setPreguntasdes] = useState([])
	const [showModal,setModal] = useState(false)

	async function fetchData(){
		const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
		const respuesta = await Axios.get('http://localhost:4000/resultado/buscarresultadoest/' + id, {
            headers: { 'autorizacion': token }
        })
		setIdsPreguntasRes(respuesta.data)
		if (idsPreguntasRes === "") {
			console.log("Nunca he utilizado el simulador")
        }
        else {
            /* obtenerPreguntas() */
			console.log("***********")
            let arraypreguntas = []
            idsPreguntasRes.map((estudiante, i) => (
                arraypreguntas.push(estudiante.pregunta._id)
            ))
			const preguntasR = await Axios.get('http://localhost:4000/pregunta/buscarpregsest/', {
                headers: { 'autorizacion': token },
                params: {
                    ids: arraypreguntas,
                }
            },
            )
			/*preguntasR.data.map((item, i) => (
                preguntasdes.push(item)
                ))*/

            setPreguntasdes(preguntasR.data)            
		}
		const res=await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		const data = await res.json()
		setData(data)	
	}

	useEffect(()=>{fetchData()},[])

return(
	<>
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
	<div id="jumbo-div">
		<Jumbotron>
			<h3 id="page-title"> {nasaData.title}</h3>
			<Button variant="info" onClick={()=>setModal(true)}>
				Nasa - Detalles de Foto
			</Button>
		</Jumbotron>
	</div>

	<div id="modal-div">
		<Modal size="lg" show={showModal} onHide={()=>setModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title id="pic-title"> {nasaData.title}</Modal.Title>
        </Modal.Header>
			<Modal.Body id="pic-info">
			 	<Image src={nasaData.hdurl} fluid/>
			<h5 id="pic-sub-title">
				{nasaData.copyright ? nasaData.copyright:"Unknown"} | {nasaData.date}
			</h5>
			<p id="pic-summary"><strong>Summary:</strong> {nasaData.explanation}</p>

			</Modal.Body>
			<Button variant="danger" onClick={()=>setModal(false)}> Close</Button>
		</Modal>
	</div>
	<div>{preguntasdes.map( e =>
          <div>{ e.encabezado }</div>
        )}
        </div>
        <div>{/*preguntasdes[0].encabezado*/}</div>
    
	</div>
	</div>
	</>

)

}