import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  LogoContainer,
  LoginContainer,
  InputsContainer,
  ButtonsContainer,
} from "./StyledLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const body = {
      email: email,
      senha: password,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/home");
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const navigate = useNavigate();

  return (
    <MainContainer>
      <LogoContainer>
        <h2 onClick={() => navigate("/")}>
          Labe<span>X</span>
        </h2>
      </LogoContainer>
      <LoginContainer>
        <h2>Login</h2>
        <InputsContainer>
          <input placeholder="E-mail" />
          <input placeholder="Senha" />
        </InputsContainer>
        <ButtonsContainer>
          <button onClick={login}>Entrar</button>
          <button>Cancelar</button>
        </ButtonsContainer>
      </LoginContainer>
    </MainContainer>
  );
}
