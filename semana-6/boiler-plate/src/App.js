import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${ ( {completa} ) => ( completa ? 'line-through' : 'none' ) };
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{id: Date.now(), tarefa: 'Lavar louça', completa: false},
                {id: Date.now(), tarefa: 'Limpar quarto', completa: true}],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaLista = [...this.state.tarefas, {id: Date.now(), tarefa: this.state.inputValue, completa: false}]
    return (this.setState({tarefas: novaLista}), 
            this.componentDidUpdate())
  }

  selectTarefa = (id) => {
    const listaTarefas = this.state.tarefas.map( (tarefa) => {
      if(tarefa.id === id){
        const tarefaCompletaReverso = {...tarefa, completa: !tarefa.completa}
        return tarefaCompletaReverso
      }
      else{
        return tarefa
      }
    })
    this.setState({tarefas: listaTarefas})
  }

  onChangeFilter = (event) => {
    const listaEvents = this.state.tarefas.filter( (tarefa) => {
      const listaTarefas = {...tarefa}
      if(event.target.value === 'pendentes'){
        if(listaTarefas.completa === false){
          const listaPendente = listaTarefas
          return listaPendente
        }
      }
      else if(event.target.value === 'completas'){
        if(listaTarefas.completa === true){
          const listaCompleta = listaTarefas
          return listaCompleta
        }
      }
      else if(event.target.value === ''){
        return listaTarefas
      }
    })
    console.log(listaEvents)
    
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={ () => this.selectTarefa(tarefa.id) }
              >{tarefa.tarefa}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
