import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'
import { Home, About, Error, Logement } from './pages/index'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
