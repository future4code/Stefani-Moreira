import styled from 'styled-components';

const MessageContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color:#ffff;
    padding: 0.7rem;
    margin: 0 70% 1% 1%;
    border-radius: 0.7rem;
    max-width: 30%;
    word-wrap: break-word;
`
const MessageContainerMe = styled.div `
    background-color: #eeffde;
    padding: 0.7rem;
    margin: 0 1% 1% 70%;
    border-radius: 0.7rem;
    max-width: 30%;
    word-wrap: break-word;
`

const UserName = styled.h4 `
    font-weight: bold;
    color: palevioletred
`

const MessageArea = styled.div `
    height: 3.75rem;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;

    input {
        border: none;
        border-radius: 6.3rem;
    }
`

const InputName = styled.input ` 
    margin: 1.9rem 0 1.9rem 0.7rem;
    width: 5rem;
    height: 2.5rem;
    padding-left: 1.57rem;

`

const InputMessage = styled.input `
    margin: 1.9rem 1.3rem;
    width: 36.9rem;
    height: 2.5rem;
    padding-left: 1.3rem;
`

const ButtonChat = styled.img `
    cursor: pointer;
    :hover {
        opacity: 0.5
    }
`

export { MessageContainer, MessageContainerMe, UserName, MessageArea, InputName, InputMessage, ButtonChat };