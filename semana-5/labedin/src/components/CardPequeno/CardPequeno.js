import React from 'react';
import styled from 'styled-components';

const CardPequenoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-shadow: 1px 1px 3px black;
    margin-top: 10px;
    &:hover{
        background-color: orangered;
        color: white;
        font-weight: bold;
    }
`
const CardPequenoIcone = styled.img`
    width: 70px;
    margin-right: 10px;
`
const CardPequenoP = styled.p`
    padding-left: 10px;
`
export const CardPequeno = (props) => {
    return <CardPequenoDiv>
                <CardPequenoIcone src={props.icon} alt='Email icon'/>
                <CardPequenoP>{props.texto}</CardPequenoP>
    </CardPequenoDiv>
}
