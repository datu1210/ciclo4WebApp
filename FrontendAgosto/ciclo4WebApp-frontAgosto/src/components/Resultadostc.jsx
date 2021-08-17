import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2';
import Nav from './Nav';
import Axios from 'axios'


export default function Resultadostc() {

  const [resRzCEstado, setResRzCEstado] = useState('')
	const [resInglesEstado, setResInglesEstado] = useState('')
  const [resLecCEstado, setResLecCEstado] = useState('')
  const [resComCEstado, setResComCEstado] = useState('')
    
    useEffect(() => {
        obtenerResultado()
    }, [])

    const obtenerResultado = async () => {
      var resRzC = 0
      var resIngles = 0
      var resLecC = 0
      var resComC = 0
      const id = sessionStorage.getItem('idusuario')
      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.get('resultado/buscarresultadoest/' + id, {
          headers: {'autorizacion': token}
      })
      if (respuesta === "") {
        console.log("Nunca he utilizado el simulador")
      }
      else {
        console.log("Se le tiene")
        // let arrayrespuestas = []
        respuesta.data.map((res, i) => {
          switch (res.pregunta.competencias) {
            case 'Razonamiento Cuantitativo':
              if (res.correcta === "1") {
              resRzC = resRzC + (res.pregunta.puntaje)
              console.log(resRzC)
              }
              break;

                // return (
                //   console.log("rrrrrrrrrrrrrrrrr")
                // )
            case 'Inglés':
              if (res.correcta === "1") {
                resIngles = resIngles + (res.pregunta.puntaje)
                console.log(resIngles)
              }
              break;
                // return (
                //   console.log("iiiiiiiiiiiiiiii")
                // )
            case 'Lectura Crítica':
              if (res.correcta === "1") {
                resLecC = resLecC + (res.pregunta.puntaje)
                console.log(resLecC)
              }
              break;
              // return (
              //   console.log("lllllllllllll")
              // )
            case 'Competencias Ciudadanas':
              if (res.correcta === "1") {
                resComC = resComC + (res.pregunta.puntaje)
                console.log(resComC)
              }
              break;
              // return (
              //   console.log("ccccccccccccc")
              // )
            default:
                return (
                  console.log("esto se imprime por defecto si no reconoce una competencia")
                )
          }
        //  return (console.log("xxxxxxxxxxxxxxxxx"))
          return (console.log(respuesta))
        })

        setResRzCEstado (resRzC)
        setResInglesEstado (resIngles)
        setResLecCEstado (resLecC)
        setResComCEstado (resComC)
      }
    }

  const data = {
    labels: ['Razonamiento cuantitativo', 'Inglés', 'Lectura crítica', 'Competencias ciudadanas'],
    datasets: [
      {
        label: 'Puntaje',
        data: [resRzCEstado, resInglesEstado, resLecCEstado, resComCEstado],
        backgroundColor: [
          'rgba(255, 99, 132, 1.0)',
          'rgba(54, 162, 235, 1.0)',
          'rgba(255, 206, 86, 1.0)',
          'rgba(75, 192, 192, 1.0)'          
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
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
          <Bar data = {data} options = {options} />
        </div>
      </div> 
    </div>
  )
}
