import './style.css';
import logo from '../../assets/ZapRecall-Recursos/logo.png';
import setinha from '../../assets/ZapRecall-Recursos/setinha.png';
import React from 'react';
import Resultado from '../resultado/Resultado';
import AddCheckZap from '../addCheck/AddCheckZap';
import Perguntas from '../perguntas/Perguntas';


function addPerguntaStatus (props) {
    props.map(pergunta => {const [pergStatus, setPerguntaStatus] = React.useState(0); pergunta.status = pergStatus; pergunta.function = setPerguntaStatus; });
}

export default function Game(props) {
    
    const [contador, setContador] = React.useState(0);
    const [checkZap, setCheckZap] = React.useState({status: 0, meta: 4, zaps: []});
    checkZap.function = setCheckZap;
    
    addPerguntaStatus(props.children)

    return (
        <>
            <div className='topo'>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </div>

            <Perguntas contador={contador} checkZap={checkZap} setContador={setContador}>
                {props.children}
            </Perguntas>    

            <Resultado contador={contador} {...checkZap} />
        </>
    );
  }