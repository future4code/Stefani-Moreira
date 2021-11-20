import React from "react";
import { SideBarContainer, FirstContainer, FirstContainerItem, SecondContainer, SecondContainerItem, AddStyle, HeartStyle, PodcastContainer } from "./StyledSidebar";
import Home from './img/home.png'
import Search from './img/search.png'
import Library from './img/biblioteca.png'

export default class Sidebar extends React.Component {
  render() {

    return (
      <SideBarContainer>
        <div>
          <h1>Labefy</h1>
        </div>
        <FirstContainer>
        <FirstContainerItem onClick={() => this.props.pagePlaylists()}>
          <img src={ Home } alt="Ícone home"/>
          <h4>Início</h4>
        </FirstContainerItem>
        <FirstContainerItem>
        <img src={ Search } alt="Ícone home"/>
          <h4>Buscar</h4>
        </FirstContainerItem>
        <FirstContainerItem onClick={() => this.props.pagePlaylists()}>
        <img src={ Library } alt="Ícone home"/>
          <h4>Sua Biblioteca</h4>
        </FirstContainerItem>
        </FirstContainer>
        <SecondContainer>
        <SecondContainerItem onClick={() => this.props.pageCreatePlaylists()}>
          <AddStyle>+</AddStyle>
          <h4>Criar playlist</h4>
        </SecondContainerItem>
        <SecondContainerItem>
          <HeartStyle>❤</HeartStyle>
          <h4>Músicas Curtidas</h4>
        </SecondContainerItem>
        </SecondContainer>
        <PodcastContainer>
        </PodcastContainer>
        {/* <div>{playlistsScreen}</div> */}
      </SideBarContainer>
    );
  }
}
