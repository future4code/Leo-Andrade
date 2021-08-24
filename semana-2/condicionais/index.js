//Exercícios de interpretação de código
    //1.
        //a. Verifica se o número digitado pelo usuario é par ou não.
        //b. Números pares vão passar no teste.
        //c. Números impares não vao passar no teste.
    //2.
        //a. O código é para verificar o preço das frutas inseridas pelo usuário.
        //b. 'O preço da maça é R$2.25'
        //c. Ia imprimir o 'O preço da pêra é R$5
    //3.
        //a. Esta pedindo para o usuário digitar um número via prompt.
        //b. Se digitou 10, imprime 'Esse número passou no teste' e erro de referencia, 
            //mensagem nao existe no escopo global.
            // Se digitou -10, erro de referencia, mensagem nao existe no escopo global.
        //c. erro de referencia, mensagem nao existe no escopo global

//Exercícios de escrita de código
    //1.
        const idade = Number(prompt('Digite sua idade').trim())
        const verificaIdade = (number) => {
            if(number >= 18){
                console.log(`Sua idade é ${number}, você pode dirigir!`)
            }
            else{
                console.log(`Sua idade é ${number}, você não pode dirigir!`)
            }
        }
        verificaIdade(idade)
    //2.
        const turno = prompt('Digite o turno do aluno, M : Manhã, T : tarde e N : Noite').trim().toUpperCase()
        const verificaTurno = (userTurno) => {
            if(userTurno === 'M'){
                console.log('Bom dia!')
            }
            else if(userTurno === 'N'){
                console.log('Boa noite!')
            }
            else if(userTurno === 'T'){
                console.log('Boa tarde!')
            }
            else{
                console.log('Digite um turno válido! M,N ou T!')
            }
        }
    //3.
        const verificaTurno2 = (userTurno) => {
            switch(userTurno){
                case 'M' : 
                    console.log('Bom dia!')
                    break
                case 'T' : 
                    console.log('Boa tarde!')
                    break
                case 'N' : 
                    console.log('Boa noite!')
                    break
                default : 
                    console.log('Digite um turno válido! M,N ou T!')
            
            }
        }
        verificaTurno(turno)
        verificaTurno2(turno)
    //4.
        const genero = prompt('Digite o gênero do filme').trim().toLowerCase()
        const preco = Number(prompt('Digite o preço do ingresso').trim())
        const verificaFilme = (generoFilme, precoFilme) => {
            if(generoFilme === 'fantasia' && precoFilme < 15){
                const lanchinho = prompt('Digite qual lanche vai levar').trim().toLowerCase()
                console.log(`Bom filme!\nGênero escolhido: ${generoFilme} e preço: R$${precoFilme}`)
                console.log(`Aproveite o seu ${lanchinho}`)
            }
            else {
                console.log(`Escolha outro filme! Gênero escolhido: ${generoFilme} e preço: R$${precoFilme}`)
            }
        }
        verificaFilme(genero,preco)
//DESAFIOS
    //1. Modificar o exercicio 4
    //2.
        const clientName = prompt('Digite seu nome completo').trim().toUpperCase()
        const tipoDeJogo = prompt('Digite o tipo do jogo: IN - internacional, DO - Doméstico').trim().toUpperCase()
        const etapaJogo = prompt('Digite a etapa do jogo: SF - semifinal, DT - terceiro lugar ou FI - final').trim().toUpperCase()
        const categoria = Number(prompt('Digite a categoria do jogo. 1, 2, 3 ou 4').trim())
        const quantidadeIngresso = Number(prompt('Digite a quantidade de ingressos').trim())
        
        const imprimeTotalCompra = (nome,tipoJogo,etapaJogo,categoria,quantidadeIngresso) => {
            let precoIngresso = 0
            let precoTotal = 0
            switch(tipoJogo){
                case 'IN' :
                    tipoJogo = 'Internacional'
                    switch(etapaJogo){
                        case 'SF' :
                            etapaJogo = 'Semifinal'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 1320
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 880
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 550
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 220
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                        case 'DT' :
                            etapaJogo = 'Disputa terceiro lugar'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 660
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 440
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 330
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 170
                                    precoTotal = 4.10 * (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                        case 'FI' :
                            etapaJogo = 'Final'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 1980 * 4.10
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 1320 * 4.10
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 880 * 4.10
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 330 * 4.10
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                    }
                    console.log('---Dados da compra---')
                    console.log(`Nome do cliente: ${nome}`)
                    console.log(`Tipo do jogo: ${tipoJogo}`)
                    console.log(`Etada do jogo: ${etapaJogo}`)
                    console.log(`Categoria do jogo: ${categoria}`)
                    console.log(`Quantidade de ingressos: ${quantidadeIngresso}`)
                    console.log('---Valores--- ')
                    console.log(`Valor do ingresso: ${precoIngresso}`)
                    console.log(`Valor total: U$${precoTotal}`)
                    break
                case 'DO' :
                    tipoJogo = 'Nacional'
                    switch(etapaJogo){
                        case 'SF' :
                            etapaJogo = 'Semifinal'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 1320
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 880
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 550
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 220
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                        case 'DT' :
                            etapaJogo = 'Disputa terceiro lugar'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 660
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 440
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 330
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 170
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                        case 'FI' :
                            etapaJogo = 'Final'
                            switch(categoria){
                                case 1 :
                                    precoIngresso = 1980
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 2 :
                                    precoIngresso = 1320
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 3 :
                                    precoIngresso = 880
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                                case 4 :
                                    precoIngresso = 330
                                    precoTotal = (quantidadeIngresso * precoIngresso)
                                    break
                            }
                            break
                    }
                    console.log('---Dados da compra---')
                    console.log(`Nome do cliente: ${nome}`)
                    console.log(`Tipo do jogo: ${tipoJogo}`)
                    console.log(`Etada do jogo: ${etapaJogo}`)
                    console.log(`Categoria do jogo: ${categoria}`)
                    console.log(`Quantidade de ingressos: ${quantidadeIngresso}`)
                    console.log('---Valores--- ')
                    console.log(`Valor do ingresso: ${precoIngresso}`)
                    console.log(`Valor total: R$${precoTotal}`)
                    break
                default : 
            }
        }
        imprimeTotalCompra(clientName,tipoDeJogo,etapaJogo,categoria,quantidadeIngresso)
        
