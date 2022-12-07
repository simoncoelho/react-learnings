import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';


const myNav = 
    <nav>
        <h1>scoelho.io</h1>
        <ul>
            <li>.jpeg</li>
            <li>.toe</li>
            <li>.git</li>
            <li>.me</li>
        </ul>
    </nav>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {myNav}
    <img src={logo} title='what happened to the photo?' height={40}></img>
    <App />
  </div>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
