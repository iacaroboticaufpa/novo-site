import React from 'react';
import './App.css';
import { Routes, Route, HashRouter  } from 'react-router-dom';

import {Home} from './pages/home/home';
import {Projects} from './pages/projetos/projetos';
import {Sobre} from './pages/sobre/sobre';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<Sobre />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
