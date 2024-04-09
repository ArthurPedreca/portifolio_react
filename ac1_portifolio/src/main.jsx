import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Sobre from './components/Sobre.jsx'
import Quem from './components/Quem.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Sobre />
    <Quem/>
    <Contato/>
    <Footer/>
  </React.StrictMode>,
)
