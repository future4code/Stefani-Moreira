import React from "react";
import axios from "axios";
import { MainContainer, Text } from "./styles/StyledCreatePlaylist";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "stefani-moreira-carver",
  },
};

export default class CreatePlaylists extends React.Component {
  state = {
    playlist: "",
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlist: event.target.value });
  };

  createPlaylist = async () => {
    const body = { name: this.state.playlist };
    try {
      const res = await axios.post(urlApi, body, headers);

      alert("Playlist criada");
      this.setState({ playlist: "" });
      this.props.getAllPlaylists();
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <div>
        <MainContainer>
          <h2>Crie uma nova playlist</h2>
          <input
            placeholder={"Minha playlist"}
            value={this.state.playlist}
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
          <button onClick={() => this.props.pagePlaylists()}>
            Acessar Playlists
          </button>
        </MainContainer>
        <Text>
          <h3>*Instruções</h3>
          <p>
            Acesse a sua biblioteca e clique na playlist que deseja adicionar
            uma música.
          </p>
          <p>
            Pode ser adicionada música do streaming que desejar (recomendamos
            Spotify).
          </p>
        </Text>
      </div>
    );
  }
}
