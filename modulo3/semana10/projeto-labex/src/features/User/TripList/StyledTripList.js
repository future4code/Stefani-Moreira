import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const CardTrip = styled.div`
  background: rgba(255, 251, 251, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 8px;
  width: 18rem;
  height: 9rem;
  padding: 1.6rem 1rem;
  font-family: "Roboto";
  font-weight: 800;
  line-height: 1.4rem;
  @media (max-width: 800px) {
    height: 10.9rem;
    font-size: 1.18rem;
  }
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h2 {
    color: #b89ed9;
    margin-bottom: 3.6rem;
    font-family: "Montserrat";
    font-weight: bold;
    font-size: 2.4rem;

    @media (max-width: 800px) {
      font-size: 2rem;
      margin-right: 0.8rem;
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  margin-bottom: 0.5rem;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 0.1rem;
  }
`;

export { CardTrip, MainContainer, CardContainer };
