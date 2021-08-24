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
   let continuar = true
   const quemGanha = (totalJogador, totalComputador) => {
      if(totalJogador === totalComputador){
         return ('Empate!')
      }
      else if(totalJogador > totalComputador && totalJogador <= 21){
         return ('O usuário ganhou!')
      }
      else if(totalComputador > totalJogador && totalComputador <= 21){
         return ('O computador ganhou!')
      }
      else if(totalJogador > totalComputador && totalJogador >= 21){
         return ('O computador ganhou!')
      }
      else if(totalComputador > totalJogador && totalComputador >= 21){
         return ('O jogador ganhou!')
      }
   }
   const mostraCartas = (array) => {
      const arrayDeCartas = []
      for(let i = 0 ; i < array.length; i++){
         arrayDeCartas.push(array[i].texto)
      }
      return arrayDeCartas
   }
   const valorTotalDeCartas =(array) => {
      let somaArray = 0
      for(let i = 0 ; i < array.length; i++){
         somaArray += array[i].valor
      }
      return somaArray
   }
   if(confirm('Quer iniciar uma nova rodada?')) {
      for(let i = 0; i < 2 ; i++){
         cartasDoJogador.push(comprarCarta()) 
         cartasDoComputador.push(comprarCarta())
    }
    while(continuar){
      if(confirm('Suas cartas são ' + mostraCartas(cartasDoJogador) + 
         '\n A carta revelada do computador é ' + cartasDoComputador[0].texto + 
         '\nDeseja comprar mais uma carta?')){
            cartasDoJogador.push(comprarCarta())
            valorTotalJogador = valorTotalDeCartas(cartasDoJogador)
            valorTotalComputador = valorTotalDeCartas(cartasDoComputador)
            }

      else{
         valorTotalJogador = valorTotalDeCartas(cartasDoJogador)
         while(valorTotalComputador <= valorTotalJogador && valorTotalComputador <= 21){
            cartasDoComputador.push(comprarCarta())
            valorTotalComputador = valorTotalDeCartas(cartasDoComputador)
         }
         
         alert(quemGanha(valorTotalJogador,valorTotalComputador))
         continuar = false
      }
   }
      console.log(cartasDoJogador)
      console.log(valorTotalJogador)
      console.log(cartasDoComputador)
      console.log(valorTotalComputador)
   }
   else{
      console.log('O jogo acabou.')
   }

}

iniciarJogo()