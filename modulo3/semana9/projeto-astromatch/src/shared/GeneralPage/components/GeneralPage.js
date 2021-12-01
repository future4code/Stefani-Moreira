import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";
import ChoosePerson from "../../../features/ChoosePerson/components/ChoosePersonScreen";
import Matches from "../../../features/Matches/components/MatchesScreen";

export default function GeneralPage() {
  const [peopleProfile, setPeopleProfile] = useState({});
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(true)

  useEffect(() => {
    getProfileToChose();
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
      {peopleProfile ? (
        <ChoosePerson
          peopleProfile={peopleProfile}
          getProfileToChose={getProfileToChose}
        />
      ) : (
        <div>
          <h2>Acabou os matches</h2>
          <button onClick={clearPages}>Limpar matches</button>
        </div>
      )}
      <Matches getMatches={getMatches} matches={matches} />
    </div>
  );
}
