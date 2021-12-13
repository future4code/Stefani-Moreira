import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/parameters";
import axios from "axios";
import { useRequestData } from "../../../hooks/useRequestData";
import { useProtectedPage } from "../../../hooks/useProtectedPage";

import Loading from "../../../shared/Loading/Loading";

import Trash from "../../../assets/images/Trash.svg";
import Check from "../../../assets/images/Check.svg";

import {
  MainContainer,
  TripCard,
  ApprovedContainer,
  PendingCard,
  PedingContainer,
} from "./StyledTripDetails";
import Swal from "sweetalert2";

export default function TripDetails() {
  useProtectedPage();
  const params = useParams();
  const [tripDetails, isLoading, error, getTripDetails] = useRequestData(
    `/trip/${params.id}`
  );
  const navigate = useNavigate();

  const MessageArea = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const decideCandidate = (id, choice) => {
    const body = { approve: choice };
    axios
      .put(`${BASE_URL}/trips/${tripDetails.trip.id}/candidates/${id}/decide`,
        body,
        headers
      )
      .then((res) => {
        if (choice === true) {
          MessageArea.fire({ title: "Candidato aprovado.", background: "#eeffde" });
        } else {
          MessageArea.fire({
            title: "Candidato reprovado.",
            background: "#bc316f",
            color: "#ffffff",
          });
        }
        getTripDetails();
      })
      .catch((err) => {
        MessageArea.fire({
          title: err.response.data.message,
          background: "#bc316f",
          color: "#ffffff",
        });
      });
  };

  const tripData = (
    <TripCard>
      <h2>{tripDetails && tripDetails.trip.name}</h2>
      <div>
        <p>Descrição: {tripDetails && tripDetails.trip.description}</p>
        <p>Planeta: {tripDetails && tripDetails.trip.planet}</p>
        <p>Duração: {tripDetails && tripDetails.trip.durationInDays} dias</p>
        <p>Data: {tripDetails && tripDetails.trip.date}</p>
        <button onClick={() => navigate("/admin/trips/list")}>Voltar</button>
      </div>
    </TripCard>
  );

  const candidatesList =tripDetails && tripDetails.trip &&
    tripDetails.trip.candidates.map((candidate) => {
      return (
        <PendingCard>
          <p>
            {candidate.name}, {candidate.age} anos
          </p>
          <p>{candidate.profession}</p>
          <p>{candidate.country}</p>
          <p>Motivo: {candidate.applicationText}</p>
          <div>
            <img src={Trash} alt="Ícone de reprovação"
              onClick={() => decideCandidate(candidate.id, false)}
            />
            <img src={Check} alt="Ícone de aprovação"
              onClick={() => decideCandidate(candidate.id, true)}
            />
          </div>
        </PendingCard>
      );
    });

  const approvedList =  tripDetails && tripDetails.trip &&
    tripDetails.trip.approved.map((candidate) => {
      return (
        <div key={candidate.id}>
          <p>{candidate.name}</p>
        </div>
      );
    });

  return (
    <div>
      {!isLoading && error && <p>Ocorreu um erro...</p>}
      {!isLoading && tripDetails && tripDetails.trip ? (
        <MainContainer>
          <div>
            <div>{tripData}</div>
            <ApprovedContainer>
              <h2>Candidatos Aprovados</h2>
              {tripDetails.trip.approved &&
              tripDetails.trip.approved.length === 0 ? (
                <div>
                  <p>Não há candidatos aprovados</p>
                </div>
              ) : (
                <div>{approvedList}</div>
              )}
            </ApprovedContainer>
          </div>
          <PedingContainer>
            <h2>Candidatos Pendentes</h2>
            {tripDetails.trip.candidates &&
            tripDetails.trip.candidates.length === 0 ? (
              <div>
                <p>Não há candidatos pendentes</p>
              </div>
            ) : (
              <div>{candidatesList}</div>
            )}
          </PedingContainer>
        </MainContainer>
      ) : (
        <Loading />
      )}
    </div>
  );
}
