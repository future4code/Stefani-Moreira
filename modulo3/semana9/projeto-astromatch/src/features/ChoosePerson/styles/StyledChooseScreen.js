import styled from "styled-components";

const ImgPersonProfile = styled.div`
  width: 19.5rem;
  height: 28rem;
  border-radius: 10px;
  margin: 48px 4px;
  box-shadow: 0 0 2px 2px #dadada;
  background-image: linear-gradient(to bottom, transparent 60%, #121212 100%),
    url(${(props) => props.image});

  section {
    width: 19.5rem;
    height: 28rem;
    display: flex;
    border-radius: 10px;
    align-items: flex-start;
    justify-content: center;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    background-color: #ffffff10;
  }

  img {
    width: 19.39rem;
    height: 21rem;
    border-radius: 10px 10px 0 0;
  }
`;

const ChoiceButtons = styled.section`
  position: absolute;
  top: 28.9rem;
  left: 31rem;
  display: flex;
  align-items: center;

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    border: none;
    margin-left: 4rem;
    background: #ffffff;
  }

  img {
    width: 40%;
  }

  button:nth-child(2) {
    img {
      width: 60%;
      margin-top: 4px;
    }
  }
`;
const InfoPerson = styled.section`
  position: absolute;
  top: 24.9rem;
  left: 30.7rem;
  width: 22%;
  color: #ffffff;

  p {
    font-size: 0.9rem;
  }
`;

export { ImgPersonProfile, ChoiceButtons, InfoPerson };
