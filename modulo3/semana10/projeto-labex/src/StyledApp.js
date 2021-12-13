import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0; 
   } 
   
   body {
    ::-webkit-scrollbar {
      width: 0px;
    }
    font-family: "Helvetica"
  }
`;

export default GlobalStyle;
