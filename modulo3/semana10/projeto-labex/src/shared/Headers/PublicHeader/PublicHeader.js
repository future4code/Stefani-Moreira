import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Navbar,
  NavBrand,
  NavItems,
  MenuHamburguer,
} from "../styles/StyledHeader";

export default function PublicHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  return (
    <Navbar>
      <NavBrand>
        <p onClick={() => navigate("/")}>
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
          <li onClick={() => navigate("/")}>INÍCIO</li>
          {window.location.pathname !== "/trips/signUp" ? (
            <li onClick={() => navigate("/trips/signUp")}>INSCREVER-SE</li>
          ) : (
            ""
          )}
          {window.location.pathname === "/trips/signUp" ? (
            <li onClick={() => navigate("/trips/list")}>VIAGENS</li>
          ) : ("")}
          {token ? (
            <li onClick={() => {navigate("/admin/trips/list")}}>
              ÁREA ADMIN
            </li>
          ) : (
            <li onClick={() => navigate("/login")}>LOGIN</li>
          )}
        </NavItems>
      </div>
    </Navbar>
  );
}
