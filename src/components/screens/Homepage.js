import React from "react";
import { Container, Row} from "react-bootstrap"
import '../../styles/Homepage.css'
import resume from '../../documents/WPY-Resume-2022.png'

function Home() {
    return (
        <section className="home">
            <Container className="main">
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mb-4">&lt;h1&gt;</h4>            
                        <h3>Hi my name is</h3>
                    </Container>
                    <Container className="div-transition" style={{ animationDelay:"300ms"}}>
                        <h1 className="mt-2 mb-2">Pei Yi</h1>
                    </Container>
                    <Container className="div-transition" style={{ animationDelay:"400ms"}}>
                        <h2>Graduate Developer</h2>
                    </Container>
                    
                </Row>
                <Row className="left">
                    <Container className="div-transition" style={{ animationDelay:"400ms"}}>
                        <h4>&lt;/h1&gt;</h4>
                    </Container>
                </Row>
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"500ms"}}>
                        <h4 className="removeMargin mt-3">&lt;p&gt;</h4>
                        <p className="mt-3"> Passionate developer with a background in design. 
                            I enjoy making things and making them look pretty!</p>
                        <p>Always looking to learn new skills in computing and design.</p>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition" style={{ animationDelay:"500ms"}}>
                        <h4>&lt;/p&gt;</h4> 
                    </Container>
                </Row>
                <Row>
                    <Container className="link div-transition" style={{ animationDelay:"600ms"}}>
                        <a href= {resume} target = "_blank" rel="noreferrer noopener" className="resumeLink">RESUME</a>
                    </Container>
                </Row>

            </Container>
        </section>
    )
}

export default Home