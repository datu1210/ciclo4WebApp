import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';

//Esta es la URL base que van a utilizar todas las rutas de los componentes
Axios.defaults.baseURL='http://localhost:4000'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


