import AddCheckZap from '../addCheck/AddCheckZap';
import setinha from '../../assets/ZapRecall-Recursos/setinha.png';


function estado01 (pergunta, index){
    let classColor = 'inerte '+pergunta.color;
    let icon = pergunta.nameIcon !== '' ? pergunta.nameIcon :"play-outline" ;
    return(
        <div className='pergunta'>
            <div className={classColor}>
                <h3 className={classColor}>Pergunta {index+1}</h3>
                <ion-icon onClick={() => pergunta.function(pergunta.status+1)} name={icon}></ion-icon>
            </div>
        </div>
    );
}

function estado02 (pergunta){
    return(
        <div className='pergunta'>
            <div className='inerte'>
                <h3>{pergunta.Q}</h3>
                <img className='seta' onClick={() => pergunta.function(pergunta.status+1)} src={setinha}/>
            </div>
        </div>
    );
}

function estado03 (pergunta, contador, setContador, checkZap){
    console.log(contador)
    return(
        <div className='pergunta'>
            <div className='inerte'>
                <h3>{pergunta.R}</h3>
            </div>
            <div className='opcoes'>
                <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'red', 'close-circle', {pergunta})}}}>
                    <p>Não lembrei</p>
                </div>
                <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'yellow', 'help-circle', {pergunta})}}}>
                    <p>Quase não lembrei</p>
                </div>
                <div onClick={function (){ if(contador < 4){setContador(contador + 1); AddCheckZap({checkZap}, 'green', 'checkmark-circle', {pergunta})}}}>
                    <p>Zap!</p>
                </div>
            </div>
        </div>
    );
}

function renderizaPergunta (pergunta, index, contador, setContador, checkZap){
    if(pergunta.status === 0){
        return estado01(pergunta,index);
    }
    if(pergunta.status === 1){
        return estado02(pergunta);
    }
    if(pergunta.status === 2){
        return estado03(pergunta, contador, setContador, checkZap);
    }
    if(pergunta.status === 3){
        return estado01(pergunta,index);
    }
    else{
        return estado01(pergunta,index);
    }
    
    
}

export default function Perguntas({contador: contador, setContador: setContador, checkZap:checkZap, children:listaPerguntas}) {

    return(
        <div className='perguntas'>
            {listaPerguntas.map((pergunta,index) => renderizaPergunta(pergunta, index, contador, setContador, checkZap))}        
        </div>
    );
}