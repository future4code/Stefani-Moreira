import React from "react";
import axios from "axios";
import CreatePlaylists from "./CreatePlaylist";
import PlaylistsScreen from "../screens/Playlists/PlaylistsScreen";
import PlaylistDetailsScreen from "../screens/PlaylistDetails/PlaylistDetailsScreen";
import { urlApi, headers } from "../../api";

export default class PlaylistScreen extends React.Component {
  state = {
    playlists: [],
    playlistName: "",
    playlistId: "",
    tracks: [],
    page: false,
  };

  /**************************** Playlists  ****************************/

  componentDidMount() {
    this.getAllPlaylists();
  }

  playlistsScreen = () => {
    this.setState({ page: !this.state.page });
  };

  getAllPlaylists = async () => {
    try {
      const res = await axios.get(urlApi, headers);
      this.setState({ playlists: res.data.result.list });
    } catch (err) {
      console.log(err.message);
    }
  };

  deletePlaylist = async (id) => {
    const question = window.confirm(
      "Tem certeza que deseja deletar esta playlist?"
    );
    if (question) {
      try {
        const res = await axios.delete(`${urlApi}/${id}`, headers);
        alert("Playlist deletada");
        this.getAllPlaylists();
        console.log(res.data);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  /**************************** TRACKS  ****************************/

  getPlaylistTracks = async (id, name) => {
    try {
      const res = await axios.get(`${urlApi}/${id}/tracks`, headers);
      this.setState({
        tracks: res.data.result.tracks,
        playlistName: name,
        playlistId: id,
        page: !this.state.page,
      });
      console.log(this.state.tracks);
    } catch (err) {
      console.log(err.message);
    }
  };

  /**************************** SCREEN  ****************************/

  render() {
    return (
      <div>
        {this.state.page ? (
          <div>
            <PlaylistDetailsScreen
              pagePlaylists={this.playlistsScreen}
              playlistName={this.state.playlistName}
              playlistId={this.state.playlistId}
              tracks={this.state.tracks}
              getPlaylistTracks={this.getPlaylistTracks}
              quantify={this.state.quantify}
              getAllPlaylists={this.getAllPlaylists}
            />
          </div>
        ) : (
          <div>
            <CreatePlaylists getAllPlaylists={this.getAllPlaylists} />
            <PlaylistsScreen
              playlists={this.state.playlists}
              getPlaylistTracks={this.getPlaylistTracks}
              deletePlaylist={this.deletePlaylist}
            />
          </div>
        )}
      </div>
    );
  }
}
