import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import Loading from "../../../shared/Loading/Loading";
import { BASE_URL } from "../../../constants/parameters";

import { MainContainer, TripCard } from "./StyledTripList";
import axios from "axios";

export default function TripList() {
  const [trips, isLoading, error, getData] = useRequestData(`/trips`);

  const token = localStorage.getItem("token");

  const deleteTrip = (id) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        alert("Viagem deletada");
        getData();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <TripCard key={trip.id}>
          <p>{trip.name}</p>
          <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
        </TripCard>
      );
    });

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && trips && trips.length > 0 && (
        <MainContainer>
          <h2>LISTA DE VIAGENS</h2>
          <div>{tripsList}</div>
        </MainContainer>
      )}
    </div>
  );
}
