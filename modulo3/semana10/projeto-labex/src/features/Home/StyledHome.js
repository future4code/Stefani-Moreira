import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const MainContainer = styled.main`
  padding-top: 20rem;
  font-family: Roboto;
`;

const LogoContainer = styled.p`
  font-size: 50px;
  font-weight: 400;
  line-height: 112px;
  display: flex;
  justify-content: center;

  span {
    color: #b89ed9;
  }
`;

const ButtonsContainer = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;

  button {
    width: 6.8rem;
    height: 2.8rem;
    background: transparent;
    border: 2px solid #b89ed9;
    border-radius: 4px;
  }

  button:first-child {
    margin-right: 5rem;
    background: #b89ed9;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export { MainContainer, LogoContainer, ButtonsContainer };
