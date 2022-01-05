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
            <Route path="react-portfolio/" element={<Home />} />
            <Route path="react-portfolio/about" element={<About />} />
            <Route path="react-portfolio/contact" element={<Contact />} />
            <Route path="react-portfolio/work" element={<Gallery />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;