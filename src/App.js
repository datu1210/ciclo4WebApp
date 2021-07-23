import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Registro from './components/Registro';
import Usuarios from './components/Usuarios';
import Login from './components/Login';
import Landing from './components/Landing';
import Preguntas from './components/Preguntas';
import Resultadostc from './components/Resultadostc';
import Competencia from './components/Competencia';
import Principal from './components/Principal';
import Pregunta from './components/Pregunta';




function App() {
  return (
    <Router>     
          
          <Route path='/landing' exact component={Landing} />
          {/*<Route path='/navegacion' exact component={Nav}/>*/}
          {/*<Route path='/' exact component={Formulario}/>*/}
          
          <Route  path='/login' exact component={Login} />
          <Route  path='/registrar' exact component={Registro} />
          <Route  path='/usuarios' exact component={Usuarios} />
          <Route  path='/preguntas' exact component={Preguntas} />
          <Route  path='/resultadostc' exact component={Resultadostc} />
          <Route  path='/competencia' exact component={Competencia} />
          <Route  path='/principal' exact component={Principal} />
          <Route  path='/pregunta' exact component={Pregunta} />
          
    </Router>
  );
}

export default App;




