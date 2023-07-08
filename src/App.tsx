import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './pages/home/home';
import {Projects} from './pages/projetos/projetos';
import {Sobre} from './pages/sobre/sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
