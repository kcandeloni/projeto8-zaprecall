import { Link } from 'react-router-dom';
import './style.css';
import Mensagem from './Mensagem.js';

export default function Resultado ({contador:contador, zaps: zaps, meta: meta}) {

    return(
        <div className='resultado'>
                {zaps.length > 3 ? <Mensagem zaps={zaps} meta={meta}/>: ''}
                <h2>{contador}/4 CONCLUÍDOS</h2>
                <div>
                    {zaps.map(zap => <span className={zap.color}><ion-icon name={zap.name}></ion-icon></span>)}
                </div>
                {zaps.length > 3 ? <Link to='../'><div className='botaoReinicia'><h7>REINICIAR RECALL</h7></div></Link>: ''}
            </div>
    );
}