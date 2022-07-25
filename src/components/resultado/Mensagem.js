import parabensImg from '../../assets/ZapRecall-Recursos/party 2.svg';
import deuRuim from '../../assets/ZapRecall-Recursos/sad 7.svg';

export default function Mensagem ({zaps: zaps, meta: meta}) {

    function checkResultado () {
        if(meta <= zaps.filter(zap => zap.name !== "close-circle").length){
            return {img: parabensImg, titulo: 'Parabéns!', m: 'Você não esqueceu de nenhum flashcard!'};
        }
        return {img: deuRuim, titulo: 'Putz...', m: 'Ainda faltam alguns... Mas não desanime!'};
    }

    let mResultado = checkResultado();

    return (
        <div>
            <div className='tituloResultado'>
                <img src={mResultado.img}/>
                <h4>{mResultado.titulo}</h4>
            </div>
            <h5>{mResultado.m}</h5>
        </div>
    );
}