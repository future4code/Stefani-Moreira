import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useForm } from "../../../hooks/useForm";
import { planets } from "../../../assets/data/planets";

export default function CreateTrip() {
  const [form, onChange] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips`, body, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const planetsList = planets.map((planet) => {
    return (
      <option key={planet.value} value={planet.value}>
        {planet.label}
      </option>
    );
  });

  return (
    <div>
      <form onSubmit={createTrip}>
        <input
          placeholder="Nome da viagem"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <select
          placeholder="Nome"
          type="text"
          name="planet"
          value={form.planet}
          onChange={onChange}
        >
          <option selected disabled>
            Escolha um planeta
          </option>
          {planetsList}
        </select>
        <input type="date" name="date" value={form.date} onChange={onChange} />
        <input
          placeholder="Descrição da viagem"
          type="text"
          name="description"
          value={form.description}
          onChange={onChange}
        />
        <input
          placeholder="Duração da viagem (em dias)"
          type="text"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
