import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/parameters";
import axios from "axios";

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

export default function TripDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getTripDetails = () => {
    axios
      .get(`${BASE_URL}/trip/${params.id}`, headers)
      .then((res) => {
        setIsLoading(false);
        setTripDetails(res.data.trip);
      })
      .catch((err) => {
        alert(err.res.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTripDetails();
  }, []);

  const decideCandidate = (id, choice) => {
    const body = {
      approve: choice,
    };
    axios
      .put(
        `${BASE_URL}/trips/${tripDetails.id}/candidates/${id}/decide`,
        body,
        headers
      )
      .then((res) => {
        console.log(res);
        if (choice === true) {
          alert("Candidato aprovado!");
        } else {
          alert("O candidato foi reprovado");
        }
        getTripDetails();
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const tripData = (
    <TripCard>
      <h2>{tripDetails.name}</h2>
      <div>
      <p>Descrição: {tripDetails.description}</p>
      <p>Planeta: {tripDetails.planet}</p>
      <p>Duração: {tripDetails.durationInDays} dias</p>
      <p>Data: {tripDetails.date}</p>
      <button onClick={() => navigate("/admin/trips/list")}>Voltar</button>
      </div>
    </TripCard>
  );

  const candidatesList =
    tripDetails.candidates &&
    tripDetails.candidates.map((candidate) => {
      return (
        <PendingCard>
          <p>
            {candidate.name}, {candidate.age} anos
          </p>
          <p>{candidate.profession}</p>
          <p>{candidate.country}</p>
          <p>Motivo: {candidate.applicationText}</p>
          <div>
            <img
              src={Trash}
              alt="Ícone de reprovação"
              onClick={() => decideCandidate(candidate.id, false)}
            />
            <img
              src={Check}
              alt="Ícone de aprovação"
              onClick={() => decideCandidate(candidate.id, true)}
            />
          </div>
        </PendingCard>
      );
    });

  const approvedList =
    tripDetails.approved &&
    tripDetails.approved.map((candidate) => {
      return (
        <div key={candidate.id}>
          <p>{candidate.name}</p>
        </div>
      );
    });

  return (
    <div>
      {!isLoading && tripDetails ? (
        <MainContainer>
          <div>
            <div>{tripData}</div>
            <ApprovedContainer>
              <h2>Candidatos Aprovados</h2>
              {tripDetails.approved && tripDetails.approved.length === 0 ? (
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
            {tripDetails.candidates && tripDetails.candidates.length === 0 ? (
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
