import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <div style={{display: 'flex', textAlign: "center", justifyContent: "center"}}>
      <h1>Reddit Excercise</h1>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);