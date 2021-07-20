import React  from 'react'
import  {Link}  from 'react-router-dom'


export default function Nav() {

  
const rol1="administrador"
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
                    {rol1 === "administrador" ? (
                    <ul className="navbar-nav"> 
 
                        
                        
                        <li className="nav-item"> 
                        <Link className="nav-link" to="/usuarios"><i className='fa fa-user-times'></i>Gestionar Usuarios</Link>
                        </li>
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/preguntas"><i className='fa fa-user-times'></i>Gestionar preguntas</Link>
                             </li>
                             <li className="nav-item">
                            <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>  Salir</Link>
                        </li>
                             </ul>
                        ):(<span></span>)

                        }
                {rol1 === "profesor" ? (
                    <ul className="navbar-nav"> 
                        <li className="nav-item">
                                <Link className="nav-link" to="/preguntas"><i className='fa fa-user-times'></i>Gestionar preguntas</Link>
                             </li>
                        <li className="nav-item">
                    <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>  Salir</Link>
                        </li>
                             </ul>
                        ):(<span></span>)

                        }
                 {rol1 === "estudiante" ? (
                    <ul className="navbar-nav"> 
                             <li className="nav-item">
                                <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>Entrenar competencia</Link>
                             </li>                             
                             <li className="nav-item">
                                <Link className="nav-link" to="/resultadostc"><i className='fa fa-user-times'></i>Resultados competencias</Link>
                             </li>
                             <li className="nav-item">
                            <Link className="nav-link" to="/"><i className='fa fa-user-times'></i>  Salir</Link>
                        </li>
                             </ul>
                        ):(<span></span>)

                        } 
                      {rol1 === "" ? (
                        <ul className="navbar-nav">                         
                        </ul>
                        ):(<span></span>)

                        }                                                         
                </div>

      

                
            </div>
        </nav>
    )
}
