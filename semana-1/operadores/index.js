//Exercícios de interpretação de código

//1. "a. false" ; "b. false" ; "c. true" ; "d. Boolean"

//2. O prompt salva as entradas inseridas pelo usuário como string.
// O que vai aparecer no log é a concatenação das duas frases.

//3. Uma solução seria a transformação desta entrada de string para Number.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero

//Exercícios de escrita de código

//1.
    // let suaIdade = Number(prompt('Digite sua idade'))
    // let amigoIdade = Number(prompt('Digite a idade do seu amigo(a)'))
    // console.log("Sua idade é maior do que a do seu melhor amigo?", suaIdade > amigoIdade)
    // console.log('Sua idade: ', suaIdade)
    // console.log('Idade do amigo: ', amigoIdade)
    // if(suaIdade < amigoIdade){
    //     let aux = suaIdade
    //     suaIdade = amigoIdade
    //     amigoIdade = aux
    // }
    // console.log('Diferença entre as idades: ', suaIdade - amigoIdade)

//2.
    // let numeroPar = console.log('Digite um numero par')
    // let resto = numeroPar % 2
    // console.log(resto)
    // O resto sempre vai ser zero com um número par, porque o resto de divisões de numeros pares com 2, é sempre zero
    // Se quiser o resto de divisões por 2 de algum numero impar, sempre vai restar 1

//3.
    // let idadeAnos = Number(prompt('Digite que ano você nasceu'))
    // let idadeMeses = ( 2021 - idadeAnos ) * 12 
    // let idadeDias = idadeMeses * 30
    // let idadeHoras = idadeDias * 24
//4.
    // let numeroUm = Number(prompt('Digite um numero'))
    // let numeroDois = Number(prompt('Digite outro numero '))
    // let resultado = numeroUm > numeroDois
    // console.log('Primeiro Numero: %d \nSegundo Numero: %d', numeroUm,numeroDois)
    // console.log('O primeiro numero é maior que segundo? ', resultado)
    // resultado = numeroUm === numeroDois
    // console.log('O primeiro numero é igual ao segundo? ', resultado)
    // resultado = numeroUm % numeroDois
    // if(resultado == 0){
    //     resultado = true
    // }else{
    //     resultado = false
    // }
    // console.log('O primeiro numero é divisível pelo segundo? ', resultado)
    // resultado = numeroDois % numeroUm
    // if(resultado == 0){
    //     resultado = true
    // }else{
    //     resultado = false
    // }
    // console.log('O segundo numero é divisível pelo primeiro? ', resultado)

//Desafios

//1.
    // let grauCelcius = 80
    // let grauFahrenheit = 77
    // let grauKelvin = (grauFahrenheit - 32)*(5/9) + 273.15
    // console.log('%d°F vai ser %d°K',grauFahrenheit, grauKelvin)
    // grauFahrenheit = (grauCelcius)*(9/5) + 32
    // console.log('%d°C vai ser %d°F',grauCelcius,grauFahrenheit)
    // grauCelcius = 30
    // console.log('%d°C vai ser %d°F e %d°K',grauCelcius,grauFahrenheit,grauKelvin)
    // grauCelcius = Number(prompt('Digite a temperatura em Celcius para converter'))
    // console.log('Temperatura digitada: %d', grauCelcius)
    // console.log('%d°C vai ser %d°F e %d°K',grauCelcius,grauFahrenheit,grauKelvin)

//2.
    // const quilowattHora = 0.05
    // const consumo = 280
    // let conta = consumo * quilowattHora
    // console.log('Casa A consumiu %dKW a conta de luz deu: R$%d', consumo,conta)
    // conta -= (conta * 0.15)
    // console.log('Casa A consumiu %dKW a conta de luz deu: R$%f no final com desconto de 15%', consumo,conta)

//3.
let lb = 20
let kg = lb / 2.205
console.log('20lb equivalem a %s kg', kg.toFixed(3))
let oz = 10
kg = oz / 35.274
console.log('10oz equivalem a %s kg', kg.toFixed(3))
let milha = 100
let metro = milha * 1609
console.log('100mi equivalem a %d m',metro)
let pes = 50
metro = pes / 3.281
console.log('50ft equivalem a %s m',metro.toFixed(3))
let galao = 103.56
let litro = galao / 0.26417
console.log('103.56gal equivalem a %s l',litro.toFixed(3))
let xicara = 450
litro = xicara / 3.52
console.log('450 xic equivalem a %s l',litro.toFixed(3))
xicara = Number(prompt('Digite a quantidade de xicaras'))
console.log('Voce digitou %fxic, isso equivale a %s l',xicara, litro.toFixed(3))








