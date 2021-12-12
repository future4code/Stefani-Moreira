import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const LoadingContainer = styled.div`
  padding: 12rem 2rem;
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

  @media (max-width: 800px) {
    padding: 12rem 1rem 0;
}
`;

const RocketLoading = styled.img`
  padding-left: 4rem;
  width: 100px;
  height: 100px;
  animation: infinite-spinning 2s infinite;
  animation-timing-function: linear;
  transform-origin: 335% 500%;

  @keyframes infinite-spinning {
    from {
      transform: rotate(10deg);
    }
    to {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 800px) {
    padding-left: 0rem;
    width: 70px;
    height: 70px;
    @keyframes infinite-spinning {
    from {
      transform: rotate(2deg);
    }
    to {
      transform: rotate(50deg);
    }
  }
}
`;

export { LoadingContainer, RocketLoading };
