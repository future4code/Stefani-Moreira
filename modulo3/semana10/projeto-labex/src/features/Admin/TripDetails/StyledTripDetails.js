import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 8rem;
  font-family: "Roboto";
  color: #ffffff;
  backdrop-filter: blur(1px);
`;

const TripCard = styled.section`
  font-weight: bold;
  line-height: 1.6rem;
  margin-bottom: 1.8rem;
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  div {
    width: 60%;
  }

  button {
    width: 5rem;
    height: 2rem;
    margin: 0.5rem 0;
    color: #ffffff;
    background: rgba(184, 158, 217, 0.6);
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 4px;
    font-family: "Ubuntu";
  }
  button:hover {
    opacity: 0.8;
  }
`;

const ApprovedContainer = styled.div`
font-weight: bold;
  h2 {
    color: #b89ed9;
    margin-bottom: 0.6rem;
  }
`;

const PendingCard = styled.section`
  background: rgba(196, 196, 196, 0.6);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 2px solid rgba(184, 158, 217, 0.6);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 18rem;
  height: 10rem;
  line-height: 1.4rem;
  margin: 1rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    margin-top: 0.6rem;
    img {
      width: 8%;
    }
  }
`;

const PedingContainer = styled.div`
    font-weight: bold;
  h2 {
    margin-bottom: 0.6rem;
  }
`;

export {
  MainContainer,
  TripCard,
  ApprovedContainer,
  PendingCard,
  PedingContainer,
};
