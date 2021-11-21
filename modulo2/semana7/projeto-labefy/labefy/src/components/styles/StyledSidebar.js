import styled from "styled-components";

const SideBarContainer = styled.div`
  background-color: #000000;
`;

const FirstContainer = styled.div`
  margin: 2rem 0;
`;

const FirstContainerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }

  img {
    width: 12%;
    margin-right: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`;

const SecondContainer = styled.div`
  margin-bottom: 2rem;
`;

const SecondContainerItem = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 5px;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }

  h4 {
    font-size: 0.86rem;
    margin-left: 1.2rem;
  }
`;

const AddStyle = styled.span`
  font-size: 1.3rem;
  background-color: #ffffff;
  color: #000000;
  width: 5.2%;
  padding: 0 6px;
`;

const HeartStyle = styled.span`
  font-size: 1.3rem;
  background: linear-gradient(#e66465, #9198e5);
  color: #ffffff;
  width: 6%;
  padding: 0 8.5px 0 2px;
`;

const PlaylistsTitle = styled.h4`
  width: 90%;
  margin: 0.5rem 0.8rem 0;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

const ContainerItems = styled.div`
  position: fixed;
  width: 16%;
  margin-left: 1.2rem;

  h1 {
    margin: 2rem;
  }
`;

export {
  SideBarContainer,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  AddStyle,
  HeartStyle,
  PlaylistsTitle,
  ContainerItems,
};
