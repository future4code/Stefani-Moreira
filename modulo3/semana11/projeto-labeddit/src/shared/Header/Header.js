import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import StyledToolbar from "./StyledHeader";
import Button from "@mui/material/Button";

export default function Header() {
  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("tokenLabEddit");
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color={"inherit"} onClick={() => navigate("/")}>LabEddit</Button>
        <Button color={"inherit"} onClick={exit}>
          LOGOUT
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}
