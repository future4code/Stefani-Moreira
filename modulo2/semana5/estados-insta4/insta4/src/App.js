import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinhaofc'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'thiago.fit'}
          fotoUsuario={'https://picsum.photos/50/49'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'namaria_flores'}
          fotoUsuario={'https://picsum.photos/50/58'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </MainContainer>
    );
  }
}

export default App;
