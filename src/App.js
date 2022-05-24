import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import CoinDetail from './pages/CoinDetail'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='coin/:id' element={<CoinDetail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App