import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'



import Registro from './components/Registro';
import Usuarios from './components/Usuarios';
import Login from './components/Login';
import Landing from './components/Landing';
import Preguntas from './components/Preguntas';
import Resultadostc from './components/Resultadostc';
import Competencia from './components/Competencia';
import Principal from './components/Principal';
import Pregunta from './components/Pregunta';
import EditarUsuario from './components/EditarUsuario';
import Estudiantes from './components/Estudiantes';
import EditarEstudiante from './components/EditarEstudiante';
import EditarPregunta from './components/EditarPregunta';
import Responderpreguntas from './components/Responderpreguntas';


const estaAutenticado=()=>{
	const token = sessionStorage.getItem('token')
	if(token){
		return true
  } else{
		return false
	}
}

const MiRoute = (props) => {
  //Sino está autenticado lo regresa al login
  const ruta = estaAutenticado()? <Route {...props}/>: <Redirect to = '/landing'/>
  // console.log(props)
	return ruta
}

// const PublicRoute = (props) => {
//   //Para evitar que un usuario cuando esté logueado, no regrese a la página de login
//   const ruta = estaAutenticado()? <Redirect to = '/landing'/> : <Route {...props}/>
// 	return ruta
// }


function App() {
  return (
    <Router>     


          <Route path = '/landing' exact component = {Landing} />       
          <MiRoute  path = '/login' exact component = {Login} />
          <MiRoute  path = '/registrar' exact component = {Registro} />
          <MiRoute  path = '/usuarios' exact component = {Usuarios} />
          <MiRoute  path = '/preguntas' exact component = {Preguntas} />
          <MiRoute  path = '/resultadostc' exact component = {Resultadostc} />
          <MiRoute  path = '/competencia' exact component = {Competencia} />
          <MiRoute  path = '/principal' exact component = {Principal} />
          <MiRoute  path = '/pregunta' exact component = {Pregunta} />
          <MiRoute  path = '/editarusuario/:id' exact component = {EditarUsuario} />
          <MiRoute  path = '/estudiantes' exact component = {Estudiantes} />
          <MiRoute  path = '/editarestudiante/:id' exact component = {EditarEstudiante} />
          <MiRoute  path = '/editarpregunta/:id' exact component = {EditarPregunta} />
          <MiRoute  path = '/responderpreguntas/:comp' exact component = {Responderpreguntas} />
        
          
    </Router>
  );
}

export default App;