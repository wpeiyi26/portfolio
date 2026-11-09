import * as React from 'react';
import { Component } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'
import resume from '../../documents/WPY_CV_2024.pdf'
import logo from '../../documents/Portfolio-logo.png'

import { IconContext } from "react-icons";
import { FiMenu } from 'react-icons/fi';

class Navibar extends Component {
  render () {
    return (
      <header>
        <Navbar collapseOnSelect key="md" expand="md" >
        <Container>
          <Navbar.Brand className="me-auto" as={Link} to="/">
            <a>
              <img src={logo} height="50px"/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <IconContext.Provider value={{color: "white", size:"30px" }}>
              <FiMenu />
            </IconContext.Provider>
          </Navbar.Toggle>
          <Navbar.Collapse>
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton className="justify-content-end">
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1"> 
                  <Nav.Link className="navlinks" eventKey="1" as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="2" as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="3" as={Link} to="/skills">Skills</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="4" as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="5" as={Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link eventKey="6" href={resume} target = "_blank" className="resumeNav">RESUME</Nav.Link>
              </Nav>
            </Offcanvas.Body>
              
          </Navbar.Offcanvas>
          </Navbar.Collapse>
        </Container>   
      </Navbar>
      </header>
      
    );
  }
}

export default Navibar;