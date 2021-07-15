import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Nav from './components/Nav';
import Login from './components/Login';
import Registro from './components/Registro';
import Index from './components/Index';
import Actualizar from './components/Actualizar';


const estaAutenticado=()=>{
	const token=sessionStorage.getItem('token')
	if(token){
		return true
	
         } else{
		return false
		}

}
const MiRuta=(props)=>{
  //Sino está autenticado lo regresa al login
	return estaAutenticado()? <Route {...props}/>: <Redirect to='/'/>
}

const PublicRoute=(props)=>{
  //Para evitar que un usuario cuando esté logueado, no regrese a la página de login
	return estaAutenticado()? <Redirect to='/index'/> : <Route {...props}/>
}

function App() {
  return (
    <Router>
      <Nav/>
      <PublicRoute path='/' exact component={Login}/>
      <Route path='/registrar' exact component={Registro}/>
      <MiRuta path='/index' exact component={Index}/>
      <MiRuta path='/editar/:id' exact component={Actualizar}/>
    </Router>
  );
}

export default App;
