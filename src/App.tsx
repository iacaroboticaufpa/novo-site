import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './pages/home/home';
import {Projects} from './pages/projetos/projetos';
import {Sobre} from './pages/sobre/sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
