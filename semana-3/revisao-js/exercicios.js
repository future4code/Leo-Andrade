// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let i
    for(i = 0; i < array.length; i++){}
    return i
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayInvertido = []
    for(i = 0 ; i < array.length; i++){
        arrayInvertido.push(array[array.length - 1 -i])
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const arrayOrdenado = []
    let maior = 0
    let menor = 0
    for(let i = 0 ; i < array.length ; i++){
        for (let j = i + 1 ; j < array.length; j++){
            if(array[j] < array[i]){
                menor = array[j]
                array[j] = array[i]
                array[i] = menor
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = []
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = []
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] % 2 === 0){
            let numeroParElevado = Math.pow(array[i],2)
            numerosPares.push(numeroParElevado)
        }
    }
    return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
  for(let i = 0; i < array.length; i++){
      if(array[i] > maiorNumero){
          maiorNumero = array[i]
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero : Number,
        maiorDivisivelPorMenor : Boolean,
        diferenca : Number
    }
    if(num2 > num1){
        const aux = num1
        num1 = num2
        num2 = aux
    }
    objeto.maiorNumero = num1
    if(num1 % num2 === 0){
        objeto.maiorDivisivelPorMenor = true
    }
    else {
        objeto.maiorDivisivelPorMenor = false
    }
    objeto.diferenca = num1 - num2
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const primeirosPares = []
    for(let i = 0; i < n ;i++){

    }
    return primeirosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return ('Equilátero')
    }
    if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return ('Isósceles')
    }
    if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return ('Escaleno')
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const resultadoArray = []
    const maioresNumeros = []
    const menoresNumeros = []
    if(array.length < 3){
        if(array[0] > array[1]){
            let aux = array[0]
            array[0] = array[1]
            array[1] = aux
        }
        resultadoArray.push(array[0])
        resultadoArray.push(array[1])
    }
    else{
    for( let i = 0; i < array.length ; i++){
        for(let j = i+1 ; j < array.length; j++){
            if(array[i] > array[j]){
                let aux = array[i]
                array[i] = array[j]
                array[j] = aux
            }
        }
    }
    for(let i = 0; i < 2; i++){
        menoresNumeros.push(array[i])
        maioresNumeros.push(array.pop())
    }
    resultadoArray.push(maioresNumeros[1])
    resultadoArray.push(menoresNumeros[1])
    }
    return resultadoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    for(let i = 0; i < filme.atores.length; i++){
        filme.atores[i] = " "+filme.atores[i]
    }
    return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${filme.atores}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const copiaPessoa ={...pessoa}
    copiaPessoa.nome = 'ANÔNIMO'
   return copiaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    const pessoasNaoAutorizadas = []
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].altura > 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60){
            pessoasAutorizadas.push(pessoas[i])
        }
    }
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const pessoasAutorizadas = []
    const pessoasNaoAutorizadas = []
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].altura > 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60){
            pessoasAutorizadas.push(pessoas[i])
        }
        else{
            pessoasNaoAutorizadas.push(pessoas[i])
        }
    }
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}