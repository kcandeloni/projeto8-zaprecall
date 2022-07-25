import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/CSS/style.css'
import Iniciar from './inicio/Iniciar.js';
import Game from './game/Game.js';
import React from 'react';
import GerarDeck from './deck/Deck.js';

export default function App() {
  const [a, b, c, d] = GerarDeck();
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Iniciar />}/>
          <Route path="/game" element={<Game>{[a,b,c,d]}</Game>}/>
        </Routes>
      </BrowserRouter>
    );
  }