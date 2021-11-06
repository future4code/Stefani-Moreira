import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NewPostContainer = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 1.3rem;
    margin: 10px;

    h2 {
      text-align: center;
      font-weight: 400
    }
    
    input {
      width: 250px;
      margin-top: 5px
    }

    button {
      width: 90px;
      position: relative;
      left: 80px;
      margin-top: 10px;
      border: 1px solid gray;
      border-radius: 5px;
      background-color: #D3E4CD;
    }
`

export { GlobalStyle, MainContainer, NewPostContainer };
