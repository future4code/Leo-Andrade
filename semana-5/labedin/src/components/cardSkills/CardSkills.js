import React from "react";
import styled from "styled-components";

const CardSkillsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 1px 1px 3px black;
    height: 100px;
    &:hover{
        background-color: orangered;
        color: white;
        font-weight: bold;
    }
`
const CardSkillsImg = styled.img`
    width: 70px;
    margin-right: 10px;
    &:hover{
        filter: brightness(1.3);
    }
`
const CardSkills = (props) => {
    return (
        <CardSkillsDiv>
            <CardSkillsImg src={props.htmlIcon} alt='Ícone Html'/>
            <CardSkillsImg src={props.jsIcon} alt='Ícone Javascript'/>
            <CardSkillsImg src={props.cssIcon} alt='Ícone Css'/>
            <CardSkillsImg src={props.reactIcon} alt='Ícone React'/>
        </CardSkillsDiv>
    )
}

export default CardSkills