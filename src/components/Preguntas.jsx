import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav';

export default function Preguntas() {
    return (
        <div>
            <Nav/>
            <header className='py-2 bg-primary text-white'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className='fas fa-pencil-alt'></i>Preguntas</h1>
                        </div>
                    </div>                    
                </div>
            </header>
            
        {/*BARRADEBUSQUEDA*/}

        <nav className='navbar py-4'>
            <div className="container">
                <div className="col-md-3">               
                <Link to='#' className="btn btn-primary btn-block" data-bs-toggle='modal'
                      data-bs-target='#addPregunta'><i className='fas fa-plus'></i> Add Pregunta
                </Link>
                </div>
                <div className="col-md-6 ml-auto">
                    <div className="input-group">
                        <input className='form-control mr-sm-2' type='search' placeholder='Buscar...' aria-label='Search' />
                    </div>
                </div>
            </div>   
        </nav>

        {/*MOSTRAR PREGUNTAS*/}
        <section>
            <div className="container">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Preguntas</h4>
                            </div>
                            <div className="table-responsive-lg">
                            <table className="table  table-striped card-text"> 
                                <thead className='table-dark'>
                                    <tr>
                                        <th>#</th>
                                        <th>Encabezado</th>
                                        <th>Puntaje</th>
                                        <th>Categoría competencia</th>
                                        <th>Editar</th>
                                        <th>Desactivar</th>                                        
                                    </tr>
                                </thead>
                                <tbody>                                                                           
                                            <tr >
                                                <td>1</td>
                                                <td>Si tenemos un caracol que avanza n metros por día....</td>
                                                <td>10</td>
                                                <td>Razonamiento cuantitativo</td>                                                
                                                <td>
                                                                                                                                                                            
                                                    <Link className='btn btn-danger mr-1' to='/'>Editar</Link>

                                                </td>
                                                <td>
                                                      <label className="switch">
                                                        <input type="checkbox" />
                                                        <span class="slider round"></span>
                                                        </label>
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
        
        <div className='modal fade' id='addPregunta'>
            <div className='modal-dialog modal-lg'></div>
                    <div className='modal-content'>
                        <div className='modal-header bg-primary text-white'>
                            <h5 className='modal-title'>Add Pregunta</h5>
                            <button type="button" className='btn-close' data-bs-dismiss='modal'
                             aria-label="Close">
                            </button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                {/*<div className="form-group">
                                    <label className='form-label'> Encabezado </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>*/}
                                <div className="mb-3">
                                    <label> Encabezado </label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className='form-label'> Opción A. </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Opción B. </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Opción C. </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'> Opción D. </label>
                                    <input  type='text' className='form-control' required 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className='form-label'>Competencia </label>
                                    <select className='form-control' >                                                                                
                                             <option key="1">
                                                Razonamiento cuantitativo
                                            </option>
                                            <option key="2">
                                                Inglés
                                            </option>
                                            <option key="3">
                                                Lectura crítica
                                            </option>  
                                            <option key="4">
                                                Competencias ciudadanas
                                            </option>                                  
                                </select></div>  
                                
                                <div className="mb-3">
                                    <label className='form-label'>Opción correcta </label>
                                    <select className='form-control' >                                                                                
                                             <option key="1">
                                                A
                                            </option>
                                            <option key="2">
                                                B
                                            </option>
                                            <option key="3">
                                                C
                                            </option>  
                                            <option key="4">
                                                D
                                            </option>                                  
                                </select></div>  
                                
                                <div className="mb-3">
                                    <label className='form-label'>Puntuación </label>
                                    <input  type='text' className='form-control' required 
                                    />
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