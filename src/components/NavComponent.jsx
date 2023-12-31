import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { navLink } from "../data/index";
import logosmp from "../assets/img/logosmp.png";
import logo from "/logo.svg";

const NavComponent = () => {
  // ini untuk mengatur ketika halaman di scrol navbar akan berganti warna
  const [changeColor, setchangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setchangeColor(true);
    } else {
      setchangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <img src={logo}></img>
          <Navbar.Brand
            href="#home"
            className="smk fw-bold mx-3"
          ></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="hp navbar-light">
            <Nav className="mx-auto text-center">
              {navLink.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-warning rounded-1">
                Login
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavComponent;
