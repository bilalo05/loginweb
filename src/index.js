import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
// import Login from './components/pages/login';
import reportWebVitals from './reportWebVitals';
// import FormContainer from './components/parts/formContainer';
// import Register from './components/pages/register';
// import Login from './components/pages/login';
import Authentication from './components/pages/authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Register /> */}
    {/* <Login/> */}
    <Authentication/>
   
  </React.StrictMode>
  // <h1>Hello, world!</h1>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
