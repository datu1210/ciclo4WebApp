import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2';
import Nav from './Nav';
import Axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


export default function Resultadostc() {

  const [resRzCEstado, setResRzCEstado] = useState('')
  const [resInglesEstado, setResInglesEstado] = useState('')
  const [resLecCEstado, setResLecCEstado] = useState('')
  const [resComCEstado, setResComCEstado] = useState('')
  const [resRzCorre, setResRzCorre] = useState('')
  const [resInglesCorre, setResInglesCorre] = useState('')
  const [resLecCorre, setResLecCorre] = useState('')
  const [resComCorre, setResComCorre] = useState('')
  const [resRzInco, setResRzInco] = useState('')
  const [resInglesInco, setResInglesInco] = useState('')
  const [resLecInco, setResLeInco] = useState('')
  const [resComInco, setResComInco] = useState('')
  const [fi, setFi] = useState(null);
  const [ff, setFf] = useState(null);
 
    const handleFi = (date) => {
        setFi(date);        
      };
    
    const handleFf = (date) => {
        setFf(date);
      };
      
   const buscar = async (e) => {
       e.preventDefault()             
       console.log("inicio "+fi)
       console.log("inicio "+ff)
       const fini= moment(fi).format()
       const ffin=moment(ff).format()
       console.log("fecha i: "+fini)
       console.log("fecha f: "+ffin)
       const fechas=fini+"*"+ffin
       var qs = require('qs')
       const token = sessionStorage.getItem('token')
       const respuesta = await Axios.get('resultado/buscarporfechas' ,{
          headers: {'autorizacion': token},
          params: {
            fechas: fechas
          },
        paramsSerializer: params => {
            return qs.stringify(params)
          }
    },
      )
      if (respuesta === "") {
        console.log("Nunca he utilizado el simulador")
      }
      else {
        console.log("Se le tiene2") 
        respuesta.data.map((res, i) => {
          switch (res._id) {
            case 'Razonamiento Cuantitativo':                             
              setResRzCEstado (res.respondidas)  
              setResRzCorre(res.correctas)
              setResRzInco(res.incorrectas)                         
              break;
                
            case 'Inglés':                
                setResInglesEstado (res.respondidas)
                setResInglesCorre(res.correctas)
                setResInglesInco(res.incorrectas)                
                
              break;
                
            case 'Lectura Crítica':            
               setResLecCEstado(res.respondidas)
               setResLecCorre(res.correctas)
               setResLeInco(res.incorrectas) 

              break;
              
            case 'Competencias Ciudadanas':              
              setResComCEstado(res.respondidas) 
              setResComCorre(res.correctas)
              setResComInco(res.incorrectas) 
              break;
              
            default:
                return (
                  console.log("esto se imprime por defecto si no reconoce una competencia")
                )
          }
          return (console.log(respuesta))
        })                          
      }

   }

   const data = {
    labels: ['Razonamiento cuantitativo', 'Inglés', 'Lectura crítica', 'Competencias ciudadanas'],
    datasets: [
      {
        label: 'Correctas',
        data: [resRzCorre, resInglesCorre, resLecCorre, resComCorre],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Incorrectas',
        data: [resRzInco, resInglesInco,resLecInco,resComInco],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Total',
        data: [resRzCEstado, resInglesEstado, resLecCEstado, resComCEstado],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Nav/>
      {/* <div className = 'header m-5'>
          <h4 className = 'title'>Resultados competencias</h4>
      </div> */}
      <div className = "container mt-5">
      <div className = "col-md-8 mx-auto">
      <div className="input-container">
      <form onSubmit = {buscar}>
        <div>
          <label>Fecha Inicio</label>
          <DatePicker
            selected={fi}            
            onChange={handleFi}            
          />
        </div>
        <div>
          <label>Fecha Fin</label>
          <DatePicker
            selected={ff}
            onChange={handleFf}            
          />
        </div>
      

      <div className = "mb-3">
                        <button className = 'btn btn-primary' type = 'submit'>Generar reporte</button>
                    </div>
      </form>
      </div>

      </div>
        <div className = "col-md-7 mx-auto">
          <Bar data = {data} options = {options} />
        </div>
      </div> 
      
    </div>
  )
}