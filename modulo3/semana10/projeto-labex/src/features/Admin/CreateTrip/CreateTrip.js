import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { planets } from "../../../assets/data/planets";
import { useProtectedPage } from "../../../hooks/useProtectedPage";

import { MainContainer, FormContainer } from "./StyledCreateTrip";
import Swal from "sweetalert2";

export default function CreateTrip() {
  useProtectedPage();

  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
  const navigate = useNavigate();

  const MessageArea = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const createTrip = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((res) => {
        MessageArea.fire({
          title: "Viagem criada com sucesso",
          background: "#eeffde",
        });
        navigate("/admin/trips/list");
      })
      .catch((err) => {
        MessageArea.fire({
          title: err.response.data.message,
          background: "#bc316f",
          color: "#ffffff",
        });
      });
  };

  const planetsList = planets.map((planet) => {
    return (
      <option key={planet} value={planet}>
        {planet}
      </option>
    );
  });

  return (
    <MainContainer>
      <h2>CRIAR VIAGEM</h2>
      <FormContainer onSubmit={createTrip}>
        <input
          placeholder="Nome da viagem"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <select
          placeholder="Planeta"
          name="planet"
          defaultValue={" "}
          onChange={onChange}
          required
        >
          <option value={" "} disabled>
            Escolha um planeta
          </option>
          {planetsList}
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
        <input
          placeholder="Descrição da viagem"
          type="text"
          name="description"
          value={form.description}
          onChange={onChange}
          required
          pattern={"^.{1,60}"}
          title={"A descrição deve ter no máximo 60 caracters"}
        />
        <input
          placeholder="Duração da viagem (em dias)"
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          min={1}
          required
        />
        <button>Criar</button>
      </FormContainer>
    </MainContainer>
  );
}
