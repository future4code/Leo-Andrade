//Exercícios de interpretação de código
    //1. 10
    //2. 
        //a. 19 21 23 25 27 30
        //b. Somente deletar o condicional if e digitar ' console.log(lista.indexOf(numero)) '
    //3. Vai imprimir somar um asteristico a cada linha que for pular de 0 a 4

//Exercícios de escrita de código
    //1.
        // const quantidadePet = Number(prompt('Digite quantos pets você tem'))
        // if(quantidadePet > 0){
        //     const nomeDosPets = []
        //     for(let i = 0; i < quantidadePet; i++){
        //         nomeDosPets.push(prompt(`Digite o nome do seu pet numero ${i+1}`))
        //     }
        //     console.log(`Aqui está a lista dos seus pets: ${nomeDosPets}`)
        // }
        // else{
        //     console.log('Que pena! Você pode adotar um pet!')
        // }
    //2.
        // const arrayOriginal = [1,5,15,20,25,40,44]
        // const novoArray = []
        // console.log('*****Letra A*****')
        // for(let i = 0; i < arrayOriginal.length - 1; i++){
        //     console.log(arrayOriginal[i])
        // }
        // console.log('*****Letra B*****')
        // for(let i = 0; i < arrayOriginal.length - 1; i++){
        //     console.log(arrayOriginal[i] / 10)
        // }
        // console.log('*****Letra C*****')
        // for(let i = 0; i < arrayOriginal.length - 1; i++){
        //     if(arrayOriginal[i] % 2 == 0){
        //         novoArray.push(arrayOriginal[i])
        //     }
        // }
        // console.log(novoArray)
        // console.log('*****Letra D*****')
        // const novoArray2 = [120,10,25,130,100,23]
        // console.log(`Novo array 2 = [ ${novoArray2} ]`)
        // for( let i = 0 ; i < novoArray2.length; i++){
        //     console.log(`O elemento do índex ${novoArray2.indexOf(novoArray2[i])} é: ${novoArray2[i]}`)
        // }
        // console.log('*****Letra E*****')
        // let menor = novoArray2[0]
        // let maior = novoArray2[0]
        // for(let i of novoArray2){
 
        //     if(menor > i){
        //         menor = i
        //     }
        //     if(maior < i){
        //         maior = i
        //     }

        // }
        // console.log(`Maior: ${maior}`)
        // console.log(`Menor: ${menor}`)

//DESAFIOS
    //1.
        // const jogar = () => {
        //     let tentativas = 0
        //     const numero = Number(prompt('Digite um número').trim())
        //     console.log('Vamos jogar!')
        //     let numeroAdivinhado = Number(prompt('Adivinhe o numero anterior digitado!').trim())
        //     while(numeroAdivinhado != numero){
        //         if(numeroAdivinhado > numero){
        //             console.log(`O número ${numeroAdivinhado} é maior que o digitado!`)
        //         }
        //         else if(numeroAdivinhado < numero){
        //             console.log(`O número ${numeroAdivinhado} é menor que o digitado!`)
        //         }
        //         tentativas++
        //         numeroAdivinhado = Number(prompt('Adivinhe o numero anterior digitado!'))
        //     }
        //     if(numeroAdivinhado === numero ) {
        //         console.log(`O número ${numeroAdivinhado} é igual ao digitado!`)
        //         tentativas++
        //     }
        //     console.log(`Número de tentativas foi: ${tentativas}`)
        // }
        // jogar()
    
    //2.
        const jogar2 = () => {
            const numero = Math.floor(Math.random() * 11 )
            let tentativas = 0
            console.log('Vamos jogar! Acerte o número secreto!')
            let numeroAdivinhado = Number(prompt('Adivinhe um número de 0 a 10'))
            while(numeroAdivinhado != numero){
                if(numeroAdivinhado > numero){
                    console.log(`Número digitado ${numeroAdivinhado} maior que o número secreto!`)
                    tentativas++
                }
                if(numeroAdivinhado < numero){
                    console.log(`Número digitado ${numeroAdivinhado} menor que o número secreto!`)
                    tentativas++
                }
                numeroAdivinhado = Number(prompt('Adivinhe um número de 0 a 10'))
            }
            if(numeroAdivinhado === numero){
                console.log(`ACERTOU! ${numeroAdivinhado} é o número secreto!`)
                tentativas++
            }
            console.log(`Número de tentativas até acertar: ${tentativas}`)
        }
        jogar2()
        