import styled from "styled-components";

const ImgPersonMatches = styled.div`
  width: 9rem;
  height: 10rem;
  display: flex;
  align-items: center;
  img {
    width: 9rem;
    height: 9rem;
    border-radius: 4px;
    box-shadow: 0 0 2px 2px #dadada;
  }
`;
const MatchesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 1rem;
  align-content: center;
  margin: 4rem 0.55rem 3rem;

  li {
    list-style: none;
    margin: 1px 0 5px;
    text-align: center;
  }
`;

const NoMatchesContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 26rem;
  margin-top: 2rem;

  iframe {
    width: 280px;
    height: 280px;
    border: 0px;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
`

export { ImgPersonMatches, MatchesContainer, NoMatchesContainer };
