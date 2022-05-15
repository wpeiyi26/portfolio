import React from "react";
import { Container, Row} from "react-bootstrap"
import '../../styles/Homepage.css'
import resume from '../../documents/WPY-Resume-2022.png'

function Home() {
    return (
        <section className="home">
            <Container className="main">
                <Row>
                    <h4>&lt;h1&gt;</h4>
                    <h3>Hi my name is</h3>
                    <h1>Pei Yi Woo</h1>
                    <h2>Graduate Web Developer</h2>
                </Row>
                <Row className="left">
                    <h4>&lt;/h1&gt;</h4>
                </Row>
                <Row>
                    <h4 className="removeMargin">&lt;p&gt;</h4>
                    <p>Passionate about front-end development with a great interest in design. 
                        Always looking to learn new skills in web development and design.</p>
                </Row>
                <Row className="left">
                    <h4>&lt;/p&gt;</h4>
                </Row>
                <Row>
                    <Container className="link">
                        <a href= {resume} target = "_blank" className="resumeLink">RESUME</a>
                    </Container>
                </Row>

            </Container>
        </section>
    )
}

export default Home