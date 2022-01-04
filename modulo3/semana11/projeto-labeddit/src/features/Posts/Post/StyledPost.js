import styled from 'styled-components'

const MainContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 6rem;
width: 80%;

h3 {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
}

`

const PostContainer = styled.main `
width: 40rem;
border: 1px solid #000000;
border-radius: 3px;
margin: 1rem;
display: flex;
justify-content: space-between;
padding: 1rem;

div:first-child{
    cursor: pointer;
}

`

export { MainContainer, PostContainer }