import './style.css';
import logo from '../../assets/ZapRecall-Recursos/logo.png';
import setinha from '../../assets/ZapRecall-Recursos/setinha.png';


export default function Game(props) {
    
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
                            <ion-icon name="close-circle"></ion-icon>
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
                        <div>
                            <p>Não lembrei</p>
                        </div>
                        <div>
                            <p>Quase não lembrei</p>
                        </div>
                        <div>
                            <p>Zap!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='resultado'>
                <h2>0/4 CONCLUÍDOS</h2>
            </div>
        </>
    );
  }