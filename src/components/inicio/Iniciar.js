import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/ZapRecall-Recursos/logo.png';

export default function Iniciar() {
    
    return (
      <div className='inicio'>
        <img src={logo}/>
        <h1>ZapRecall</h1>
        <Link to='./game'><div className="button">Iniciar Recall!</div></Link>
      </div>
    );
  }