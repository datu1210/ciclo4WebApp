import React from 'react'
import { Bar } from 'react-chartjs-2';
import Nav from './Nav';




export default function Resultadostc() {
  const data = {
    labels: ['Razonamiento cuantitativo', 'Inglés', 'Lectura crítica', 'Competencias ciudadanas'],
    datasets: [
      {
        label: 'Puntaje',
        data: [100, 50, 70, 45],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'          
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
          <div className='header'>
            <h4 className='title'>Resultados competencias</h4>
        </div>
          <Bar data={data} options={options} />
            
       </div>
    )
}
