import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Estudiantes() {

    const [estudiantes, setEstudiantes] = useState([])
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [estado, setEstado] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [programa, setPrograma] = useState([])
    const [programaSelect, setProgramaSelect] = useState('')

    useEffect(() => {
        obtenerEstudiantes()
        setPrograma(['Administración de Empresas', 'Contaduría', 'Derecho', 'Diseño', 'Economía', 'Ingeniería'])
        setProgramaSelect('Ingeniería')
    }, [])

    const obtenerEstudiantes = async () => {
        const id = sessionStorage.getItem('idestudiante')
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/estudiante/listarestudiantes',
            {
                headers: { 'autorizacion': token }
            })
        //console.log(respuesta.data)
        setEstudiantes(respuesta.data)
    }

    const buscar = async (e) => {

        if (e.target.value === '') {
            return obtenerEstudiantes()
        }
        const buscar = e.target.value
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/estudiante/buscarestudiante/' + buscar + '/', {
            headers: { 'autorizacion': token }
        })
        setEstudiantes(respuesta.data)
    }

    const guardar = async (e) => {
        e.preventDefault()
        const usuario = {
            nombres,
            apellidos,
            programa: programaSelect,
            correo,
            contrasena,
            estado: 1
        }
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.post('http://localhost:4000/estudiante/crear', usuario,
            {
                headers: { 'autorizacion': token }
            })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location.href = '/estudiantes'
        }, 1500)
    }



    return (
        <div>
            <Nav />

            {/*BARRADEBUSQUEDA*/}

            <nav className='navbar py-4'>
                <div className="container">
                    <div className="col-md-3">
                        <Link to='#' className="btn btn-primary btn-block" data-bs-toggle='modal'
                            data-bs-target='#addEstudiante'><i className='fas fa-plus'></i> Add Estudiante
                        </Link>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="input-group">
                            <input className='form-control mr-sm-2' type='search' placeholder='Buscar...' aria-label='Search' onChange={(e) => buscar(e)} />
                        </div>
                    </div>



                </div>
            </nav>
            <section>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Usuarios</h4>
                                </div>
                                <div className="table-responsive-lg">
                                    <table className="table  table-striped card-text">
                                        <thead className='table-dark'>
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
                                                estudiantes.map((estudiante, i) => (
                                                    <tr key={estudiante._id}>
                                                        <td>{i + 1}</td>
                                                        <td>{estudiante.nombres}</td>
                                                        <td>{estudiante.apellidos}</td>
                                                        <td>{estudiante.programa}</td>
                                                        <td>{estudiante.correo}</td>
                                                        <td>{estudiante.estado}</td>
                                                        <td>
                                                            <Link className='btn btn-danger mr-1' to={'/editarestudiante/' + estudiante._id}>Editar</Link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                class="btn btn-outline-danger"
                                                                data-bs-toggle="button"
                                                                autocomplete="off">
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
            <div className='modal fade' id='addEstudiante'>
                <div className='modal-dialog modal-md'></div>
                <div className='modal-content'>
                    <div className='modal-header bg-primary text-white'>
                        <h5 className='modal-title'>Add Estudiante</h5>
                        <button type="button" className='btn-close' data-bs-dismiss='modal'
                            aria-label="Close">
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={guardar}>
                            <div className="form-group">
                                <label className='form-label'> Nombres </label>
                                <input type='text' className='form-control' required onChange={(e) => setNombres(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'> Apellidos </label>
                                <input type='text' className='form-control' required onChange={(e) => setApellidos(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'>Programa</label>
                                <select className='form-control' required onChange={(e) => setProgramaSelect(e.target.value)} >
                                    {
                                        programa.map(programa1 => (
                                            <option key={programa1}>
                                                {programa1}
                                            </option>
                                        ))

                                    }
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className='form-label'> Correo</label>
                                <input type='email' className='form-control' required onChange={(e) => setCorreo(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='form-label'> Contraseña</label>
                                <input type='text' className='form-control' requiredonChange={(e) => setContrasena(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <button className='btn btn-primary' type='submit'>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>


            </div>
            )
}