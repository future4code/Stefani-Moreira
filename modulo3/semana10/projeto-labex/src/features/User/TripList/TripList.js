import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import Loading from "../../../shared/Loading/Loading";

import { CardTrip, MainContainer, CardContainer } from "./StyledTripList";

export default function TripList() {
  const [tripsData, isLoading, error] = useRequestData(`/trips`, {});

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((trip) => {
      return (
        <CardTrip key={trip.id}>
          <p>Nome: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays} dias</p>
          <p>Data: {trip.date}</p>
        </CardTrip>
      );
    });

  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && tripsData.trips && tripsData.trips.length > 0 ? (
        <MainContainer>
          <h2>LISTA DE VIAGENS</h2>
          <CardContainer>{tripsList}</CardContainer>
        </MainContainer>
      ) : (<Loading />)}
    </div>
  );
}
