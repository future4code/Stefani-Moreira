import styled from "styled-components";

const Playlists = styled.div`
  display: flex;
  align-items: center;
  background-color: #372b27;
  width: 10rem;
  height: 14rem;
  margin: 20px 0 5px;
`;
const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5px;
`;

const ImagePlaylist = styled.img`
  width: 98%;
  margin: 10px;
`;

const HeadingPlaylist = styled.h4`
  word-wrap: break-word;
  font-size: 0.9rem;
`;

const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 0.5rem 1rem 10rem;
`;

const DeleteButton = styled.button`
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  background-color: #043262;
  text-align: center;
  margin-left: 2rem;

  :hover {
    opacity: 0.4;
  }
`;

export {
  Playlists,
  PlaylistCard,
  ImagePlaylist,
  HeadingPlaylist,
  PlaylistsContainer,
  DeleteButton,
};
