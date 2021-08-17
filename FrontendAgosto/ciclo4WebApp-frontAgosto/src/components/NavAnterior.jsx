import React  from 'react'
// import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
import './NavEstilo.css';
import trainpro3 from '../img/Logo_TrainPro_sin_letras.svg';


export default function Nav() {

    // const rol1="administrador"
    // const rol1="profesor"
    // const rol1="estudiante"
    const rol1="sinusuario"

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="NavBarPrincipal">
            <div className="container-fluid">
{/* Logo (envia a la pagina principal de cada usuario)*/}
                {rol1 === "sinusuario" ? (
                    <Link className="navbar-brand" to="/landing">
                        <img
                            src={trainpro3}
                            alt=""
                            className="img-fluid"
                            height="70px"
                            width="70px"
                        />
                    </Link>
                ):(<span></span>)
                }
                {rol1 === "administrador" ? (
                    <Link className="navbar-brand" to="/usuarios">
                        <img
                            src={trainpro3}
                            alt=""
                            className="img-fluid"
                            height="70px"
                            width="70px"
                        />
                    </Link>
                ):(<span></span>)
                }
                {rol1 === "profesor" ? (
                    <Link className="navbar-brand" to="/preguntas">
                        <img
                            src={trainpro3}
                            alt=""
                            className="img-fluid"
                            height="70px"
                            width="70px"
                        />
                    </Link>
                ):(<span></span>)
                }
                {rol1 === "estudiante" ? (
                    <Link className="navbar-brand" to="/principal">
                        <img
                            src={trainpro3}
                            alt=""
                            className="img-fluid"
                            height="70px"
                            width="70px"
                        />
                    </Link>
                ):(<span></span>)
                }
{/* Boton collapse */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
{/* Colombianada: El siguiente div no contiene nada pero al ponerlo con ese className ubica el div que sigue en la mitad incluso cuando colapsa */}
                <div className="collapse navbar-collapse">
                </div>
{/* Inicio Opciones Segun Usuario */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {rol1 === "sinusuario" ? (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#inicio active">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#intro" className="nav-link">Empresa</a>
                            </li>
                            <li className="nav-item">
                                <a href="#servicios" className="nav-link">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonios" className="nav-link">Testimonios</a>
                            </li>
                            <li className="nav-item">
                                <a href="#footer" className="nav-link">Contacto</a>
                            </li>
                        </ul>
                        ):(<span></span>)
                    }
                    {rol1 === "administrador" ? (
                        // <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/usuarios"> Gestionar usuarios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-1" to="/preguntas"> Gestionar preguntas</Link>
                                </li>
                            </ul>
                        // </div>
                        ):(<span></span>)
                    }
                    {rol1 === "profesor" ? (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/preguntas"> Gestionar preguntas</Link>
                            </li>
                        </ul>
                        ):(<span></span>)
                    }
                    {rol1 === "estudiante" ? (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/principal"> Entrenar competencia</Link>
                            </li>                             
                            <li className="nav-item">
                                <Link className="nav-link" to="/resultadostc"> Resultados competencias</Link>
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
{/* Fin Opciones Segun Usuario */}

{/* Boton login dropdown */}
                <form className="d-flex">
                    <div className="dropdown mx-3">
{/* ------- */}                        
                        <button 
                        className="btn btn-primary dropdown-toggle" 
                        id="navbarDropdown" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                        >
                            Login
                        </button>
{/* ------- */}
                        <div className="dropdown-menu dropdown-menu-end">
                            <form className="px-4 py-3">
                                <div className="mb-3">
                                    <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                                        <label className="form-check-label" for="dropdownCheck">
                                        Recordar nombre de usuario
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mb-0">Iniciar sesión</button>
    {/* FALTA COMPONENTE DE OLVIDAR CONTRASEÑA */}
                                <Link to="/cuentaOlvidada">
                                    <span className="dropdown-item mt-0"><small>¿Olvidaste la contraseña?</small></span>
                                </Link>
                            </form>
    {/* FALTA LOGICA PARA QUE AL PRESIONAR CERRAR SESION CAMBIE DEL USUARIO ACTUAL A "sinusuario" */}
                            <div className="dropdown-divider"></div>
                            <Link to="/landing">
                                <span className="dropdown-item"> Cerrar sesión</span>
                            </Link>                            
                        </div>
{/* ------- */}
                    </div>
                </form>

            </div>
        </nav>
    )
}
