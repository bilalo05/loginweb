import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./styles/style.css";
import "./scripts/script.js";
import reportWebVitals from './reportWebVitals';
import Register from './components/pages/authentication/register';
import Login from './components/pages/authentication/login';
import NoPage from './components/pages/notFound';
import ForgetPass from './components/pages/forgetpassword/forgetPass';
import EmailConfirm from './components/pages/forgetpassword/emailConfirm';
// import App from './App';
// import Login from './components/pages/login';
// import FormContainer from './components/parts/formContainer';
// import Authentication from './components/pages/authentication';
import Home from './components/pages/home';
import ResetPass from './components/pages/forgetpassword/resetPass';
import Success from './components/pages/forgetpassword/success';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <Register /> */}
//     {/* <Login/> */}
//     <Authentication/>
   
//   </React.StrictMode>
//   // <h1>Hello, world!</h1>
// );

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/forget" element={<ForgetPass />} />
      <Route path="/confirm" element={<EmailConfirm />} />
      <Route path="/reset" element={<ResetPass />} />
      <Route path="/success" element={<Success />} />
      
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
