import styled from "styled-components";

const GeneralContainer = styled.div`
  background: #daeacf;
  min-heigth: 100vh;
`;

const MainContainer = styled.main`
  margin: 2rem 0.5rem;
  background: #ffffff;
  width: 40%;

  h2,
  p {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  h2 {
    padding-top: 4rem;
  }

  p span {
    color: #529198;
    cursor: pointer;
  }
`;

const FormContainer = styled.form`
  margin: 1rem 6rem;
`;
export { GeneralContainer, MainContainer, FormContainer };