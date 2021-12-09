import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, NavBrand, NavItems } from "../styles/StyledHeader";

export default function PublicHeader() {
  const navigate = useNavigate();

  return (
    <Navbar>
      <NavBrand>
        <p onClick={() => navigate("/")}>Labe<span>X</span></p>
      </NavBrand>
      <NavItems>
        <li onClick={() => navigate("/")}>INÍCIO</li>
        {window.location.pathname !== "/trips/signUp" ? <li onClick={() => navigate("/trips/signUp")}>INSCREVER-SE</li> : ''}
        {window.location.pathname === "/trips/signUp" ? <li onClick={() => navigate("/trips/list")}>VIAGENS</li> : ''}
        <li onClick={() => navigate("/login")}>LOGIN</li>
      </NavItems>
    </Navbar>
  );
}
