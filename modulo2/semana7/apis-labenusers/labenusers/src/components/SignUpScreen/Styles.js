import styled from 'styled-components';

const MainContainer = styled.div `
margin: 12% 0 5% 38%;
  width:20%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: #fafafa;

  h2{
      margin: 20px 0;
      color: #D9B7B5;
  }

  input:first-child {
      margin-top: 4rem;
  }

  input {
      width: 240px;
      margin: 5px;
      border-style: solid;
    border-width: 0px 0px 1px;
    background-color: transparent;
  }

  button {
    margin: 10px 30px ;
    padding: 6px 10px;
    border-radius: 10px;
    border: none;
    background-color: #d5caca;
    :hover {
      border: 1px solid #d5caca;
      background-color: #f7f4f4;
    }
  }
`

export default MainContainer