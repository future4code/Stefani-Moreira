import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import Loading from "../../../shared/Loading/Loading";

export default function TripList() {
  const [trips, isLoading, error] = useRequestData(`/trips`);

  const tripsList =
    trips &&
    trips.map((trip) => {
      return (
        <div key={trip.id}>
          <p>Name: {trip.name}</p>
          <p>Descrição: {trip.description}</p>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays} dias</p>
          <p>Data: {trip.date}</p>
        </div>
      );
    });

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && trips && trips.length > 0 && <div>{tripsList}</div>}
    </div>
  );
}
