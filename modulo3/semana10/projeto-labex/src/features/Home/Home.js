import React from "react";
import { useNavigate } from "react-router-dom";

import { MainContainer, LogoContainer, ButtonsContainer } from "./StyledHome";

export default function Home() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <LogoContainer>
        <h1>Labe<span>X</span></h1>
      </LogoContainer>
      <ButtonsContainer>
        <button onClick={() => navigate("/trips/list")}>VIAGENS</button>
        <button onClick={() => navigate("/login")}>LOGIN</button>
      </ButtonsContainer>
    </MainContainer>
  );
}
