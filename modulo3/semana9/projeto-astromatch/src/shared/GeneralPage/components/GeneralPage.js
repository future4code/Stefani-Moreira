import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/astromatch-api";
import ChoosePerson from "../../../features/ChoosePerson/components/ChoosePersonScreen";
import Matches from "../../../features/Matches/components/MatchesScreen";

import LogoAstromach from "../../../assets/image/download.png";
import Match from "../../../assets/image/puzzle.png";
import Search from "../../../assets/image/search.png";
import Recycle from "../../../assets/image/recycle.png";

import Swal from "sweetalert2";

import {
  MainContainer,
  NoProfileContainer,
  ChangePageButtons,
  Logo,
} from "../styles/StyledGeneralPages";

export default function GeneralPage() {
  const [peopleProfile, setPeopleProfile] = useState({});
  const [matches, setMatches] = useState([]);
  const [page, setPage] = useState(true);

  useEffect(() => {
    getProfileToChose();
  }, []);

  const MessageArea = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

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
      .catch((err) => {});
  };

  const clearPages = () => {
    axios
      .put(`${BASE_URL}/clear`)
      .then((res) => {
        MessageArea.fire({ title: "Lista de matches apagada" });
        getProfileToChose();
        getMatches();
      })
      .catch((err) => {
        MessageArea.fire({ title: "Não foi possível resetar" });
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
                getMatches={getMatches}
                messageArea={MessageArea}
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
              <h2>Acabou os possíveis amores.</h2>
              <p>Clique no ícone abaixo para reiniciar</p>
              <img
                src={Recycle}
                alt="Ícone para resetar aplicação"
                onClick={clearPages}
              />
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
        <img
          src={Search}
          alt="Ícone de área de procurar perfis"
          onClick={changePage}
        />
        <img src={Match} alt="Ícone de área de matches" onClick={changePage} />
      </ChangePageButtons>
    </MainContainer>
  );
}
