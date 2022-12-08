import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

function Page(){
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< Page />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
