import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Actualizar(props) {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [puesto, setPuesto] = useState('')
    const [tcontratos, setTcontratos] = useState([])
    const [contratoselect, setContratoselect] = useState('')

    useEffect(()=>{
        obtenerEmpleado()
        setTcontratos(['Fijo', 'Temporal', 'Practicante'])
        // eslint-disable-next-line
    },[]) 
    
    const obtenerEmpleado = async () => {
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const respuesta=await Axios.get('/empleado/listar/'+id,{
            headers:{'autorizacion':token}
        })
        setNombres(respuesta.data.nombres)
        setApellidos(respuesta.data.apellidos)
        setIdentificacion(respuesta.data.identificacion)
        setPuesto(respuesta.data.puesto)
        setContratoselect(respuesta.data.tcontrato)
    }

    const actualizar=async(e)=>{
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const empleado={
            nombres,
            apellidos,
            identificacion,
            puesto,
            tcontrato:contratoselect
        }
        const respuesta=await Axios.put('/empleado/actualizar/'+id,empleado,{
            headers:{'autorizacion':token}
        })
        const mensaje=respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(()=>{
            window.location.href='/index'
        },1500)
    }

    return (
        <div className="container col-md-6 mt-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Editar</h3>
                        <div className="card-body">
                            <form onSubmit={actualizar}>
                                <div className="mb-3">
                                    <label className="form-label">Nombres</label>
                                    <input type="text" className="form-control" required onChange={e => setNombres(e.target.value)} value={nombres}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" required onChange={e => setApellidos(e.target.value)} value={apellidos}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" >Puesto</label>
                                    <input type="text" className="form-control" required onChange={e => setPuesto(e.target.value)} value={puesto} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Identificación</label>
                                    <input type="text" className="form-control" required onChange={e => setIdentificacion(e.target.value)} value={identificacion}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de contrato</label>
                                    <select className="form-control" onChange={(e) => setContratoselect(e.target.value)} value={contratoselect}>
                                        {
                                            tcontratos.map(tcontrato =>
                                                <option key={tcontrato}>
                                                    {tcontrato}
                                                </option>)
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-warning" type="submit">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

