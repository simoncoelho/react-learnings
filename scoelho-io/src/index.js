import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './logo.svg';


const page = (
  <div>

  </div>
)

function Page(){
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

function Header(){
  return (
   <header>
      <img src={logo} width={40}/>
   </header>
  )
}

function Content(){
  return (
    <div>
      <h1>Hi, I'm Simon</h1>
      <p>
        I'm a software developer and this is my website.
      </p>
    </div>
  )
}

function Footer(){
  return (
    <footer>
      <small>My Footer Goes Here.</small>
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< Page />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
