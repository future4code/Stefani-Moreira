import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  padding: 2rem 4rem;

  h2 {
    color: #b89ed9;
    font-family: "Ubuntu";
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input,
  select {
    background: rgba(196, 196, 196, 0.4);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 6px;
    padding: 0.2rem 1rem;
    margin-bottom: 1.6rem;
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

  input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(1);
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
    margin: 0.5rem;
    color: #ffffff;
    background: #b89ed9;
    border: 2px solid #b89ed9;
    border-radius: 4px;
    font-family: "Ubuntu";
    font-weight: 600;
  }

  button:hover {
    opacity: 0.8;
  }
`;


export { MainContainer, FormContainer };
