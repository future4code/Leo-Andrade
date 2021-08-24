
//Exercícios de interpretação de código
    //1. Vai imprimir todos os itens, indices e o array.
    //2. Vai imprimir um novo array de nomes do array anterior.
    //3. Vai criar um array novo e seus itens vao ser todos os objetos que o apelido for diferente de 'chijo'

//Exercícios de escrita de código
    //1.
        // const pets = [
        //     { nome: "Lupin", raca: "Salsicha"},
        //     { nome: "Polly", raca: "Lhasa Apso"},
        //     { nome: "Madame", raca: "Poodle"},
        //     { nome: "Quentinho", raca: "Salsicha"},
        //     { nome: "Fluffy", raca: "Poodle"},
        //     { nome: "Caramelo", raca: "Vira-lata"},
        // ]
        // const nomeDosPets = pets.map( item =>  item.nome  )
        // const petSalsicha = pets.filter( item => item.raca === 'Salsicha' )
        // const petPoodle = pets.filter( item => item.raca === 'Poodle')
        // const mensagemPoodle = petPoodle.map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
        // console.log('*****EXERCICIO 1.A*****')
        // console.log(nomeDosPets)
        // console.log('*****EXERCICIO 1.B*****')
        // console.log(petSalsicha)
        // console.log('*****EXERCICIO 1.C*****')
        // console.log(mensagemPoodle)
    //2.
        // const produtos = [
        //     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        //     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        //     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        //     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        //     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        //     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        //     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        //     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        //     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        //     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
        // ]
        // const produtosCopia = [...produtos]
        // const nomeDosProdutos = produtos.map( item => item.nome )
        // const produtosComDesconto = produtos.map( item => {
        //     const produto = {...item}
        //     produto.preco -= (produto.preco * 0.05).toFixed(2)
        //     return produto
        // } )
        // const produtosBebidas = produtos.filter( item => item.categoria === 'Bebidas')
        // const produtosYpe = produtos.filter( item => item.nome.includes('Ypê'))
        // const mensagemProdutosYpe = produtosYpe.map( (item,index,array) => `Compre ${item.nome} por ${item.preco}`)
        // console.log('*****EXERCICIO 2.A*****')
        // console.log(nomeDosProdutos)
        // console.log('*****EXERCICIO 2.B*****')
        // console.log(produtosComDesconto)
        // console.log(produtos)
        // console.log('*****EXERCICIO 2.C*****')
        // console.log(produtosBebidas)
        // console.log('*****EXERCICIO 2.D*****')
        // console.log(produtosYpe)
        // console.log('*****EXERCICIO 2.E*****')
        // console.log(mensagemProdutosYpe)
        // console.log(produtos)
//DESAFIOS
    //1.
        const pokemons = [
            { nome: "Bulbasaur", tipo: "grama" },
            { nome: "Bellsprout", tipo: "grama" },
            { nome: "Charmander", tipo: "fogo" },
            { nome: "Vulpix", tipo: "fogo" },
            { nome: "Squirtle", tipo: "água" },
            { nome: "Psyduck", tipo: "água" },
        ]
        const pokemonOrdemAlfabetica = pokemons.map(item => {
            return item.nome
        })
        console.log('Desafio 01:')
        console.log(pokemonOrdemAlfabetica.sort())
    //2.
        const tipos = pokemons.map(item => item.tipo)
        const pegaUnicoTipo = (array) => {
            const a = []
            for(let i = 0; i < array.length; i++){
                if(a.indexOf(array[i]) === -1 && array[i] != ''){
                    a.push(array[i])
                }
            }
            console.log(a)
        }
        console.log('Desafio 02:')
        pegaUnicoTipo(tipos)
