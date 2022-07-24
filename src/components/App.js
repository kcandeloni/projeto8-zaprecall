import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../assets/CSS/style.css'
import Iniciar from './inicio/Iniciar.js';
import Game from './game/Game.js';


function gerarDeck() {
  return (
  [{Q: 'Usamos props para __' , R: 'passar diferentes informações para componentes', flashcard: ''}, 
  {Q: 'Usamos estado (state) para __' , R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', flashcard: ''},
  ]);}

const [a, b] = gerarDeck();

console.log(b);

export default function App() {
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Iniciar />}/>
          <Route path="/game" element={<Game>{[b]}</Game>}/>
        </Routes>
      </BrowserRouter>
    );
  }