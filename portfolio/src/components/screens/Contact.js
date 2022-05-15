import React from "react";
import { Container, Row, Button } from "react-bootstrap"
import '../../styles/Contact.css'

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

            </Container>
        </section>
    )
}

export default Contact