import styled from 'styled-components'

const CommentsContainer = styled.main `
width: 40rem;
border: 1px solid #000000;
border-radius: 3px;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;

li {
    list-decoration: none;
}
div:last-child {
    display: flex;
}
`

export default CommentsContainer