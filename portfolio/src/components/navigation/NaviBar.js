import React from 'react';
import { Component } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

class Navibar extends Component {
  render () {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand className="me-auto" as={Link} to="/">
            <a>
              <img src="https://www.pngfind.com/pngs/m/17-173218_gudetama-wallpaper-com-wallpapers-worl-on-background-ipad.png" height="50px"/>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas id="responsive-navbar-nav" placement="end">
            <Offcanvas.Header closeButton className="justify-content-end">
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center"> 
                  <Nav.Link className="navlinks" eventKey="1" as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="2" as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="3" as={Link} to="/skills">Skills</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="4" as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link className="navlinks" eventKey="5" as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
              
          </Navbar.Offcanvas>  
        </Container>   
      </Navbar>
    );
  }
}

export default Navibar;