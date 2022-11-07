import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About/about'
import Home from './components/Banniere/banniere'
import Header from './components/Header/header'
import Error from './pages/Error/error'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="survey" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
