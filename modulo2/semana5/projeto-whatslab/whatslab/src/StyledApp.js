import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
    }
`

const ChatContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid black;
    width: 60%;
    height: 39.7rem;
    margin: 0.7rem 0 0 16.3rem;
    background-color: #e5ddd5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export { GlobalStyle, ChatContainer };