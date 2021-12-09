import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/parameters";
import { useForm } from "../../../hooks/useForm";
import { useRequestData } from "../../../hooks/useRequestData";

export default function SignUp() {
  const [form, onChange] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [trips, isLoading, error] = useRequestData(`/trips`);
  const [tripId, setTripId] = useState("");
  const [countries, setCountries] = useState([]);

  const applyToTrip = (id) => {
    const body = form;
    axios
      .post(`${BASE_URL}/trips/${tripId}/apply`, body)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.res.data.message);
      });
  };

  const getCountries = () => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/paises`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <option key={trip.id} value={trip.id}>
          {trip.name}
        </option>
      );
    });

  const countriesList = countries.map((country) => {
    return (
      <option key={country.id} value={country.id}>
        {country.nome.abreviado}
      </option>
    );
  });

  return (
    <div>
      <div>
        <p>
          Os grandes pensamentos não necessitam apenas de asas, mas também de
          algum veículo para aterrisar.
        </p>
        <p>Neil Armstrong</p>
      </div>
      <form>
        <select name={"tripId"} defaultValue={""} onChange={onChange}>
          <option selected disabled>
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
        />
        <input
          placeholder="Idade"
          type="text"
          name="age"
          value={form.age}
          onChange={onChange}
        />
        <input
          placeholder="Texto de candidatura"
          type="text"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
        />
        <input
          placeholder="Profissão"
          type="text"
          name="profession"
          value={form.profession}
          onChange={onChange}
        />
        <select name={"country"} defaultValue={""} onChange={onChange}>
          <option selected disabled>
            Escolha o seu país de origem
          </option>
          {countriesList}
        </select>
      </form>
    </div>
  );
}
