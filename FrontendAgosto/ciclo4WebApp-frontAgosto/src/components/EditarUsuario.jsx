import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Nav from './Nav';



export default function EditarUsuario(props) {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [correo, setCorreo] = useState('')
    const [estado, setEstado] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [rol, setRoles] = useState([])
    const [rolSelect, setRolSelect] = useState('')

    useEffect(() => {
        obtenerUsuario()
        setRoles(['Administrador', 'Profesor'])
        setRolSelect('Administrador')
    }, [])

    const obtenerUsuario = async () => {
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('usuario/listarid/' + id, {
            headers: {'autorizacion': token}
        })
        setNombres(respuesta.data.nombres)
        setApellidos(respuesta.data.apellidos)
        setCorreo(respuesta.data.correo)
        setEstado(respuesta.data.estado)
        setContrasena(respuesta.data.contrasena)
        setRolSelect(respuesta.data.rol)
    }

    const actualizar = async (e) => {
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const usuario = {
            nombres,
            apellidos,
            rol: rolSelect,
            correo,
            estado,
            contrasena
        }
        const respuesta = await Axios.put('usuario/actualizar/' + id, usuario, {
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

    return (
        <div>
            <Nav />
            <div className = 'container p-3 mt-4'>
                <form onSubmit = {actualizar}>
                    <div className = "form-group">
                        <label className = 'form-label'> Nombres </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            value = {nombres} 
                            required 
                            onChange = {(e) => setNombres(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'> Apellidos </label>
                        <input 
                            type = 'text' 
                            className = 'form-control' 
                            value = {apellidos} 
                            required 
                            onChange = {(e) => setApellidos(e.target.value)}
                        />
                    </div>
                    <div className = "mb-3">
                        <label className = 'form-label'>Rol</label>
                        <select 
                            className = 'form-control' 
                            value = {rol} 
                            required 
                            onChange = {(e) => setRolSelect(e.target.value)} 
                        >
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
                            value = {correo} 
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
                        <label className = 'form-label'> estado</label>
                        <input 
                            type = 'number' 
                            className = 'form-control' 
                            value = {estado} 
                            required 
                            onChange = {(e) => setEstado(e.target.value)} 
                        />
                    </div>
                    <div className = "mb-3">
                        <button className = 'btn btn-primary' type = 'submit'>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
