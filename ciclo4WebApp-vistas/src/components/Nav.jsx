import React, { useState } from 'react'
import Swal from 'sweetalert2'
// import { propTypes } from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
import './NavEstilo.css';
import trainpro3 from '../img/Logo_TrainPro_sin_letras.svg';
import axios from 'axios'

// El siguiente import es solo para simular datos pedidos al back al igual que el archivo EstadoUsuario.json



export default function Nav() {
    /*    var Usuario = 
       {
           "tipoUsuario": "Admin",
           "organizacion": "OrganizacionX",
           "nombre": "Nombre",
           "apellidos": "Apellido"
       } */

    // const rol1="Administrador"
    // const rol1="Profesor"
    // const rol1="Estudiante"
    //const rol1="Visitante"


    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [tipo, setTipo] = useState('')

    const login = async (e) => {

        e.preventDefault() //Para que no se recargue la página
        const usuario = { correo, contrasena }

        if (tipo === "usuarios") {
            const respuesta = await axios.post('http://localhost:4000/usuario/login', usuario)

            const mensaje = respuesta.data.mensaje
            if (mensaje !== 'Bienvenido') {
                Swal.fire({
                    icon: 'error',
                    title: mensaje,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                const token = respuesta.data.token
                const nombres = respuesta.data.nombres
                const apellidos = respuesta.data.apellidos
                const rol = respuesta.data.rol
                const idusuario = respuesta.data.id
                sessionStorage.setItem('token', token)
                sessionStorage.setItem('rol', rol)
                sessionStorage.setItem('nombres', nombres)
                sessionStorage.setItem('apellidos', apellidos)
                sessionStorage.setItem('idusuario', idusuario)
                window.location.href = '/usuarios'
                Swal.fire({
                    icon: 'success',
                    title: mensaje,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        else {
        const respuesta = await axios.post('http://localhost:4000/estudiante/login', usuario)
        const mensaje = respuesta.data.mensaje
        if (mensaje !== 'Bienvenido') {
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            const token = respuesta.data.token
            const nombres = respuesta.data.nombres
            const apellidos = respuesta.data.apellidos
            const rol = "Estudiante"
            const programa = respuesta.data.programa
            const idusuario = respuesta.data.id
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('rol', rol)
            sessionStorage.setItem('programa', programa)
            sessionStorage.setItem('nombres', nombres)
            sessionStorage.setItem('apellidos', apellidos)
            sessionStorage.setItem('idusuario', idusuario)
            window.location.href = '/principal'
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }}
    }
    var Usuario =
    {
        "tipoUsuario": sessionStorage.getItem('rol'),
        "nombre": sessionStorage.getItem('nombres'),
        "apellidos": sessionStorage.getItem('apellidos')
    }
    var rol1 = Usuario.tipoUsuario

    var salir = () => {
        sessionStorage.clear()
        window.location.href = '/Landing'
        alert("Ejecutando salir")
    }
    if (Usuario.tipoUsuario === null) {
        var rol1 = "Visitante"
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="NavBarPrincipal">
            <div className="container-fluid">
                {/* Logo (envia a la pagina principal de cada usuario)*/}
                {
                    // Direccion del boton logo si es visitante
                    rol1 === "Visitante" ?
                        (
                            <Link className="navbar-brand" to="/landing">
                                <img
                                    src={trainpro3}
                                    alt=""
                                    className="img-fluid"
                                    height="70px"
                                    width="70px"
                                />
                            </Link>
                        ) :
                        (
                            // Direccion del boton logo si es administrador
                            rol1 === "Administrador" ?
                                (
                                    <Link className="navbar-brand" to="/usuarios">
                                        <img
                                            src={trainpro3}
                                            alt=""
                                            className="img-fluid"
                                            height="70px"
                                            width="70px"
                                        />
                                    </Link>
                                ) :
                                (
                                    // Direccion del boton logo si es profesor
                                    rol1 === "Profesor" ?
                                        (
                                            <Link className="navbar-brand" to="/preguntas">
                                                <img
                                                    src={trainpro3}
                                                    alt=""
                                                    className="img-fluid"
                                                    height="70px"
                                                    width="70px"
                                                />
                                            </Link>
                                        ) :
                                        // Direccion del boton logo si es estudiante U OTRA COSA
                                        (
                                            <Link className="navbar-brand" to="/principal">
                                                <img
                                                    src={trainpro3}
                                                    alt=""
                                                    className="img-fluid"
                                                    height="70px"
                                                    width="70px"
                                                />
                                            </Link>
                                        )
                                )
                        )
                }
                {/* Boton collapse */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Colombianada: El siguiente div no contiene nada pero al ponerlo con ese className ubica el div que sigue en la mitad */}
                <div className="collapse navbar-collapse">
                </div>
                {/* Inicio Opciones Segun Usuario */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        // Dropdown si es visitante
                        rol1 === "Visitante" ?
                            (
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
                            ) :
                            (
                                // Dropdown si es adminitrador                       
                                rol1 === "Administrador" ?
                                    (
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <Link className="nav-link mx-1" to="/usuarios"> Gestionar usuarios</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link mx-1" to="/estudiantes"> Gestionar estudiantes</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link mx-1" to="/preguntas"> Gestionar preguntas</Link>
                                            </li>
                                        </ul>
                                    ) :
                                    
                                    (
                                        // Dropdown si es profesor
                                        rol1 === "Profesor" ?
                                            (
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/preguntas"> Gestionar preguntas</Link>
                                                    </li>
                                                </ul>
                                            ) :
                                            // Dropdown si es estudiante U OTRA COSA
                                            (
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/principal"> Entrenar competencia</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/resultadostc"> Resultados competencias</Link>
                                                    </li>
                                                </ul>
                                            )
                                    )
                            )
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
                            {/* Si es visitante muestra login sino datos de usuario */}
                            {rol1 === "Visitante" ? (
                                <form className="px-4 py-3">
                                    <div className="mb-3">
                                        <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                        {/* <input onChange={(e)=>setCorreo(e.target.value)} type="email" required className="form-control" id="exampleDropdownFormEmail1" name="a1"  placeholder="email@example.com"/> */}
                                        <input type="email" className="form-control" autoFocus required onChange={(e) => setCorreo(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleDropdownFormPassword1" className="form-label">Password</label>
                                        {/* <input onChange={(e)=>setContrasena(e.target.value)}  type="password" required className="form-control" id="exampleDropdownFormPassword1" name="a2" placeholder="Password"/> */}
                                        <input type="password" className="form-control" autoFocus required onChange={(e) => setContrasena(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={(e) => setTipo(e.target.value)} className="form-select" aria-label="Default select example">
                                            <option selected>Seleccione el tipo</option>
                                            <option value="usuarios">Administrador</option>
                                            <option value="usuarios">Profesor</option>
                                            <option value="estudiantes">Estudiante</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                            <label className="form-check-label" for="dropdownCheck">
                                                Recordar nombre de usuario
                                            </label>
                                        </div>
                                    </div>
                                    <button onClick={login} className="btn btn-primary mb-0">Iniciar sesión</button>
                                    {/* FALTA COMPONENTE DE OLVIDAR CONTRASEÑA */}
                                    <Link to="/cuentaOlvidada">
                                        <span className="dropdown-item mt-0"><small>¿Olvidaste la contraseña?</small></span>
                                    </Link>
                                </form>
                            ) :
                                (
                                    <form className="px-4 py-3">
                                        <label for="exampleDropdownFormTipoDeUsuario" className="form-label">{Usuario.nombre + ' ' + Usuario.apellidos}</label>
                                        <label for="exampleDropdownFormTipoDeUsuario" className="form-label">{Usuario.tipoUsuario}</label>

                                        {/* FALTA LOGICA PARA QUE AL PRESIONAR CERRAR SESION CAMBIE DEL USUARIO ACTUAL A "sinusuario" */}
                                        <div className="dropdown-divider"></div>
                                        <button type="button" onClick={() => salir()} className="dropdown-item"> Cerrar sesión</button>
                                    </form>
                                )
                            }
                        </div>
                        {/* ------- */}
                    </div>
                </form>
            </div>
        </nav>
    )
}
