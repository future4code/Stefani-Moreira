import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  NavBrand,
  NavItems,
  MenuHamburguer,
} from "../styles/StyledHeader";

export default function PrivateHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Navbar>
      <NavBrand>
        <p onClick={() => navigate("/")}>
          {" "}
          Labe<span>X</span>
        </p>
      </NavBrand>
      <div>
        <MenuHamburguer open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </MenuHamburguer>
        <NavItems open={open}>
          <li onClick={() => navigate("/admin/trips/list")}>INÍCIO</li>
          <li onClick={() => navigate("/admin/trips/create")}>CRIAR VIAGENS</li>
          <li onClick={exit}>LOGOUT</li>
        </NavItems>
      </div>
    </Navbar>
  );
}
