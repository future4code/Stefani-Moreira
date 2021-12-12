import styled from "styled-components";
import "../../../assets/fonts/fonts.css";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 2rem;
  cursor: pointer;
  color: #ffffff;
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

  @media (max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    background-color: #f2f2f2;
    z-index: 2;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #000000;
      font-size: 1.4rem;
      margin: 1.4rem;
    }
  }
`;

const MenuHamburguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 30px;
  z-index: 20;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#ffffff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export { Navbar, NavBrand, NavItems, MenuHamburguer };
