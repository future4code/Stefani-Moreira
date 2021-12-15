import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  font-family: "Roboto";
  padding: 2rem 4rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.6rem;
  }
`;

const PhraseContainer = styled.section`
  width: 48%;
  font-weight: 600;
  margin-top: 10rem;

  p {
    &:first-child {
      font-size: 2rem;
    }
    &:last-child {
      margin-top: 1.6rem;
      font-size: 1.4rem;
      color: #b89ed9;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
    margin-top: 1.6rem;
    p {
      &:first-child {
        font-size: 1.4rem;
      }

      &:last-child {
        margin-left: 10rem;
        margin-top: 0.4rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #b89ed9;
    font-family: "Roboto";
    margin-bottom: 2rem;
  }

  input,
  select {
    background: rgba(196, 196, 196, 0.4);
    border-radius: 6px;
    padding: 0.2rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid #b89ed9;
    color: #ffffff;
    :focus {
      outline: none;
      box-shadow: 0px 0px 2px 2px #b89ed9;
    }
  }

  input {
    height: 2.2rem;
    width: 20.4rem;

    ::placeholder {
      color: #ffffff;
      font-family: "Montserrat";
      font-weight: bold;
    }
  }

  select {
    height: 2.6rem;
    width: 22.4rem;
    font-family: "Montserrat";
    font-weight: bold;

    option {
      font-family: "Montserrat";
      font-weight: bold;
      color: #000000;
    }
  }

  button {
    width: 6.8rem;
    height: 2rem;
    margin: 0.5rem 4rem;
    color: #ffffff;
    background: #b89ed9;
    text-transform: uppercase;
    border: 2px solid #b89ed9;
    border-radius: 4px;
    font-family: "Ubuntu";
    font-weight: 600;

    :hover {
      opacity: 0.8;
    }
  }
`;

export { MainContainer, PhraseContainer, FormContainer };
