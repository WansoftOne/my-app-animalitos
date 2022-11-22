import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MiComponente } from './componentes/MiComponente'
import reportWebVitals from './reportWebVitals';
import { Timer } from './componentes/Timer';
import { Galeria } from './componentes/Galeria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Galeria />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
