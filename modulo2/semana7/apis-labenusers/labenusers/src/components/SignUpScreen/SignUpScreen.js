import React from "react";
import axios from "axios";
import {ButtonPages} from "../../GeneralStyles";
import MainContainer from "./Styles";

export default class SignUpScreen extends React.Component {
  state = {
    userName: "",
    userEmail: "",
  };

  onChangeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeUserEmail = (event) => {
    this.setState({ userEmail: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "stefani-moreira-carver",
          },
        }
      )
      .then(() => {
        alert("Usuário cadastrado!");
        this.setState({ userName: "", userEmail: "" });
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  render() {
    return (
      <div>
        <ButtonPages onClick={this.props.pageUsers}>Lista de Usuários</ButtonPages>
        <MainContainer>
            <h2>Cadastro de Usuário</h2>
            <input
            placeholder={"Informe o nome do usuário"}
            value={this.state.userName}
            onChange={this.onChangeUserName}
            />
            <input
            placeholder={"Informe o e-mail do usuário"}
            value={this.state.userEmail}
            onChange={this.onChangeUserEmail}
            />
            <button onClick={this.createUser}>Adicionar</button>
        </MainContainer>
      </div>
    );
  }
}
