import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import "../styles/NavBar.css";

const CustomNavBar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Brand et Liens de Navigation à gauche */}
        <Navbar.Brand href="#intro">Betty Guehi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>

          {/* Icônes sociales à droite */}
          <div className="social-icon ms-auto">
            <a href="https://www.linkedin.com/in/betty-esther-marilande-guehi-501362250/"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="mailto:marilandeguehi@gmail.com"><img src={navIcon2} alt="Email" /></a>
            <a href="https://github.com/Bessland/Betty/"><img src={navIcon3} alt="GitHub" /></a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
