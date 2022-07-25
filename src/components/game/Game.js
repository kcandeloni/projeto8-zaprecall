import './style.css';
import logo from '../../assets/ZapRecall-Recursos/logo.png';
import setinha from '../../assets/ZapRecall-Recursos/setinha.png';
import React from 'react';
import Resultado from '../resultado/Resultado';
import AddCheckZap from '../addCheck/AddCheckZap';

export default function Game(props) {
    
    const [contador, setContador] = React.useState(0);
    const [checkZap, setCheckZap] = React.useState({status: 0, meta: 4, zaps: []});
    checkZap.function = setCheckZap;
    
    return (
        <>
            <div className='topo'>
                <img src={logo}/>
                <h1>ZapRecall</h1>
            </div>

            <div className='perguntas'>
                <div className='pergunta'>
                    <div className='inerte'>
                        <h3>{props.children[0].Q}</h3>
                        <ion-icon name="help-circle"></ion-icon>
                    </div>
                </div>
                <div className='pergunta'>
                    <div className='inerte'>
                        <h3>0/4 CONCLUÍDOS</h3>
                            <ion-icon name="play-outline"></ion-icon>
                    </div>    
                </div>
                <div className='pergunta'>
                    <div className='inerte'>
                        <h3>0/4 CONCLUÍDOS</h3>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
                <div className='pergunta'>
                    <div className='inerte'>
                        <h3>{props.children[0].R}</h3>
                        <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <div className='opcoes'>
                        <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'red', 'close-circle')}}}>
                            <p>Não lembrei</p>
                        </div>
                        <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'yellow', 'help-circle')}}}>
                            <p>Quase não lembrei</p>
                        </div>
                        <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'green', 'checkmark-circle')}}}>
                            <p>Zap!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Resultado contador={contador} {...checkZap} />
        </>
    );
  }