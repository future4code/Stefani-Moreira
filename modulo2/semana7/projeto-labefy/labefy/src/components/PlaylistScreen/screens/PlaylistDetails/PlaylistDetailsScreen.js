import React from "react";
import AddTrack from "../../features/AddTracks"

export default class PlaylistDetailsScreen extends React.Component {
  componentDidMount() {
    this.props.getPlaylistTracks();
  }

  render() {
    const showTracks = this.props.tracks.map((tracks) => {
      return (
        <div key={tracks.id}>
          <li>{tracks.name}</li>
          <li>{tracks.artist}</li>
          <audio src={tracks.url} controls/>
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.props.pagePlaylists}>Voltar</button>
        {showTracks}
        <AddTrack getPlaylistTracks={this.props.getPlaylistTracks}/>
      </div>
    );
  }
}
