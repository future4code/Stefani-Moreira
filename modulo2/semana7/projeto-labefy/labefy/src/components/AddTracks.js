import React from "react";
import axios from "axios";
import {
  AddContainer,
  ContainerItems,
  MainContainer,
  Text,
} from "./styles/StyledAddTracks";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "stefani-moreira-carver",
  },
};

export default class AddTracks extends React.Component {
  state = {
    name: "",
    artist: "",
    urlTrack: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };
  onChangeURL = (event) => {
    this.setState({ urlTrack: event.target.value });
  };

  addTrackToPlaylist = async (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.urlTrack,
    };
    try {
      const res = await axios.post(
        `${urlApi}/${this.props.playlistId}/tracks`,
        body,
        headers
      );

      alert("Musica adicionada.");
      this.setState({ name: "", artist: "", urlTrack: "" });
      this.props.getPlaylistTracks(this.props.playlistId);
    } catch (err) {
      alert(err.response.message);
    }
  };

  render() {
    return (
      <AddContainer>
        <button onClick={this.props.closeAddPage}>X</button>
        <ContainerItems>
          <MainContainer>
            <input
              placeholder={"Informe o nome da música"}
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <input
              placeholder={"Informe o artista da música"}
              value={this.state.artist}
              onChange={this.onChangeArtist}
            />
            <input
              placeholder={"Informe a url da música"}
              value={this.state.urlTrack}
              onChange={this.onChangeURL}
            />
            <button onClick={() => this.addTrackToPlaylist()}>Adicionar</button>
          </MainContainer>
          <Text>
            <h4>*Instruções</h4>
            <p>
              No streaming da sua preferência, clique em compartilhar na música
              que deseja e então escolha a opção de incorporar faixa. Copie
              apenas a URL que for fornecida.
            </p>
            <details>
              <summary>Spotify</summary>
              <p> É necessário por "embed" antes do /track</p>
              <p>
                Exemplo de link:
                https://open.spotify.com/embed/track/2ph6BRhGcUzc2W9wIulG5k?si=de5b70868c554d87
              </p>
            </details>
            <details>
              <summary>Deezer</summary>
              <p>
                É necessário por widget antes do nome .deezer e antes do tema
                escolhido para a música.
              </p>
              <p>
                Exemplo de link:
                https://widget.deezer.com/widget/dark/track/908604612
              </p>
            </details>
            <details>
              <summary>Apple Music</summary>
              <p>É necessário por embed antes do .music</p>
              <p>
                Exemplo de link:
                https://embed.music.apple.com/br/album/oh-my-god/1590035691?i=1590036031
              </p>
            </details>
          </Text>
        </ContainerItems>
      </AddContainer>
    );
  }
}
