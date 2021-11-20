import styled from "styled-components";

const Playlists = styled.div `
  display: flex; 
  align-items: center;
  background-color: #372b27;
  width: 30%;
  height: 5rem;
  margin: 20px 0;
`
const PlaylistCard = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5px;
`

const ImagePlaylist = styled.img `
  width: 24%;
  margin: 10px
`

const HeadingPlaylist = styled.h4 `
  word-wrap: break-word;
  font-size: 0.9rem;
  width: 60%;
  text-align: justify
`

const PlayButton = styled.img `
width: 30px;
margin: 0 0.2rem 0 1rem;
`

export { Playlists, PlaylistCard, ImagePlaylist, HeadingPlaylist, PlayButton  }