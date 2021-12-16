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
        <Nav></Nav>
        <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;