import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About/about'
import Home from '../src/pages/Home/home'
import Header from './components/Header/header'
import Error from './pages/Error/error'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './pages/Logement/logement'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="logement" element={<Logement />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
