import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Card from './components/Card';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (

    <div>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Card />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;