import * as React from "react";
import { Container, Row, Form, Col } from "react-bootstrap"
import '../../styles/Contact.css'

import { IconContext } from "react-icons";
import { FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

import emailjs from '@emailjs/browser';

function Contact() {

    /* React.useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
       The returned object will persist for the full lifetime of the component. */
    const form = React.useRef();
    const [validated, setValidated] = React.useState(false);

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
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mb-3">&lt;h1&gt;</h4>
                        <h2>Get in Touch</h2>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mt-2">&lt;/h1&gt;</h4>
                    </Container>
                </Row>
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"300ms"}}>
                    <h4 className="removeMargin mb-3">&lt;p&gt;</h4>
                    <p>I would love to hear from you!</p>
                    <p>
                        Feel free to leave a message here or contact me directly 
                        through <a onClick={()=> window.location = 'mailto:wpeiyi26@gmail.com'}>email</a> or 
                        any other platforms
                    </p>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition" style={{ animationDelay:"300ms"}}>
                        <h4 className="mt-2">&lt;/p&gt;</h4>
                    </Container>
                </Row>
                <Row>
                    <Container className="form-wrapper div-transition" style={{ animationDelay:"400ms"}}>
                        <Row className="mb-3 mt-2">
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
                            <input className="mt-2" type="submit" value="Send Message"/>
                        </Form>
                        <Row className="left mt-2">
                            <h4>&lt;/form&gt;</h4>
                        </Row>
                    </Container>
                </Row>
                <Row className="contactFooter div-transition" style={{ animationDelay:"500ms"}}>
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
                        <IconContext.Provider value={{ size: "30px", color: "#BB86FC" }}>
                            <FiMail />
                        </IconContext.Provider> 
                    </a>
                </Row>
                <Row className="footerText mt-4 mb-5">
                    <p>
                        Designed and Built by Pei Yi Woo
                    </p>
                </Row>
            </Container>
        </section>
    )
}

export default Contact