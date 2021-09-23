import styled from 'styled-components';
import React from 'react';

const PokemonDetailsContainer = styled.div`
    max-width: 100%;
    height: 300px;
    margin-top: 8px;
    padding: 10px;
    h3{
        margin-bottom: 0;
    }
`
const PokemonImages = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const PokemonAbilities = styled.div`
    display: flex;
    flex-direction: column;
    li{
        list-style-type: none;
        font-style: italic;
    }
    h4{
        margin: 0;
    }
`
const PokemonType = styled.div`
    display: flex;
    flex-direction: column;
    h4{
        margin: 0;
    }
    p{
        margin-top: 0;
    }
`
const PokemonName = styled.div`
    display: flex;
    justify-content: space-between;
`
export default class PokemonDetails extends React.Component{
    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    render(){
        return <PokemonDetailsContainer>
            <PokemonName>
                <h3>{this.props.pokemonName}</h3>
                <h3>#{this.props.pokemonId}</h3>
            </PokemonName>
            <PokemonImages>
                <img src={this.props.pokemonDefaultFrontSprite} alt={`${this.props.pokemonName} default front`}/>
                <img src={this.props.pokemonDefaultBackSprite} alt={`${this.props.pokemonName} default back`}/>
            </PokemonImages>
            <PokemonType>
                <h4>Type</h4>
                <p>{this.props.pokemonType}</p>
            </PokemonType>
            <PokemonAbilities>
                <h4>Abilities</h4>
                {this.props.pokemonAbilities.map( (ability) => {
                    return <li key={ability}>{ability}</li>
                })}
            </PokemonAbilities>
        </PokemonDetailsContainer>
    }
}