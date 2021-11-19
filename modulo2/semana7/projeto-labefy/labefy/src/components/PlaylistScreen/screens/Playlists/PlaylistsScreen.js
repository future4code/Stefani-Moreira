import React from "react";
import styled from "styled-components"

const Playlists = styled.div `
  display: flex;
  justify-content: space-between;
  width: 26%;
  margin: 20px;
`

export default class AllPlaylists extends React.Component {
  render() {
    const cardPlaylist = this.props.playlists.map((list) => {
      return (
        <Playlists onClick={() => this.props.getPlaylistTracks(list.id, list.name)}>
          <li>
            {list.name}
          </li>
          <button onClick={() => this.props.deletePlaylist(list.id)}>x</button>
        </Playlists>
      );
    });
    return <div>{cardPlaylist}</div>;
  }
}
