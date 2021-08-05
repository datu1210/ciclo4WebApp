import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [estado, setEstado] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [rol, setRoles] = useState([])
    const [rolSelect, setRolSelect] = useState('')


    useEffect(() => {
        obtenerUsuarios()
        setRoles(['Administrador', 'Profesor'])
        setRolSelect('Administrador')
    }, [])

    const obtenerUsuarios = async () => {
        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/usuario/listar',
            {
                headers: {'autorizacion': token}
            })
        //console.log(respuesta.data)
        setUsuarios(respuesta.data)
    }

    const guardar = async (e) => {
        e.preventDefault()
        const usuario = {
            nombres,
            apellidos,
            rol: rolSelect,
            correo,
            contrasena,
            estado: 1
        }
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('http://localhost:4000/usuario/crear', usuario,
            {
                headers: {'autorizacion': token}
            })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = '/usuarios'
        }, 1500)
    }

    const buscar = async (e) => {

        if (e.target.value === '') {
            return obtenerUsuarios()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/usuario/buscarusuario/' + buscar + '/', {
            headers: {'autorizacion': token}
         })  
        setUsuarios(respuesta.data)
    }
    

    return (
        <div>
            <Nav/>

            {/*BARRADEBUSQUEDA*/}

            <nav className = 'navbar py-4'>
                <div className = "container">
                    <div className = "col-md-3">
                        <Link 
                            to = '#' 
                            className = "btn btn-primary btn-block" 
                            data-bs-toggle = 'modal'
                            data-bs-target = '#addUsuario'
                        >
                            <i className = 'fas fa-plus'></i> Add Usuario
                        </Link>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className = "input-group">
                            <input 
                                className = 'form-control mr-sm-2' 
                                type = 'search' 
                                placeholder = 'Buscar...' 
                                aria-label = 'Search' 
                                onChange = {(e) => buscar(e)} 
                            />
                        </div>
                    </div>

                </div>
            </nav>

            {/*MOSTRAR EMPLEADOS*/}
            <section>
                <div className = "container">
                    <div className = "row">

                        <div className = "col-md-12">
                            <div className = "card">
                                <div className = "card-header">
                                    <h4>Usuarios</h4>
                                </div>
                                <div className = "table-responsive-lg">
                                    <table className = "table  table-striped card-text">
                                        <thead className = 'table-dark'>
                                            <tr>
                                                <th>#</th>
                                                <th>Nombres</th>
                                                <th>Apellidos</th>
                                                <th>Rol</th>
                                                <th>Correo</th>
                                                <th>Estado</th>
                                                <th>Editar</th>
                                                <th>Desactivar</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                usuarios.map((usuario, i) => (
                                                    <tr key = {usuario._id}>
                                                        <td>{i + 1}</td>
                                                        <td>{usuario.nombres}</td>
                                                        <td>{usuario.apellidos}</td>
                                                        <td>{usuario.rol}</td>
                                                        <td>{usuario.correo}</td>
                                                        <td>{usuario.estado}</td>
                                                        <td>
                                                            <Link className = 'btn btn-danger mr-1' to = {'/editarusuario/' + usuario._id}>Editar</Link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                type = "button"
                                                                class = "btn btn-outline-danger"
                                                                data-bs-toggle = "button"
                                                                autocomplete = "off"
                                                            >
                                                                Desactivado
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*VENTANA MODAL*/}

            <div className = 'modal fade' id = 'addUsuario'>
                <div className = 'modal-dialog modal-md'></div>
                <div className = 'modal-content'>
                    <div className = 'modal-header bg-primary text-white'>
                        <h5 className = 'modal-title'>Añadir Usuario</h5>
                        <button 
                            type = "button" 
                            className = 'btn-close' 
                            data-bs-dismiss = 'modal'
                            aria-label = "Close">
                        </button>
                    </div>
                    <div className = 'modal-body'>
                        <form onSubmit = {guardar}>
                            <div className = "form-group">
                                <label className = 'form-label'> Nombres </label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setNombres(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Apellidos </label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setApellidos(e.target.value)}
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'>Rol</label>
                                <select className = 'form-control' required onChange = {(e) => setRolSelect(e.target.value)} >
                                    {
                                        rol.map(rol1 => (
                                            <option key = {rol1}>
                                                {rol1}
                                            </option>
                                        ))

                                    }
                                </select>
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Correo</label>
                                <input 
                                    type = 'email' 
                                    className = 'form-control' 
                                    required 
                                    onChange = {(e) => setCorreo(e.target.value)} 
                                />
                            </div>
                            <div className = "mb-3">
                                <label className = 'form-label'> Contraseña</label>
                                <input 
                                    type = 'text' 
                                    className = 'form-control' 
                                    required
                                    onChange = {(e) => setContrasena(e.target.value)} 
                                />
                            </div>
                            <div className = "mb-3">
                                <button className = 'btn btn-primary' type = 'submit'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    )
}