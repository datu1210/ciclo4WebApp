import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';
import { Link } from 'react-router-dom'

export default function Responderpreguntas() {

    const [idsPreguntasRes, setIdsPreguntasRes]=useState([])
	const [preguntasdes, setPreguntasdes] = useState([])
    const [respuestas, setRespuestas] = useState([]);
    
    useEffect(() => {
        fetchData()        
    }, [])

    //async function fetchData(){
    const fetchData = async () =>{
        var qs = require('qs');
    
		const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
		const respuesta = await Axios.get('http://localhost:4000/resultado/buscarresultadoest/' + id, {
            headers: { 'autorizacion': token }
        })
		setIdsPreguntasRes(respuesta.data) //se setean los ids de las preguntas que el estudiante ya respondió
		if (idsPreguntasRes === "") {
			console.log("Nunca he utilizado el simulador")
        }
        else {
            /* obtenerPreguntas() */
            let arraypreguntas = []
            idsPreguntasRes.map((estudiante, i) => (
                arraypreguntas.push(estudiante.pregunta._id)
                
            ))   

            let arraypreguntas2=[]
            respuesta.data.map((item, i) => (
                arraypreguntas2.push(item)
                ))
            
            let arraypreguntas3=[]
            arraypreguntas2.map((res, i) => (
                arraypreguntas3.push(res.pregunta._id)
            ))

            arraypreguntas3.map((res, i) => (
                console.log("los items:" +res)
            ))
             
            //Esta consulta tiene un problema, ya que en el back no sabemos como procesar los ids
            //que se envían en la url!!!
			const preguntasR = await Axios.get('http://localhost:4000/pregunta/buscarpregsest', {
                headers: { 'autorizacion': token },
                params: {
                    ids: arraypreguntas3
                  },
                paramsSerializer: params => {
                    return qs.stringify(params)
                  }
            },
            )
            setPreguntasdes(preguntasR.data)                              
		}	
	}

    const guardarRespuestas = async (e) => {
       
        e.preventDefault() 
        //Esto es lo que contestó el estudiante   
        const estudiante = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        let arrayresultados = []

        
        var d = new Date,
            fecha = [d.getFullYear(),
               d.getMonth()+1,
               d.getDate(),
               ].join('-')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
        
        
        console.log("*********La fecha: "+fecha)       
        
                
        var msjaciertos=""
        var msjfallos=" "
        var msj=""
      
        preguntasdes.forEach((prg,keys)=>{
            //console.log("id "+pregunta._id)
            const pregunta = prg._id
            const correct = prg.correcta            
            respuestas.forEach(function (resp, index){
                //comparar ids
                if(pregunta===resp.substring(0,resp.indexOf('*'))){
                   //Comparar respuestas
                   
                    if(correct===resp.slice(-1)){                        
                        msjaciertos=(index+1)+ " , " +msjaciertos                        
                        const resultado= 
                        {
                            fecha,
                            correcta:"1",
                            pregunta,
                            estudiante
                        }
                        console.log("El resultado B:"+resultado.fecha+" / "+resultado.correcta+ "/ "+resultado.pregunta+ "/ "+resultado.estudiante)
                        arrayresultados.push(resultado)
                        
                        
                    }
                    else{
                        msjfallos=(index+1)+ " , "+msjfallos                                                
                        const resultado= 
                        {
                            fecha,
                            correcta:"0",
                            pregunta,
                            estudiante
                        }
                        console.log("El resultado A:"+resultado.fecha+" / "+resultado.correcta+ "/ "+resultado.pregunta+ "/ "+resultado.estudiante)
                        arrayresultados.push(resultado)
                    }
                }                
              });
          }) //fin del primer foreach
        
        arrayresultados.map((res, i) => (
            console.log("****"+res.correcta)
        ))

      arrayresultados.forEach((resul,keys)=>{            
            const getData = async () => {
                try {
                    return await Axios.post('http://localhost:4000/resultado/guardar', resul,
                        {
                            headers: { 'autorizacion': token }
                        })
                } catch (error) {
                    console.error(error)
                }
            }
                  
            const callEndpoint = async () => {
                const responseData = await getData()
            
                console.log(responseData)
            }
            
            callEndpoint();
        })
        
        setIdsPreguntasRes([])
        setPreguntasdes([])
        setRespuestas([])

        msj="Acertó: "+msjaciertos+ " Falló: "+msjfallos
        Swal.fire({
            icon: 'success',
            title: msj,
            confirmButtonText: "OK",
            showConfirmButton: true,
            confirmButtonColor: '#3085d6'
            })
         .then((result) => {
                if (result.value) {
                  window.location.href = `/principal`
                }
              }); 
    }


    return (
        <div>
        <Nav />

        <section>
            <div className="container">
            <form onSubmit={guardarRespuestas}>
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4></h4>
                            </div>
                            <div className="table-responsive-lg">
                                <table className="table  table-striped card-text">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Encabezado</th>
                                            <th>Opción A</th>
                                            <th>Opción B</th>
                                            <th>Opción C</th>
                                            <th>Opción D</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            preguntasdes.map((pregunta, i) => (                                                                                      
                                                <tr key={pregunta._id}>
                                                    
                                                    <td>{i + 1}</td>
                                                    <td>{pregunta.encabezado}</td>
                                                    <td>
                                                     <label>
                                                        <input name={pregunta._id} type="radio"
                                                        value={pregunta._id+"*A"} onChange={(event) => setRespuestas(respuestas.concat(event.target.value))}
                                                        />
                                                        <span>{pregunta.respuestaA}</span>
                                                        </label>
                                                        </td>
                                                    <td><label>
                                                        <input name={pregunta._id}  type="radio"   
                                                        value={pregunta._id+"*B"} onChange={(event) => setRespuestas(respuestas.concat(event.target.value))}
                                                        />
                                                        <span>{pregunta.respuestaB}</span>
                                                        </label></td>                                                    
                                                    <td><label>
                                                        <input name={pregunta._id} type="radio"
                                                        value={pregunta._id+"*C"} onChange={(event) => setRespuestas(respuestas.concat(event.target.value))}
                                                        />
                                                        <span>{pregunta.respuestaC}</span>
                                                        </label></td>                                                    
                                                    <td><label>
                                                        <input name={pregunta._id} type="radio"
                                                        value={pregunta._id+"*D"} onChange={(event) => setRespuestas(respuestas.concat(event.target.value))}

                                                        />
                                                        <span>{pregunta.respuestaD}</span>
                                                        </label></td>                                                    
                                                                                                   </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                            <button className='btn btn-primary' type='submit'>Guardar</button>
                </div>
                </form>
            </div>
        </section>        
        </div>

    )
}
