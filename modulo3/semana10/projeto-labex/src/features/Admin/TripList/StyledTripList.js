import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  color: #ffffff;

  h2 {
    text-align: center;
    margin: 1rem 0 1.4rem;
  }
`;

const TripCard = styled.section`
  background: rgba(184, 158, 217, 0.6);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  margin: 0.5rem 29.6rem;
  display: flex;
  justify-content: space-between;
  width: 30%;
  text-transform: uppercase;
  cursor: pointer;

  div {
      width: 88%;
      height: 100%;
      padding: 1.6rem 1rem;
      font-weight: bold;
  }

  img {
    width: 5%;
    padding-right: 1rem;
  }
`;

export { MainContainer, TripCard };
