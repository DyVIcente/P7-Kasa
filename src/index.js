import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './pages/Home'
import reportWebVitals from './reportWebVitals'
import Survey from './pages/Survey'
import Home from './pages/Home'
import Header from './components/index'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
