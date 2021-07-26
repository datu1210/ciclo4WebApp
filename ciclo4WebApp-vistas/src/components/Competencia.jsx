import React from "react";
import quimica from '../img/quimica.png'
import matematicas from '../img/matematica.jpg'
import historia from '../img/historia.jpg'
import naturales from '../img/biologia.jpg'
import ingles from '../img/ingles.jpg'
import sociales from '../img/sociales.jpg'
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Nav from './Nav';


export default function Competencia() {
    
    return (
        <div>
            <Nav/>
             <div className="container">
               <p>Seleccione la competencia que desea reforzar</p>


    
      <div className="row pt-3" >
        <div className="col-sm-4">
          <div className="card" >
            <img src={quimica} height="90px  " width="68px" className="card-img-top" alt="quimica"></img>
            <div className="card-body">
              <h5 className="card-title">Razonamiento cuantitativo</h5>
              <button className="btn btn-outline-success btn-sm">Empieza ahora</button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card"  >
            <img src={matematicas} height="90px  " width="68px" className="card-img-top" alt="matematica"></img>
            <div className="card-body">
              <h5 className="card-title">Inglés</h5>
              <button className="btn btn-outline-success btn-sm">Empieza ahora</button>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" >
            <img src={historia} height="90px  " width="68px" className="card-img-top" alt="historia"></img>
            <div className="card-body">
              <h5 className="card-title">Lectura crítica</h5>
              <button className="btn btn-outline-success btn-sm">Empieza ahora</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3" >
        <div className="col-sm-4">
          <div className="card" >
            <img src={sociales} height="90px" width="68px" className="card-img-top" alt="sociales"></img>
            <div className="card-body">
              <h5 className="card-title">Competencias ciudadanas</h5>
              <button className="btn btn-outline-success btn-sm">Empieza ahora</button>
            </div>
          </div>             
        </div>
      </div>
    </div>

</div>
    )
}


