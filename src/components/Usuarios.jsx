import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav';

export default function Usuarios() {
    return (
        <div>
            <Nav/>
            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className='fas fa-pencil-alt'></i>Usuarios</h1>
                        </div>
                    </div>                    
                </div>
            </header>
            
        {/*BARRADEBUSQUEDA*/}

        <nav className='navbar py-4'>
            <div className="container">
                <div className="col-md-3">               
                <Link to='#' className="btn btn-primary btn-block" data-bs-toggle='modal'
                      data-bs-target='#addUsuario'><i className='fas fa-plus'></i> Add Usuario
                </Link>
                </div>
                <div className="col-md-6 ml-auto">
                    <div className="input-group">
                        <input className='form-control mr-sm-2' type='search' placeholder='Buscar...' aria-label='Search' />
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
                                <h4>Usuarios</h4>
                            </div>
                            <div className="table-responsive-lg">
                            <table className="table  table-striped card-text"> 
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombres</th>
                                        <th>Apellidos</th>
                                        <th>Identificación</th>
                                        <th>Correo</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                       
                                            <tr >
                                                <td>1</td>
                                                <td>Felipe</td>
                                                <td>AV</td>
                                                <td>11117777</td>
                                                <td>felipe@gmail.com</td>
                                                <td>
                                                    <button className='btn btn-warning mr-1' >Eliminar</button>
                                                    <Link className='btn btn-danger mr-1' to='/'>Editar</Link>

                                                </td>
                                            </tr>

                                        

                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/*VENTANA MODAL*/}
        
        <div className='modal fade' id='addUsuario'>
            <div className='modal-dialog modal-lg'></div>
                    <div className='modal-content'>
                        <div className='modal-header bg-primary text-white'>
                            <h5 className='modal-title'>Add Empleado</h5>
                            <button type="button" className='btn-close' data-bs-dismiss='modal'
                             aria-label="Close">
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <div className="form-group">
                                    <label className='form-label'> Nombres </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Apellidos </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Identificación </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Correo </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Contraseña</label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'>Rol</label>
                                    <select className='form-control' >                                                                                
                                             <option key="1">
                                                Estudiante
                                            </option>
                                            <option key="2">
                                                Profesor
                                            </option>
                                            <option key="3">
                                            Administrador
                                            </option>  
                                 
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