// 1 - Vai imprimir 10
// vai imprimir 10 5

//2 - vai imprimir 10 10 10

//3 - variavel p pode ter seu nome mudado para horasTrabalhada
//  Variavel t pode ter seu nome mudado para salarioDia

//-------------Exercicio 01-------------
let nome
let idade
console.log(typeof nome, idade)
//Se eu criar uma const, será retornado um erro de sintaxe pois uma constante precisa ser iniciada de alguma forma
//Declarando let, me retorna como undefined
//Toda variável não constante que não é inicializada tem esse tipo
nome = prompt("Digite seu nome, por favor")
idade = prompt("Digite a sua idade, por favor")
console.log(typeof nome,typeof idade)
//No console os dois tipos retornam string pois toda entrada de dado usada no prompt é uma string
console.log("Olá %s você tem %s anos.",nome,idade)
//-------------Exercicio 02-------------
let corCamisa = prompt("Digite a cor da sua camisa")
let salarioMes = prompt("Digite seu salario do mês")
let diaPagamento = prompt("Digite o dia do seu pagamento")
console.log("Cor da sua camisa - %s", corCamisa)
console.log("Salario do mês - R$%s", salarioMes)
console.log("Dia do seu pagamento - %s", diaPagamento)
//-------------Exercicio 03-------------
let a = 10
let b = 25
// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
//-------------DESAFIO-------------
const numberOne = Number(prompt("Digite um numero"))
const numberTwo = Number(prompt("Digite outro numero"))
console.log("O primeiro número somado ao segundo número resulta em: %d", numberOne + numberTwo)
console.log("O primeiro número multiplicado pelo segundo número resulta em: %d", numberOne * numberTwo)


