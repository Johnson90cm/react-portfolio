import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
        <div>
        <Router>
        <Nav></Nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;