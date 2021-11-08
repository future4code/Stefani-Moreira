import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  body {
    background-color: #f7f4f4;
    color: #40514E;
  }
`
const MainContainer = styled.div `
  margin: 5% 0 5% 37%;
  width:25%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #fafafa;

  button {
    margin: 0px 30px ;
    position: relative;
    top: 80px;
    padding: 6px 10px;
    border-radius: 10px;
    border: none;
    background-color: #d5caca;

    :hover {
      border: 1px solid #d5caca;
      background-color: #f7f4f4;
    }
  }
`

export { GlobalStyle, MainContainer };