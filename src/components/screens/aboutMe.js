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
                    <p>Hello there! My name is Pei Yi,  a Software Implementation Consultant with 2 years of experience in the supply chain industry. 
                        In my role, I have had the opportunity to work with Azure Cloud and Microsoft SQL Server, helping to implement effective software solutions to drive real-world results</p>
                    <br></br>
                    <p>My journey into tech is rooted in my diverse curiosity—whether it's crafting user-friendly designs through UI/UX or exploring the complexities of human-computer interaction, 
                        I am always eager to learn and take on new challenges. 
                        My broad range of interests continues to drive my passion for creating innovative, practical solutions that truly make a difference.</p>
                    <br></br>
                    <p>Always on the lookout for exciting opportunities to grow and gain more experience. Also open to exploring different fields!</p>      
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