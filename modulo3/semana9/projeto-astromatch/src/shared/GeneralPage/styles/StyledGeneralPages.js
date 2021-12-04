import styled from "styled-components";

const MainContainer = styled.main`
  border: 1px solid pink;
  border-radius: 10px;
  width: 20rem;
  height: 34rem;
  margin: 1rem 30rem 4rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
  }
  background: #ffffff;

  details {
    position: absolute;
    top: 0.6rem;
    left: 48rem;

    summary {
      list-style: none;
      cursor: pointer;
      font-size: 2rem;
    }

    button {
      position: absolute;
      right: 0rem;
      z-index: 3;
      width: 5rem;
      background: #f2f2f2;
      border: none;
    }
  }
`;

const NoProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 26rem;
  margin-top: 3rem;

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

  img {
    margin-top: 0.5rem;
    width: 8%;
    cursor: pointer;
  }
`;

const ChangePageButtons = styled.section`
  position: fixed;
  bottom: 6rem;
  width: 19.9rem;
  height: 2.6rem;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 10px 10px;

  img {
    width: 10%;
    margin: 0 2rem;
    cursor: pointer;
  }
`;

const Logo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 23.4%;
  margin-left: px;
  position: fixed;
  border-radius: 10px 10px 0px 0px;

  div {
    border-bottom: 1px solid #dadada;
    width: 96%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 40%;
  }
`;

export { MainContainer, NoProfileContainer, ChangePageButtons, Logo };
