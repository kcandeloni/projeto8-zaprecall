import { Link } from 'react-router-dom';
import './style.css';
import Mensagem from './Mensagem.js';
import App from '../../components/App';

function resetaPerguntas (lista){
    lista.map(function(pergunta){ pergunta.nameIcon = ''; pergunta.color = '';pergunta.function(pergunta.status)})
    App();
}

export default function Resultado ({contador:contador, children:listaPerguntas, zaps: zaps, meta: meta}) {

    return(
        <div className='resultado'>
                {zaps.length > 3 ? <Mensagem zaps={zaps} meta={meta}/>: ''}
                <h2>{contador}/4 CONCLUÍDOS</h2>
                <div>
                    {zaps.map(zap => <span className={zap.color}><ion-icon name={zap.name}></ion-icon></span>)}
                </div>
                {zaps.length > 3 ? <Link to='../'><div onClick={() => resetaPerguntas(listaPerguntas)} className='botaoReinicia'><h6>REINICIAR RECALL</h6></div></Link>: ''}
            </div>
    );
}