import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@progress/kendo-theme-material/dist/all.css';
import Axios from 'axios';

Axios.defaults.baseURL='http://localhost:4000/'


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


