import styled from 'styled-components';
import React from 'react';

const PokeballComponentContainer = styled.div`
    max-width: 100%;
    height: 300px;
    margin-top: 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 250px;
        height: 220px;
    }
`
export default class PokeballComponent extends React.Component{
    render(){
        return <PokeballComponentContainer>
            <img src={'https://www.pngall.com/wp-content/uploads/4/Pokeball-Transparent.png'} alt='Pokeball'/>
        </PokeballComponentContainer>
    }
}