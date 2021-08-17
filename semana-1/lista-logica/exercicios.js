// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Digite a altura do retangulo'))
  const largura = Number(prompt('Digite a largura do retangulo'))
  const area = (altura * largura)
  console.log(area)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite em que ano estamos'))
  const anoNascimento = Number(prompt('Digite o ano em que nasceu'))
  const idade = (anoAtual - anoNascimento)
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Digite seu nome')
  const idade = Number(prompt('Digite sua idade'))
  const email = prompt('Digite seu email').toLowerCase().trim()
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let i = 0
  const listaCores = []
  for(i=0;i<3;i++){
    listaCores[i] = prompt('Digite sua cor favorita')
  }
  console.log(listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const fraseMaiuscula = string.toUpperCase().trim()
  return fraseMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngresso = custo / valorIngresso
  return quantidadeIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringsIguais = (string1.length === string2.length)
  return stringsIguais

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length - 1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const aux = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = aux
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const checkIgualdade = string1.toLowerCase().trim() === string2.toLowerCase().trim()
  return checkIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoNascimento = Number(prompt('Digite o ano de nascimento'))
  const anoEmicaoIdentidade = Number(prompt('Digite o ano de emissao da identidade'))
  const idadePessoa = anoAtual - anoNascimento
  const idadeIdentidade = anoAtual - anoEmicaoIdentidade
  if(idadePessoa <= 20 && idadeIdentidade >= 5){
    console.log(true)
  }
  else if(idadePessoa > 20 && idadePessoa <= 50 && idadeIdentidade >= 10){
    console.log(true)
  }
  else if(idadePessoa > 50 && idadeIdentidade >= 15){
    console.log(true)
  }
  else{
    console.log(false)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if(ano % 400 === 0){
    return true
  }
  else if(ano % 4 === 0 && ano % 100 && ano % 400){
    return true
  }
  else{
    return false
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const checkIdade = prompt('tem mais de 18?').toLowerCase().trim()
  const checkEnsinoMedio = prompt('tem ensino médio completo?').toLowerCase().trim()
  const checkDisponibilidade = prompt('tem disponibilidade de horários?').toLowerCase().trim()
  if(checkIdade === 'sim' && checkEnsinoMedio === 'sim' && checkDisponibilidade === 'sim'){
    console.log(true)
  }
  else{
    console.log(false)
  }
}