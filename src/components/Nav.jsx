import React  from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'


export default function Nav() {

  
const rol1="profesor"
  {/*"profesor"
"estudiante"*/}

    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
            <div className="container">
                <Link className="navbar-brand" to="/landing">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav"> 
 
                        {rol1 === "administrador" ? (<li className="nav-item"> 
                        <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>Gestionar Usuarios</Link>
                        </li>)
                        :(
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>Gestionar preguntas</Link>
                             </li> )
       
                        
                        }
                        {rol1 === "profesor" && ( <li className="nav-item"> <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>profesor</Link></li> 
                        
                        )}
                        {rol1 === "estudiante" && ( <li className="nav-item"> <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>Estudiante</Link></li> )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>  Salir</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/usuarios"><i className='fa fa-user-times'></i>  Usuarios</Link>
                        </li>             
                    </ul>
                </div>

      

                
            </div>
        </nav>
    )
}
