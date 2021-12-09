import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, NavBrand, NavItems } from "../styles/StyledHeader";

export default function PrivateHeader() {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar>
      <NavBrand>
        <p onClick={() => navigate("/")}> Labe<span>X</span></p>
      </NavBrand>
      <NavItems>
        <li onClick={() => navigate("/admin/trips/list")}>INÍCIO</li>
        <li onClick={() => navigate("/admin/trips/create")}>CRIAR VIAGENS</li>
        <li onClick={exit}>LOGOUT</li>
      </NavItems>
    </Navbar>
  );
}
