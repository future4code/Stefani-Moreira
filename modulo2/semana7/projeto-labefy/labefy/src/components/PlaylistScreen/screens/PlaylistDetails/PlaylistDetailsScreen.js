import React from "react";
import axios from 'axios';
import { urlApi, headers } from "../../../api";
import AddTrack from "../../features/AddTracks";
import LeftButton from './img/left-chevron.png';
import { PlaylistContainer, TrackCard, LeftButtonContainer } from './StyledDetails'

export default class PlaylistDetailsScreen extends React.Component {
 
  componentDidMount() {
    this.props.getPlaylistTracks();
  }

  removeTrackFromPlaylist = async (id) => {
    const question = window.confirm("Tem certeza que deseja deletar esta música?")
    if(question) {
      try {
        const res = await axios.delete(`${urlApi}/${this.props.playlistId}/tracks/${id}`, headers)
        alert("Música deletada");
        console.log(res.data)
        this.props.getPlaylistTracks(this.props.playlistId)
      } catch (err) {
        alert(err.res.data.message)
      }
    }
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  render() {
    const showTracks = this.props.tracks.map((tracks) => {
      return (
        <TrackCard key={tracks.id}>
          <iframe src={tracks.url} width="30%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="Song"></iframe>
          <button onClick={() => this.removeTrackFromPlaylist(tracks.id)}>x</button>
        </TrackCard>
      );
    });

    return (
      <div>
      <LeftButtonContainer>
        <img src={LeftButton} alt="Ícone de flecha" onClick={this.props.pagePlaylists} />
      </LeftButtonContainer>
        <PlaylistContainer>
          <img src={`https://picsum.photos/200/200/?a=${this.randomNumber()}`} alt="Imagem"/>
          <li>{this.props.playlistName}</li>
          <button onClick={() => this.props.deletePlaylist(this.props.playlistId)}>x</button>
        </PlaylistContainer>
        <details>
        <summary>Adicionar Música</summary>
            <AddTrack getPlaylistTracks={this.props.getPlaylistTracks}
              playlistId={this.props.playlistId}
            />
        </details>
        {showTracks}
      </div>
    );
  }
}
