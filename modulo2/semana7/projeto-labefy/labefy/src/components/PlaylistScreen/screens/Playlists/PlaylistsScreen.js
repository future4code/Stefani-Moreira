import React from "react";
import { Playlists, PlaylistCard, ImagePlaylist, HeadingPlaylist, PlayButton } from './StyledPlaylistScreen'
import Play from './img/play-button.png'

export default class AllPlaylists extends React.Component {

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  componentDidMount() {
    this.props.getAllPlaylists();
    this.props.getPlaylistTracks();
  }

  render() {
    const cardPlaylist = this.props.playlists.map((list) => {
      return (
        <Playlists>
          <PlaylistCard onClick={() => this.props.getPlaylistTracks(list.id, list.name)}>
            <ImagePlaylist src={`https://picsum.photos/200/200/?a=${this.randomNumber()}`} alt="Imagem"/>
            <HeadingPlaylist>
              {list.name}
            </HeadingPlaylist>
            <PlayButton src={ Play } alt="Ícone play" />
          </PlaylistCard>
          {/* <DeleteButton onClick={() => this.props.deletePlaylist(list.id)}>x</DeleteButton> */}
        </Playlists>
      );
    });

    return <div>
    {cardPlaylist}
    </div>;
  }
}
