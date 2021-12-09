import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  color: #ffffff;
`;

const PhraseContainer = styled.section``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const CancelButton = styled.button`
  width: 6.8rem;
  height: 2rem;
  margin: 0.5rem;
  color: #ffffff;
  background: transparent;
  border: 2px solid #b89ed9;
  border-radius: 4px;
  font-family: "Ubuntu";
  font-weight: 600;
  position: absolute;
  left: 39.2rem;
  top: 30rem;
  :hover {
    opacity: 0.8;
  }
`;

export { MainContainer, PhraseContainer, FormContainer, CancelButton };
