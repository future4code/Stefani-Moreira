import styled from 'styled-components';

const MainContainer = styled.div `
margin: 2% 0 0 10%;
  h2{
      margin: 20px 0;
      color: #D9B7B5;
  }
`

const StyledUsername = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  margin-top: 10px;

  li {
    list-style: none;
    font-size: 1.1rem;
  }
  button {
    padding: 4px 8px;
    border-radius: 5px;
    border: none;
    background-color: #D8C5D2;
    :active {
      border: 1px solid #d5caca;
      background-color: #f7f4f4;
    }
  }
`

export { MainContainer, StyledUsername }