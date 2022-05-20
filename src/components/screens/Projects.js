import { React, useState } from "react";
import { Container, Row, Card } from "react-bootstrap"
import '../../styles/Projects.css'

function Projects() {

    return (
        <section className="projects">
            <Container className="main">
                <Row>
                    <h4>&lt;h1&gt;</h4>
                    <h2>Projects</h2>
                </Row>
                <Row className="left">
                    <h4>&lt;/h1&gt;</h4>
                </Row>

                <Card>
                    <Card.Body>
                        <Card.Title>Portfolio Website</Card.Title>
                        <h4>Javascript, React.js, Bootstrap, CSS, Figma</h4>
                        <p>This fully-responsive website was my first project as a full-stack web-developer.</p>
                        <br></br>
                        <p>I explored a lot of animations and transitions which was super fun! This project further improved my front-end and prototyping skills.</p>
                    </Card.Body>
                </Card>
        
            </Container>
        </section>        
    )
}

export default Projects