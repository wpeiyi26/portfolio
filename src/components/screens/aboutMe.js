import React from "react";
import { Container, Row } from "react-bootstrap"
import '../../styles/aboutMe.css'

function About() {
    return (
        <section className="about">
            <Container className="main">
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mb-3">&lt;h1&gt;</h4>
                        <h2>Who?</h2>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition mt-3" style={{ animationDelay:"200ms"}}>
                        <h4>&lt;/h1&gt;</h4>    
                    </Container>
                </Row>
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"350ms"}}>
                    <h4 className="removeMargin mb-4">&lt;p&gt;</h4>
                    <p>Hello there! My name is Pei Yi and I am a recent computing graduate from the University of Melbourne. 
                       I have had the opportunity to experience many different fields and have found my calling in computing leading me to pursue a degree in this field.</p>
                    <br></br>
                    <p>I had so much fun completing my degree and learnt so much. I dabbled in data processing, computer systems, software development and my favourite, web development. 
                        Alongside my major, I also minored in Digital Technologies which was all about UI/UX design and Human-Computer Interactions.</p>
                    <br></br>
                    <p>Now, I am so excited to start my career as a developer and create more special things for users everywhere! Always on the lookout for exciting opportunities to grow and gain more experience. Also open to exploring different fields!</p>    
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition mt-3" style={{ animationDelay:"350ms"}}>
                        <h4>&lt;/p&gt;</h4>   
                    </Container>
                </Row>
            </Container>
        </section>
    )
}

export default About