import React from "react";
import { Container, Row, Button } from "react-bootstrap"
import '../../styles/Contact.css'

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

function Contact() {
    return (
        <section className="contact">
            <Container className="main">
                <Row>
                    <h4>&lt;h1&gt;</h4>
                    <h2>Get in Touch</h2>
                </Row>
                <Row className="left">
                    <h4>&lt;/h1&gt;</h4>
                </Row>
                <Row>
                    <h4 className="removeMargin">&lt;p&gt;</h4>
                    <p>I would love to hear from you!</p>
                    <br></br>
                    <p>Feel free to leave a message here or contact me directly through <a onClick={()=> window.location = 'mailto:wpeiyi26@gmail.com'}>email</a> or any other platforms</p>
                </Row>
                <Row className="left">
                    <h4>&lt;/p&gt;</h4>
                </Row>
                <Row className="contactFooter">
                    <a href="https://github.com/wpeiyi">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <FiGithub />
                        </IconContext.Provider> 
                    </a>
                    <a href="https://www.linkedin.com/in/pei-yi-woo-9011531b6/">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <FiLinkedin />
                        </IconContext.Provider> 
                    </a>
                    <a href="https://www.instagram.com/softboiled.py/">
                        <IconContext.Provider value={{ size: "30px" }}>
                            <FiInstagram />
                        </IconContext.Provider> 
                    </a>
                    <a onClick={()=> window.location = 'mailto:wpeiyi26@gmail.com'}>
                        <IconContext.Provider value={{ size: "30px" }}>
                            <FiMail />
                        </IconContext.Provider> 
                    </a>
                </Row>
                <Row className="footerText mt-4">
                    <p>
                        Designed and Built by Pei Yi Woo (2022)
                    </p>
                </Row>

            </Container>
        </section>
    )
}

export default Contact