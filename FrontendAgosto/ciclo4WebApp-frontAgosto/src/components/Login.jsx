import React from 'react'
import Nav from './Nav';


export default function Login() {

    return (
            
        <div>
            <Nav/>
            <div className = "container mt-4">
            
                <div className = "row">
                    <div className = "col-md-6 mx-auto">
                        <div className = "card">
                            <div className = "container text-center fa-3x">
                                <i className = 'fas fa-user'></i>
                            </div>
        
                            <div className = "card-header text-center">
                                <h4> Inicio de sesión </h4>
                            </div>
        
                            <div className = "card-body">
                                <form>
                                    <div className = "mb-3">
                                    
                                        <label className = 'form-label'>Correo</label>
                                        <input 
                                            type = "email" 
                                            className = "form-control" 
                                            autoFocus 
                                            required 
                                        />
                                    </div>
                                    <div className = "mb-3">
                                        <label className = 'form-label'>Contraseña</label>
                                        <input type = "password" className = "form-control" required/>
                                    </div>
                                    <input type = "submit" className = "btn btn-primary btn-block"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
