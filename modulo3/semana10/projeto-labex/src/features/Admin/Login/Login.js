import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";

import {
  MainContainer,
  LogoContainer,
  LoginContainer,
  InputsContainer,
} from "./StyledLogin";

export default function Login() {
  const [form, onChange] = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <MainContainer>
      <LogoContainer>
        <h2 onClick={() => navigate("/")}>
          Labe<span>X</span>
        </h2>
      </LogoContainer>
      <LoginContainer onSubmit={submitLogin}>
        <h2>Login</h2>
        <InputsContainer>
          <input
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputsContainer>
        <button>Entrar</button>
      </LoginContainer>
    </MainContainer>
  );
}
