import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const MainContainer = styled.main`
  padding-top: 20rem;

  @media (max-width: 600px) {
    padding-top: 16rem;
  }
`;

const LogoContainer = styled.p`
  font-size: 3.125rem;
  font-weight: 400;
  line-height: 7rem;
  display: flex;
  justify-content: center;
  font-family: "Roboto";
  color: #ffffff;

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
    height: 2.4rem;
    background: transparent;
    border: 2px solid #b89ed9;
    border-radius: 4px;
    font-family: "Ubuntu";
    font-weight: 600;
    color: #ffffff;

    &:first-child {
      margin-right: 5rem;
      background: #b89ed9;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export { MainContainer, LogoContainer, ButtonsContainer };
