import React from "react";
import { useNavigate } from "react-router-dom";

import { MainContainer, LogoContainer, ButtonsContainer } from "./StyledHome";

export default function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  const goToPageAdmin = () => {
    if(token) {
      navigate("/admin/trips/list")
    } else {
      navigate("/login")
    }
  }

  return (
    <div>
      <MainContainer>
        <LogoContainer>
          <h1>
            Labe<span>X</span>
          </h1>
        </LogoContainer>
        <ButtonsContainer>
          <button onClick={() => navigate("/trips/list")}>VIAGENS</button>
          <button onClick={goToPageAdmin}>ÁREA ADMIN</button>
        </ButtonsContainer>
      </MainContainer>
    </div>
  );
}
