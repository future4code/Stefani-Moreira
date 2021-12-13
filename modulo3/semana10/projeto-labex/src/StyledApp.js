import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
   } 
   
   body {
    font-family: "Helvetica"
  }
  @media (max-width: 800px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;

export default GlobalStyle;
