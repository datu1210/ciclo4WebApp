import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';

export default function EditarEstudiante(props) {

    const [estudiantes, setEstudiantes] = useState([])
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [estado, setEstado] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [programa, setPrograma] = useState([])
    const [programaSelect, setProgramaSelect] = useState('')

    useEffect(() => {
        obtenerEstudiante()
        setPrograma(['Administración de Empresas', 'Contaduría', 'Derecho', 'Diseño', 'Economía', 'Ingeniería'])
        setProgramaSelect('Ingeniería')
    }, [])

    const obtenerEstudiante = async () => {
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('http://localhost:4000/estudiante/listarid/' + id, {
            headers: { 'autorizacion': token }
        })
        setNombres(respuesta.data.nombres)
        setApellidos(respuesta.data.apellidos)
        setCorreo(respuesta.data.correo)
        setEstado(respuesta.data.estado)
        setContrasena(respuesta.data.contrasena)
        setProgramaSelect(respuesta.data.programa)
    }

    const actualizar = async (e) => {
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const estudiante = {
            nombres,
            apellidos,
            programa: programaSelect,
            correo,
            estado,
            contrasena
        }
        const respuesta = await Axios.put('http://localhost:4000/estudiante/actualizar/' + id, estudiante, {
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
                <div className='container p-3 mt-4'>
                    <form onSubmit={actualizar}>
                        <div className="form-group">
                            <label className='form-label'> Nombres </label>
                            <input type='text' className='form-control' value={nombres} required onChange={(e) => setNombres(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'> Apellidos </label>
                            <input type='text' className='form-control' value={apellidos} required onChange={(e) => setApellidos(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>Programa</label>
                            <select className='form-control' value={programa} required onChange={(e) => setProgramaSelect(e.target.value)} >
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
                            <input type='email' className='form-control' value={correo} required onChange={(e) => setCorreo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'> Contraseña</label>
                            <input type='text' className='form-control' required onChange={(e) => setContrasena(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'> estado</label>
                            <input type='number' className='form-control' value={estado} required onChange={(e) => setEstado(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <button className='btn btn-primary' type='submit'>Guardar</button>
                        </div>
                    </form>
                </div>
    </div>
    )
}
