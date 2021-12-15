import React from "react";
import Rocket from "../../assets/images/rocket.png";

import { LoadingContainer, RocketLoading } from "./StyledLoading";

export default function Loading() {
  return (
    <LoadingContainer>
      <RocketLoading src={Rocket} alt="Foguete" />
      <h2>CARREGANDO...</h2>
    </LoadingContainer>
  );
}
