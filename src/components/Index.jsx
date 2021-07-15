import Axios from 'axios'
import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'



export default function Index() {

    const [empleados, setEmpleados]=useState([])
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [puesto, setPuesto] = useState('')
    const [identificacion, setIdentificacion] = useState('')
    const [tcontratos, setTcontratos] = useState([])
    const [contratoSelect, setContratoSelect] = useState('')

useEffect(()=>{
	obtenerEmpleados()
    setTcontratos(['Fijo','Temporal','Aprendiz'])
    setContratoSelect('Fijo')
},[])

const obtenerEmpleados=async()=>{
	const id=sessionStorage.getItem('idusuario')
	const token=sessionStorage.getItem('token')
	const respuesta=await Axios.get('/empleado/listarempleadosjefe/'+id,
	   {
		headers:{'autorizacion':token}
        })
	//console.log(respuesta.data)
    setEmpleados(respuesta.data)
}
const guardar=async(e)=>{
    e.preventDefault()
    const usuario={
        nombres,
        apellidos,
        puesto,
        identificacion,
        tcontrato:contratoSelect,
        jefe:sessionStorage.getItem('idusuario')
    }
    const token=sessionStorage.getItem('token')
    const respuesta=await Axios.post('/empleado/crear',usuario,
    {
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

const eliminar=async(id)=>{
	const token=sessionStorage.getItem('token')
	const respuesta = await Axios.delete('/empleado/borrarempleado/'+id,
    {
		headers:{'autorizacion':token}
    })
    const mensaje=respuesta.data.mensaje
    Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })
      obtenerEmpleados()
}

const buscar=async(e)=>{
   
    if(e.target.value===''){
       return obtenerEmpleados()
    }
	const buscar=e.target.value
	const token=sessionStorage.getItem('token')
	const respuesta= await Axios.get('/empleado/buscarempleado/'+buscar +'/'+sessionStorage.getItem('idusuario'),
    {
        headers:{'autorizacion':token}
     })  
    setEmpleados(respuesta.data)
    
}
    return (
        <div>
            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className='fas fa-pencil-alt'></i>Empleados</h1>
                        </div>
                    </div>                    
                </div>            
            </header>
            
        {/*BARRADEBUSQUEDA*/}

        <nav className='navbar py-4'>
            <div className="container">
                <div className="col-md-3">               
                <Link to='#' className="btn btn-primary btn-block" data-bs-toggle='modal'
                      data-bs-target='#addEmpleado'><i className='fas fa-plus'></i> Add Empleado
                </Link>
                </div>
                <div className="col-md-6 ml-auto">
                    <div className="input-group">
                        <input className='form-control mr-sm-2' type='search' placeholder='Buscar...' aria-label='Search' onChange={(e)=>buscar(e)}/>
                    </div>
                </div>
               
              

            </div>   
        </nav>

        {/*MOSTRAR EMPLEADOS*/}
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Empleados de {sessionStorage.getItem('nombre')}</h4>
                            </div>
                            <div className="table-responsive-lg">
                            <table className="table  table-striped card-text"> 
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Identificación</th>
                                        <th>Tipo contrato</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        empleados.map((empleado,i)=>(
                                            <tr key={empleado._id}>
                                                <td>{i+1}</td>
                                                <td>{empleado.nombres}</td>
                                                <td>{empleado.apellidos}</td>
                                                <td>{empleado.identificacion}</td>
                                                <td>{empleado.tcontrato}</td>
                                                <td>
                                                    <button className='btn btn-warning mr-1' onClick={()=>eliminar(empleado._id)}>Eliminar</button>
                                                    <Link className='btn btn-danger mr-1' to={'/editar/'+empleado._id}>Editar</Link>

                                                </td>
                                            </tr>

                                        ))

                                    }
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/*VENTANA MODAL*/}
        
        <div className='modal fade' id='addEmpleado'>
            <div className='modal-dialog modal-lg'></div>
                    <div className='modal-content'>
                        <div className='modal-header bg-primary text-white'>
                            <h5 className='modal-title'>Add Empleado</h5>
                            <button type="button" className='btn-close' data-bs-dismiss='modal'
                             aria-label="Close">
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={guardar}>
                                <div className="form-group">
                                    <label className='form-label'> Nombres </label>
                                    <input  type='text' className='form-control' required 
                                    onChange={(e)=>setNombres(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Apellidos </label>
                                    <input  type='text' className='form-control' required 
                                    onChange={(e)=>setApellidos(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Identificación </label>
                                    <input  type='text' className='form-control' required 
                                    onChange={(e)=>setIdentificacion(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Cargo </label>
                                    <input  type='text' className='form-control' required 
                                    onChange={(e)=>setPuesto(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Tipo de contrato </label>
                                    <select className='form-control' onChange={(e)=>
                                            setContratoSelect(e.target.value)}>
                                    {
                                             tcontratos.map(tcontrato=>(
                                             <option key={tcontrato}>
                                                {tcontrato}
                                            </option>
                                            ))

                                    }
                                </select></div>  
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
