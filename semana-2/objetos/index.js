//Exercícios de interpretação de código
    //1.
        //a.
            //'Matheus Nachtergaele'
            //'Virginia Cavendish'
            //{canal: Globo, horario: 14h}
    //2.
        //a.
            //{nome: Juca, idade: 3, raca: SRD}
            //{nome: Juba, idade: 3, raca: SRD}
            //{nome: Juba, idade: 3, raca: SRD}
        //b.
            //Permite que um objeto iterável possa ser expandito para que seja usado em
            //outros objetos, arrays e chamada de funções
    //3.
        //a.
            //false
            //undefined
        //b.
            //Na funcao 'minhaFuncao(objeto,propriedade)' vai receber como parametros
            //Um objeto e uma propriedade deste objeto.
            //O objeto criado foi 'pessoa' que tem como propriedades nome, idade e backender
            //a questão a foi usado o comando 'console.log(minhaFuncao(pessoa,"backender"))'
            //pedindo que imprima o retorno da propriedade 'backender' do objeto pessoa.
            //Na questão b, foi usado o comando 'console.log(minhaFuncao(pessoa,"altura"))'
            //A propriedade 'altura' não existe no objeto pessoa entao, retornou um resultado de 'undefined' (indefinido)
    
//Exercícios de escrita de código
    //1.
        //a.
            const pessoa = {
                nome : "Joao",
                apelidos : ['Zé', 'Zezinho', 'Jon']
            }
            const minhaFuncao = (pessoa) => {
                console.log(`Meu nome é ${pessoa.nome} mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
            }
            minhaFuncao(pessoa)
        //b.
            const pessoa2 = {...pessoa}
            pessoa2.apelidos = ['Joaozinho', 'Pepinho', 'Jojo']
            minhaFuncao(pessoa2)
    //2.
        //a.
            const usuario = {
                nome : "Leo",
                idade : 30,
                profissao : "Estudante"
            }
            const usuario2 = {...usuario}
        //b.
            const usuarioInfo = (objeto) => {
                console.log(`Nome: ${objeto.nome}`)
                console.log(`Tamanho do nome: ${(objeto.nome).length}`)
                console.log(`Idade: ${objeto.idade}`)
                console.log(`Profissao: ${objeto.profissao}`)
                console.log(`Tamanho da profissao: ${(objeto.profissao).length}`)
            }
            usuarioInfo(usuario)
    //3.
        //a.
            const carrinho = []
        //b.
            const fruta1 = {
                nome : 'Maçã Verde',
                disponibilidade : true
            }
            const fruta2 = {...fruta1}
            fruta2.nome = 'Pêra'
            const fruta3 = {...fruta1}
            fruta3.nome = 'Maracujá'
        //c.
            const minhasFrutas = (objeto1,objeto2,objeto3) => {
                carrinho.push(objeto1)
                carrinho.push(objeto2)
                carrinho.push(objeto3)
                console.log(carrinho)
            }
        //d.
            minhasFrutas(fruta1,fruta2,fruta3)

//Desafios
    //1.
        const userInfo = {
            nome : String,
            idade : Number,
            profissao : String
        }
        const programUserinfo = (objeto) => {
            objeto.nome = prompt('Digite seu nome')
            objeto.idade = Number(prompt('Digite sua idade'))
            objeto.profissao = prompt('Digite sua profissao')
            console.log(objeto)
            console.log(typeof objeto)
        }
        programUserinfo(userInfo)
    //2.
        const filme1 = {
            nome : 'Star Wars',
            lancamento : 1991
        }
        const filme2 = {...filme1}
        filme2.nome = 'Star Trek'
        filme2.lancamento = 1993
        const funcaoComparacao = (objeto1,objeto2) => {
            console.log(`O primeiro filme foi lançado antes do segundo? ${objeto1.lancamento < objeto2.lancamento}`)
            console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.lancamento === objeto2.lancamento}`)
        }
        funcaoComparacao(filme1,filme2)
    //3.
        const frutaDisponivel = (objeto) => {
            objeto.disponibilidade = !objeto.disponibilidade
            return objeto.disponibilidade
        }
        console.log('A Maça Verde está disponível? ', frutaDisponivel(fruta1))

            
