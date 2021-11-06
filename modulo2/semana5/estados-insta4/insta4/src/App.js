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
  state = {
    post: [
      {
        nomeUsuario: 'paulinhaofc',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'thiago.fit',
        fotoUsuario: 'https://picsum.photos/50/49',
        fotoPost: 'https://picsum.photos/200/150'
      },
  
      {
        nomeUsuario:'namaria_flores',
        fotoUsuario: 'https://picsum.photos/50/58',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    valorInputUsuario: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPostUsuario = [novoPost, ...this.state.post]

    this.setState({ post: novoPostUsuario })
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  }
  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }
  
  

  render() {

    const postUsuario = this.state.post.map((valor) => {
      return <Post {...valor} />
    })

    const novoPostAdicionar = 
      <div>
            <input 
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome de usuário"}
            />
            <input 
              value={this.state.valorInputFotoPerfil}
              onChange={this.onChangeInputFotoPerfil}
              placeholder={"Adicione a foto de perfil"}
            />
            <input 
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Adicione a foto do post"}
            />
            <button onClick={this.adicionarPost}>Compartilhar</button>
          </div>
    
    return (
      <MainContainer>
        {novoPostAdicionar}
        {postUsuario}
      </MainContainer>
    );
  }
}

export default App;
