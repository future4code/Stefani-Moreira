import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

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
    <div>
        <button onClick={() => {navigate("/login")}}>Login</button>
      <form onSubmit={signUp}>
        <h2>Cadastro</h2>
        <div>
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            required
          />
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
        </div>
        <button disabled={form.email === "" || form.password === ""}>
          Entrar
        </button>
      </form>
    </div>
  );
}
