import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const LoadingContainer = styled.div`
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Ubuntu";
    color: #b89ed9;
    font-size: 2rem;
  }
`;

const RocketLoading = styled.img`
  width: 100px;
  height: 100px;
  animation: infinite-spinning 2s infinite;
  animation-timing-function: linear;
  transform-origin: 335% 500%;

  @keyframes infinite-spinning {
    from {
      transform: rotate(2deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export { LoadingContainer, RocketLoading };
