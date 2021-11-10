import React from 'react'
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto, IconsContadores } from './StyledPost'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share_black_24dp.svg'
import iconeSalvarBranco from '../../img/bookmark_border_black_24dp.svg'
import iconeSalvarPreto from '../../img/bookmark_black_24dp.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
  }

  onClickCurtida = () => {
    let curtidaAtual;

    if(!this.state.curtido) {
      curtidaAtual = this.state.numeroCurtidas + 1
      console.log('Curtiu!')
    } else {
      curtidaAtual = this.state.numeroCurtidas - 1
      console.log('Descurtiu!')
    }

    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: curtidaAtual
    });
    
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
    });
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconsContadores>
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
            icone={iconeCompartilhar}
          />
        </IconsContadores>
        <IconsContadores>
          <IconeComContador 
            icone={iconeSalvar}
            onClickIcone={this.onClickSalvar}
          />
        </IconsContadores>
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post