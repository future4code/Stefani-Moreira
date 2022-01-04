import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import TextField from "@mui/material/TextField";
import { GeneralContainer, MainContainer, FormContainer } from "./StyledSignUp";

export default function SignUp() {
  const [form, onChange] = useForm({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const signUp = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("tokenLabEddit", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <GeneralContainer>
      <MainContainer>
        <h2>Cadastro</h2>
        <p>Crie uma conta ou <span onClick={() => {navigate("/login")}}>faça o login</span></p>
        <FormContainer onSubmit={signUp}>
          <TextField
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            required
            label={"Usuário"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            label={"E-mail"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
            label={"Senha"}
            fullWidth
            margin={"normal"}
          />

          <button disabled={form.email === "" || form.password === ""}>
            Entrar
          </button>
        </FormContainer>
      </MainContainer>
    </GeneralContainer>
  );
}
