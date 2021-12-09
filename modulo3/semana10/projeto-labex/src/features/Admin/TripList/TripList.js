import React from 'react'
import { useRequestData } from "../../../hooks/useRequestData";
import Loading from "../../../shared/Loading/Loading";

import { MainContainer, TripCard } from './StyledTripList'

export default function TripList() {
    const [trips, isLoading, error] = useRequestData(`/trips`);

    const tripsList =
      trips &&
      trips.map((trip) => {
        return (
          <TripCard key={trip.id}>
            <p>{trip.name}</p>
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
    )
}
