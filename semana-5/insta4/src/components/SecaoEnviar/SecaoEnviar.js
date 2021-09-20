import React, {Component} from 'react'
import styled from 'styled-components'
import instagramLogo from '../../img/instagram-logo.png'
import facebbokLogo from '../../img/facebook-logo.png'
import twitterLogo from '../../img/twitter-logo.png'

const EnviarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
`
const IconeRedeSocial = styled.img`
    width: 24px;
    height: 24px;
`
const InputEnviar = styled.div`
    width: 100%;
`
export class SecaoEnviar extends Component {
    mensagemTwitter = 'Post compartilhado no Twitter'
    mensagemFacebook = 'Post compartilhado no Facebook'
    mensagemInstagram = 'Post compartilhado no Instagram'
    alertaTwitter = () => {
        console.log(this.mensagemTwitter)
        alert(this.mensagemTwitter)
    }
    alertaFacebook = () => {
        console.log(this.mensagemFacebook)
        alert(this.mensagemFacebook)
    }
    alertaInstagram = () => {
        console.log(this.mensagemInstagram)
        alert(this.mensagemInstagram)
    }
    render(){
        return <div>
            <EnviarContainer>
                <IconeRedeSocial src= {instagramLogo} onClick={this.alertaInstagram}/>
                <IconeRedeSocial src={facebbokLogo} onClick={this.alertaFacebook}/>
                <IconeRedeSocial src={twitterLogo} onClick={this.alertaTwitter}/>
            </EnviarContainer>
        </div>
    }
}