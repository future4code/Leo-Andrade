import React from 'react';
import styled from 'styled-components';

const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 3px black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    &:hover{
        background-color: orangered;
        color: white;
        font-weight: bold;
    }
`
const CardGrandeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const CardGrandeH4 = styled.h4`
    margin-bottom: 15px;
`
const CardGrandeImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
function CardGrande(props) {
    return (
        <CardGrandeContainer>
            <CardGrandeImg src={ props.imagem } />
            <CardGrandeDiv>
                <CardGrandeH4>{ props.nome }</CardGrandeH4>
                <p>{ props.descricao }</p>
            </CardGrandeDiv>
        </CardGrandeContainer>
    )
}

export default CardGrande;