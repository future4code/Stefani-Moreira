import React from "react";
import axios from "axios";
import {ButtonPages} from "../../GeneralStyles";
import { MainContainer, StyledUsername } from "./StylesList";

export default class UsersListScreen extends React.Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "stefani-moreira-carver",
          },
        }
      )
      .then((res) => {
        this.setState({ usersList: res.data });
      })
      .catch((err) => {
        alert(err.res);
      });
  };

  deleteUser = (id) => {
    const question = window.confirm("Deseja deletar o usuário?");
    if (question) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "stefani-moreira-carver",
            },
          }
        )
        .then(() => {
          alert("Usuário deletado");
          this.getAllUsers();
        })
        .catch((err) => {
          alert(err.res);
        });
    }
  };

  render() {
    const showUsers = this.state.usersList.map((user) => {
      return (
        <StyledUsername>
          <li key={user.id}>
             {user.name}
          </li>
          <button onClick={() => this.deleteUser(user.id)}> x </button>
        </StyledUsername>
      );
    });
    return (
      <div>
        <ButtonPages onClick={this.props.pageSingUp}>Cadastro</ButtonPages>
        <MainContainer>
          <h2>Lista de Usuários</h2>
          {showUsers}
        </MainContainer>
      </div>
    );
  }
}
