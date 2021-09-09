import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeLoyaltyPreto from '../../img/loyalty-black.svg'
import iconeSendPreto from '../../img/send-black.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoEnviar, secaoEnviar } from '../SecaoEnviar/SecaoEnviar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-top: 20px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    numeroFavoritos: 0,
    enviando: false
  }

  onClickFavorito = () => {
    this.setState({favorito: !this.state.favorito})
    if(this.state.favorito === false){
      this.setState({numeroFavoritos: this.state.numeroFavoritos + 1})
    }
    else{
      this.setState({numeroFavoritos: this.state.numeroFavoritos - 1})
    }
  }
  onClickSend = () => {
    this.setState({
      enviando: !this.state.enviando
    })
  }

  onClickCurtida = () => {
    this.setState({curtido: !this.state.curtido})
    if(this.state.curtido === false){
      this.setState({numeroCurtidas: this.state.numeroCurtidas + 1})
    }
    else{
      this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida
    let iconeFavorito
    let iconeSend

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.favorito){
      iconeFavorito = iconeLoyaltyPreto
    }
    else{
      iconeFavorito = iconeCoracaoBranco
    }
    iconeSend = iconeSendPreto


    let componenteComentario
    let componenteEnviar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    if(this.state.enviando){
      componenteEnviar = <SecaoEnviar aoEnviar={this.onClickSend}></SecaoEnviar>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
          valorContador={this.state.numeroFavoritos}
        />
        <IconeComContador
          icone={iconeSend}
          onClickIcone={this.onClickSend}
        />
      </PostFooter>
      {componenteComentario}
      {componenteEnviar}
    </PostContainer>
  }
}

export default Post