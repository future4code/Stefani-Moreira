import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  font-family: "Roboto";
  color: #ffffff;
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

export { MainContainer, PendingCard };
