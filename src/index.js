import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import SignUp from './Sign Up/SignUp';
import Home from './HomePage/Home';
import Mainframe from './Mainframe/Mainframe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Mainframe />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();