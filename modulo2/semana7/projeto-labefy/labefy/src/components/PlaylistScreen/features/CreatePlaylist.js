import React from "react";
import axios from "axios";
import { urlApi, headers } from "../../api";

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
      console.log(res.data);
      this.setState({ playlist: "" });
      this.props.getAllPlaylists();
    } catch (err) {
      alert(err.res);
    }
  };

  render() {
    return (
      <div>
        <input
          placeholder={"Informe o nome da playlist"}
          value={this.state.playlist}
          onChange={this.onChangePlaylistName}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}
