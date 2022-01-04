import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import TextField from "@mui/material/TextField";
import { GeneralContainer, MainContainer, FormContainer } from "./StyledLogin";

export default function Login() {
  const [form, onChange] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const submitLogin = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("tokenLabEddit", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.res.data.message);
      });
  };

  return (
    <GeneralContainer>
      <MainContainer>
        <h2>Login</h2>
        <FormContainer onSubmit={submitLogin}>
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

          <button
            type={"submit"}
            disabled={form.email === "" || form.password === ""}
          >
            Entrar
          </button>
        </FormContainer>
        <p>
          Ainda não tem uma conta Labeddit?{" "}
          <span onClick={() => {navigate("/signUp")}}>
            Crie uma conta
          </span>
        </p>
      </MainContainer>
    </GeneralContainer>
  );
}
