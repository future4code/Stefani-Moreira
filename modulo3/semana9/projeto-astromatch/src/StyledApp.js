import { createGlobalStyle } from "styled-components";
import "./assets/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu'; 
  }

  body {
    background: #e5ddd5;
  }
`;

export default GlobalStyle;
