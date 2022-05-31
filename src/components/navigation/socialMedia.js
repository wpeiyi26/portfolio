import React from 'react';
import { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import '../../styles/socmed.css'

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

class SocMedBar extends Component {
  render () {
    return (
        <Container className="socMed-wrapper">
            <Row className="socMed-icons">
                <a href="https://github.com/wpeiyi">
                    <IconContext.Provider value={{ size: "30px", color: "white" }}>
                        <FiGithub />
                    </IconContext.Provider> 
                </a>
                <a href="https://www.linkedin.com/in/pei-yi-woo-9011531b6/">
                    <IconContext.Provider value={{ size: "30px", color: "white" }}>
                        <FiLinkedin />
                    </IconContext.Provider> 
                </a>
                <a href="https://www.instagram.com/softboiled.py/">
                    <IconContext.Provider value={{ size: "30px", color: "white" }}>
                        <FiInstagram />
                    </IconContext.Provider> 
                </a>
                <a onClick={()=> window.location = 'mailto:wpeiyi26@gmail.com'}>
                    <IconContext.Provider value={{ size: "30px", color: "white" }}>
                        <FiMail />
                    </IconContext.Provider> 
                </a>
            </Row>
            <Row>
                <div className="vl"></div>
            </Row>
        </Container>    
    );
  }
}

export default SocMedBar;