import styled from "styled-components";
import "../../assets/fonts/fonts.css";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 2rem;
  cursor: pointer;
`;
const NavBrand = styled.div`
  margin-left: 3rem;
  font-size: 2rem;
  font-family: "Roboto";
  font-weight: 800;
  span {
    color: #b89ed9;
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 30rem;
  font-family: "Montserrat";
  font-weight: bold;
  li {
    list-style-type: none;
  }
`;

export { Navbar, NavBrand, NavItems };
