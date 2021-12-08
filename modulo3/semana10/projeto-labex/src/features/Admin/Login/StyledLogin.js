import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-self: center;
  color: #ffffff;
`;

const LogoContainer = styled.div`
  font-size: 40px;
  font-weight: 800;
  line-height: 112px;
  font-family: "Roboto";
  margin: 2rem;
  span {
    color: #b89ed9;
  }
`;

const LoginContainer = styled.form`
  margin: 8rem 18rem 0;
  background: rgba(229, 229, 229, 0.4);
  width: 22rem;
  height: 30rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Montserrat";
    font-weight: 800;
    font-size: 3rem;
    line-height: 82px;
    margin: 2rem 0 3rem;
  }
`;

const InputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background: rgba(255, 251, 251, 0.6);
    height: 2.2rem;
    width: 18rem;
    border-radius: 8px;
    padding: 0.2rem 1rem;
    margin-bottom: 2rem;
    border: none;

    ::placeholder {
      color: #000000;
      font-family: 'Montserrat';
      font-weight: bold;
    }

    :focus {
    outline: none;
    box-shadow: 0px 0px 2px 2px #b89ed9;
  }
  }
`;

const ButtonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 6.8rem;
    height: 2rem;
    margin: 0.5rem;
    color: #ffffff;
    background: transparent;
    border: 2px solid #b89ed9;
    border-radius: 4px;
    font-family: "Ubuntu";
    font-weight: 600;
  }

  button:first-child {
    background: #b89ed9;
    text-transform: uppercase;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export {
  MainContainer,
  LogoContainer,
  LoginContainer,
  InputsContainer,
  ButtonsContainer,
};
