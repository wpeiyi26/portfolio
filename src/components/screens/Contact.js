import React, { useRef, useState } from "react";
import { Container, Row, Button, Form, Col } from "react-bootstrap"
import '../../styles/Contact.css'

import { IconContext } from "react-icons";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import emailjs from '@emailjs/browser';

function Contact() {

    /* useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
       The returned object will persist for the full lifetime of the component. */
    const form = useRef();
    const [validated, setValidated] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('primary_email', 'contact_form', form.current, 'aCQG_sJ_zDBn8NjQF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };
    
    const wrapperFunction = (e) => {
        handleSubmit(e);
        sendEmail(e);
    }

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
                <Row>
                    <Container className="form-wrapper">
                        <Row className="mb-3">
                        <h4>&lt;form&gt;</h4>
                        </Row>
                        <Form noValidate validated={validated} ref={form} onSubmit={wrapperFunction}>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control className="form-content" id="name" type="text" name="user_name" placeholder="Name" required/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control className="form-content" type="email" name="email" placeholder="Email address" required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>    
                                <Form.Group className="message-container">
                                    <Form.Control as="textarea" rows={ 10 } name="message" placeholder="Write your message here" required/>
                                </Form.Group>
                            </Row>
                            <input type="submit" value="Send Message"/>
                        </Form>
                        <Row className="left mt-2">
                            <h4>&lt;/form&gt;</h4>
                        </Row>
                    </Container>
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