import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/astromatch-api";
import ChoosePerson from "../ChoosePersonScreen/ChoosePersonScreen";
import Matches from "../MatchesScreen/MatchesScreen";

export default function GenerallPage() {
  const [peopleProfile, setPeopleProfile] = useState({});
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getProfileToChose()
  }, []);

  const getProfileToChose = () => {
    axios
      .get(`${BASE_URL}/person`)
      .then((res) => {
        setPeopleProfile(res.data.profile);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const getMatches = () => {
    axios
      .get(`${BASE_URL}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const clearPages = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then((res) => {
        alert("Lista de matches apagado");
        getProfileToChose();
        getMatches();
      })
      .catch((err) => {
        alert("Não foi possível resetar");
      });
  };

  return (
    <div>
      <button onClick={clearPages}>Limpar matches</button>
      <ChoosePerson
        peopleProfile={peopleProfile}
        getProfileToChose={getProfileToChose}
      />
      <Matches getMatches={getMatches} matches={matches} />
    </div>
  );
}
