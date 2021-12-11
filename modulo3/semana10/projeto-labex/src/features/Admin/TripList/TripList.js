import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import Loading from "../../../shared/Loading/Loading";
import { BASE_URL, headers } from "../../../constants/parameters";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TrashIcon from "../../../assets/images/trash-icon.svg"

import { MainContainer, TripCard } from "./StyledTripList";

export default function TripList() {
  const [trips, isLoading, error, getData] = useRequestData(`/trips`);

  const navigate = useNavigate();

  const goToDetails = (id) => {
    navigate(`/admin/trips/details/${id}`);
  };

  const deleteTrip = (id) => {
    axios
      .delete(`${BASE_URL}/trips/${id}`, headers)
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
          <div onClick={() => goToDetails(trip.id)}>
            <p>{trip.name}</p>
          </div>
          <img src={TrashIcon} alt="Ícone de deletar viagem" onClick={() => deleteTrip(trip.id)} />
        </TripCard>
      );
    });

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && trips && trips.length > 0 && (
        <MainContainer>
          <h2>PAINEL ADMINISTRATIVO</h2>
          <div>{tripsList}</div>
        </MainContainer>
      )}
    </div>
  );
}
