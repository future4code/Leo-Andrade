import './App.css';
import styled from 'styled-components';
import React from 'react';
import axios from 'axios';
import PokemonDetails from './PokemonDetails';
import PokeballComponent from './PokeballComponent';

const AppContainer = styled.div`
  background-color: #ff6666;
  width: 500px;
  height: 500px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  h2{
    margin-bottom: 20px;
    margin-top: 0;
  }
`
const PokemonSearchBar = styled.div`
  display: flex;
  justify-content: center;
  button{
    margin-left: 8px;
    border: none;
    background-color: red;
    color: white;
    font-weight: bold;
    :hover{
      background-color: #cc0000;
    }
  }
`
export default class App extends React.Component {
  state = {
    pokedexTitle: 'Pokedex v1.0',
    searchPokemon: '',
    getObjPokemon: [],
    getObjPokemonImages: [],
    getObjPokemonAbilities: [],
    getObjPokemonType: [],
    pokemonAbilities: [],
    getPokemonId : 0,
    pokemonType: '',
    pokemonDefaultBackSprite: '',
    pokemonDefaultFrontSprite: '',
    pokemonName: '',
    searchBarPlaceholder : 'Pokemon Name',
    searchBarButtonTitle : 'Search',
    isSearched : false
  }
  pokemonAbilitiesName = () => {
    this.setState({pokemonAbilities : this.state.getObjPokemonAbilities.map( (ability) => {
      return ability.ability.name
    })})
  }
  pokemonTypeName = () => {
    this.setState({pokemonType: this.state.getObjPokemonType.map( (type) => {
      return type.type.name
    })})
    return 
  }
  handlePokemonName = (event) => {
    this.setState({searchPokemon: event.target.value})
  }
  searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchPokemon}`)
    .then((response) => {
      console.log(response.data)
      this.setState({getObjPokemon: response.data.forms})
      this.setState({getObjPokemonImages: response.data.sprites})
      this.setState({pokemonName: (this.state.getObjPokemon[0].name).toUpperCase()})
      this.setState({pokemonDefaultBackSprite: response.data.sprites.back_default})
      this.setState({pokemonDefaultFrontSprite: response.data.sprites.front_default})
      this.setState({getObjPokemonAbilities: response.data.abilities})
      this.setState({getObjPokemonType: response.data.types})
      this.setState({getPokemonId: response.data.id})
      this.setState({isSearched: true})
      this.setState({searchPokemon: ''})
      this.pokemonAbilitiesName()
      this.pokemonTypeName()
      })
    .catch((error) => {
      if(error.response.status === 404){
        alert('Pokemon cannot be found. Type only in lower case.')
      }
    })
  }
  render(){
    return (
      <AppContainer>
        <h2>{this.state.pokedexTitle}</h2>
        <PokemonSearchBar>
          <input placeholder={this.state.searchBarPlaceholder}
          value={this.state.searchPokemon}
          onChange={this.handlePokemonName}/>
          <button onClick={this.searchPokemon}>{this.state.searchBarButtonTitle}</button>
        </PokemonSearchBar>
        {this.state.isSearched ? <PokemonDetails pokemonName={this.state.pokemonName} 
        pokemonDefaultBackSprite={this.state.pokemonDefaultBackSprite}
        pokemonDefaultFrontSprite={this.state.pokemonDefaultFrontSprite}
        pokemonAbilities={this.state.pokemonAbilities}
        pokemonType = {this.state.pokemonType}
        pokemonId = {this.state.getPokemonId}/> : <PokeballComponent/> }
      </AppContainer>
    );
  }
}
