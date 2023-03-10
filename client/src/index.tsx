import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
