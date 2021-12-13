import React from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useForm } from "../../../hooks/useForm";
import { useRequestData } from "../../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { countries } from "../../../assets/data/countries";

import { MainContainer, PhraseContainer, FormContainer } from "./StyledSignUp";
import Swal from "sweetalert2";

export default function SignUp() {
  const [form, onChange] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [tripsData] = useRequestData(`/trips`, {});
  const navigate = useNavigate();

  const MessageArea = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const applyToTrip = (event) => {
    event.preventDefault();
    const body = form;
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body)
      .then((res) => {
        MessageArea.fire({title: "Formulário enviado",
          background: "#eeffde",
        });
        navigate("/trips/list");
      })
      .catch((err) => {
        MessageArea.fire({title: err.response,
          background: "#bc316f",
          color: "#ffffff",
        });
      });
  };

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return (
        <option key={trip.id} value={trip.id}>
          {trip.name}
        </option>
      );
    });

  const countriesList = countries.map((country) => {
    return (
      <option key={country} value={country}>
        {country}
      </option>
    );
  });

  return (
    <MainContainer>
      <PhraseContainer>
        <p>
          Os grandes pensamentos não necessitam apenas de asas, mas também de
          algum veículo para aterrisar.
        </p>
        <p>Neil Armstrong</p>
      </PhraseContainer>
      <FormContainer onSubmit={applyToTrip}>
        <h2>INSCREVA-SE PARA UMA VIAGEM</h2>
        <select name={"trip"} defaultValue={" "} onChange={onChange} required>
          <option value={" "} disabled>
            Escolha uma viagem
          </option>
          {tripsList}
        </select>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}"}
          title={"Seu nome de ter no mínimo 3 caracteres e apenas letras"}
          required
        />
        <input
          placeholder="Idade"
          type="number"
          name="age"
          value={form.age}
          onChange={onChange}
          required
          min={18}
        />
        <input
          placeholder="Texto de candidatura"
          type="text"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          required
          pattern={"^.{10,30}"}
          title={
            "Seu texto deve ter no mínimo 10 caracters e máximo 30 caracters"
          }
        />
        <input
          placeholder="Profissão"
          type="text"
          name="profession"
          value={form.profession}
          onChange={onChange}
          required
        />
        <select
          name={"country"}
          defaultValue={" "}
          onChange={onChange}
          required
        >
          <option value={" "} disabled>
            Escolha o seu país de origem
          </option>
          {countriesList}
        </select>
        <button>Enviar</button>
      </FormContainer>
    </MainContainer>
  );
}
