import React from 'react';
import { GlobalStyle, MainContainer, NewPostContainer } from './StyledApp';
import Post from './components/Post/Post';

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
    inputUsuario: "",
    inputFotoPerfil: "",
    inputFotoPost: ""
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoPerfil,
      fotoPost: this.state.inputFotoPost
    }
    const novoPostUsuario = [novoPost, ...this.state.post]

    this.setState({ post: novoPostUsuario });
    this.setState({ inputUsuario:"", inputFotoPerfil:"", inputFotoPost:"" });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value });
  }
  onChangeInputFotoPerfil = (event) => {
    this.setState({ inputFotoPerfil: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }
  
  

  render() {

    const postUsuario = this.state.post.map((valor) => {
      return <Post {...valor} />
    })

    const adicionarNovoPost = 
      <NewPostContainer>
        <h2>CRIAR NOVO POST</h2>
        <input 
          value={this.state.inputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome de usuário"}
        />
        <input 
          value={this.state.inputFotoPerfil}
          onChange={this.onChangeInputFotoPerfil}
          placeholder={"Adicione a URL da foto de perfil"}
        />
        <input 
          value={this.state.inputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Adicione a URL da foto do post"}
        />
        <button onClick={this.adicionarPost}>Compartilhar</button>
      </NewPostContainer>;
    
    return (
      <div>
        <GlobalStyle />
        <MainContainer>
        {adicionarNovoPost}
        {postUsuario}
      </MainContainer>
      </div>
    );
  }
}

export default App;
