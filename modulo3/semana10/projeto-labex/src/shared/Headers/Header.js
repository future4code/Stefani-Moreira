import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, NavBrand, NavItems } from "./StyledHeader";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Navbar>
      <NavBrand>
        <p onClick={() => navigate("/")}>Labe<span>X</span></p>
      </NavBrand>
      <NavItems>
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/trips/signUp")}>INSCREVER-SE</li>
        <li onClick={() => navigate("/login")}>LOGIN</li>
      </NavItems>
    </Navbar>
  );
}
