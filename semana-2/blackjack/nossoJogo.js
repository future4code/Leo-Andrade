/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   const iniciarJogo = () => {
      const cartasDoJogador = []
      const cartasDoComputador = []
      let valorTotalJogador = 0
      let valorTotalComputador = 0
         for(let i = 0; i < 2 ; i++){
            cartasDoJogador.push(comprarCarta())
            cartasDoComputador.push(comprarCarta())
            valorTotalJogador += cartasDoJogador[i].valor
            valorTotalComputador += cartasDoComputador[i].valor
         }
      console.log(`Usuário cartas - ${cartasDoJogador[0].texto} ${cartasDoJogador[1].texto}  - pontuação ${valorTotalJogador}`)
      console.log(`Computador cartas - ${cartasDoComputador[0].texto} ${cartasDoComputador[1].texto}  - pontuação ${valorTotalComputador}`)
      if(valorTotalJogador === valorTotalComputador){
         console.log('Empate!')
      }
      else if(valorTotalJogador > valorTotalComputador){
         console.log('O usuário ganhou!')
      }
      else{
         console.log('O computador ganhou!')
      }
   }

console.log("Boas vindas ao jogo de Blackjack!")
if( confirm('Quer iniciar uma nova rodada?') ){
   iniciarJogo()
}
else{
   console.log('O jogo acabou.')
}
