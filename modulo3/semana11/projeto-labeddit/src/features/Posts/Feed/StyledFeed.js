import styled from 'styled-components'

const MainContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

input {
    margin: 0.8rem;
    width: 40.8rem;
    height: 2rem;
}
`

const PostContainer = styled.section `
width: 39rem;
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