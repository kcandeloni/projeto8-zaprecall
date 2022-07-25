export default function AddCheckZap ({checkZap: checkZap}, color, name, {pergunta: pergunta}) {
    checkZap.zaps.push({name: name, color: color});
    checkZap.function(checkZap);
    pergunta.function(pergunta.status+1);
    pergunta.nameIcon = name;
    pergunta.color = color;
}