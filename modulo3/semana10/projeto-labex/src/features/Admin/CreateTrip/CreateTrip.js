import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "../../../constants/parameters";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { planets } from "../../../assets/data/planets";

import { MainContainer, FormContainer, CancelButton } from './StyledCreateTrip'

export default function CreateTrip() {
  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  });
  const navigate = useNavigate();

  const createTrip = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then((res) => {
        alert("Viagem criada com sucesso");
        navigate("/admin/trips/list")
      })
      .catch((err) => {
        alert(err.response.data.message);
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
        <input type="date" name="date" value={form.date} onChange={onChange} required/>
        <input
          placeholder="Descrição da viagem"
          type="text"
          name="description"
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          placeholder="Duração da viagem (em dias)"
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          required
        />
        <button>Criar</button>
      </FormContainer>
      <CancelButton onClick={() => navigate("/admin/trips/list")}>Cancelar</CancelButton>
    </MainContainer>
  );
}
