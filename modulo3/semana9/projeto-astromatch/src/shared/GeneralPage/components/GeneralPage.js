import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";
import ChoosePerson from "../../../features/ChoosePerson/components/ChoosePersonScreen";
import Matches from "../../../features/Matches/components/MatchesScreen";

import LogoAstromach from "../../../assets/image/download.png"
import Match from "../../../assets/image/puzzle.png"
import Search from "../../../assets/image/search.png"

import {
  MainContainer,
  NoProfileContainer,
  ChangePageButtons,
  Logo
} from "../styles/StyledGeneralPages";

export default function GeneralPage() {
  const [peopleProfile, setPeopleProfile] = useState({});
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(true);

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

  const changePage = () => {
    setPage(!page);
  };

  return (
    <MainContainer>
    <Logo>
      <div>
        <img src={LogoAstromach} alt="Logo astromatch" />
      </div>
    </Logo>
      {page ? (
        <div>
          {peopleProfile ? (
            <div>
            <details>
              <summary>...</summary>
              <button onClick={clearPages}>Limpar matches</button>
            </details>
              <ChoosePerson
                peopleProfile={peopleProfile}
                getProfileToChose={getProfileToChose}
              />
            </div>
          ) : (
            <NoProfileContainer>
              <iframe
                src="https://giphy.com/embed/S9oNGC1E42VT2JRysv"
                class="giphy-embed"
                allowFullScreen
                title="Pássaro do amor"
              ></iframe>
              <h2>Não há mais perfis a serem exibidos.</h2>
              <p>Clique no ícone abaixo para reiniciar</p>
              <button onClick={clearPages}>Limpar matches</button>
            </NoProfileContainer>
          )}
        </div>
      ) : (
          <Matches
            getMatches={getMatches}
            matches={matches}
            clearMatches={clearPages}
          />
      )}
      <ChangePageButtons>
        <img src={Search} alt="Ícone de área para procurar matches" onClick={changePage} />
        <img src={Match} alt="Ícone de área de matches" onClick={changePage} />
      </ChangePageButtons>
    </MainContainer>
  );
}
