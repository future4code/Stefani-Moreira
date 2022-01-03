import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import TextField from "@mui/material/TextField";

export default function Login() {
  const [form, onChange] = useForm({title: "", body: ""});
  const navigate = useNavigate();

  const token = localStorage.getItem("tokenLabEddit");

  const createPost = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
          alert("post criado")
        navigate("/")
      })
      .catch((err) => {
        alert(err.res.data.message);
      });
  };

  return (
    <div>
      <form onSubmit={createPost}>
        <h2>Login</h2>
        <div>
          <TextField
            type="text"
            name="title"
            value={form.title}
            onChange={onChange}
            required
            label={"Informe um título"}
            fullWidth
            margin={"normal"}
          />
          <TextField
            type="text"
            name="body"
            value={form.body}
            onChange={onChange}
            required
            label={"Digite seu texto"}
            fullWidth
            margin={"normal"}
          />
        </div>
        <button type={"submit"}>Enviar</button>
      </form>
      <button onClick={() => {navigate("/")}}>Cancelar</button>
    </div>
  );
}