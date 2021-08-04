import React from 'react'

export default function Registro() {            
        return (
        <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                       <div className="card">
                          <div className="container text-center fa-3x">
                            <i className='fas fa-user-plus'></i>
                           </div>
        
                            <div className="card-header text-center">
                                <h4> Registro de usuario </h4>
                            </div>
        
                            <div className="card-body">
                                <form>
                                <div className="mb-3">
                                            <label className='form-label'>Nombre</label>
                                            <input type="text" className="form-control" autoFocus required/>
    
                                    </div>

                                    <div className="mb-3">
                                            <label className='form-label'>Correo</label>
                                            <input type="email" className="form-control" required/>
    
                                    </div>
                                    <div className="mb-3">
                                            <label className='form-label'>Contraseña</label>
                                            <input type="password" className="form-control" required/>
    
    
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block"/>
                                </form>
                            </div>
        
                      </div>
                </div>
            </div>
        </div>
    )
}
