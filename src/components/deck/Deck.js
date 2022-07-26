export default function GerarDeck() {
    const deck = 
    [{Q: 'O que é JSX?' , R: 'Uma extensão de linguagem do JavaScript', nameIcon: '', color: ''},
    {Q: 'O React é __' , R: 'uma biblioteca JavaScript para construção de interfaces', nameIcon: '', color: ''},
    {Q: 'Componentes devem iniciar com __' , R: 'letra maiúscula', nameIcon: '', color: ''},
    {Q: 'Podemos colocar __ dentro do JSX' , R: 'expressões', nameIcon: '', color: ''},
    {Q: 'O ReactDOM nos ajuda __' , R: 'interagindo com a DOM para colocar componentes React na mesma', nameIcon: '', color: ''},
    {Q: 'Usamos o npm para __' , R: 'gerenciar os pacotes necessários e suas dependências', nameIcon: '', color: ''},
    {Q: 'Usamos props para __' , R: 'passar diferentes informações para componentes', nameIcon: '', color: ''}, 
    {Q: 'Usamos estado (state) para __' , R: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente', nameIcon: '', color: ''},
    ];
  
  //deck.map( deck => deck.sort(() => Math.random() - 0.5 ));//para mais de um deck

  return deck.sort(() => Math.random() - 0.5 );
}