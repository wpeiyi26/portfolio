import { React } from "react";
import { Container, Row, Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import '../../styles/Projects.css'

import { FiFigma, FiExternalLink } from 'react-icons/fi'
import { IconContext } from 'react-icons'

function Projects() {

    const renderTooltip = props => (
        <Tooltip className="test-tooltip" {...props}>
            <p><b>Testing Account</b></p>
            <p>Email: japecit@gmail.com</p>
            <p>Password: 12345678</p>
        </Tooltip>
    );

    /* target="_blank" rel="noreferrer noopener"
       the "rel" attribute sets the relationship between your page and the linked URL
       the settings prevent a type of phishing - tabnabbing 
       an exploit that uses the browser'e default behaviour with target="_blank" 
       to gain partial access to your page through the window.object API.
       a page you link to could cause your page to redirect to a fake login page. */

    return (
        <section className="projects">
            <Container className="main">
                <Row>
                    <Container className="div-transition" style={{ animationDelay:"200ms"}}>
                        <h4 className="mb-3">&lt;h1&gt;</h4>
                        <h2>Projects</h2>
                    </Container>
                </Row>
                <Row className="left">
                    <Container className="div-transition mt-2 mb-3" style={{ animationDelay:"200ms"}}>
                        <h4>&lt;/h1&gt;</h4>
                    </Container>
                </Row>
                
                <Container className="card-wrapper">
                    <Card className="div-transition" style={{ animationDelay:"500ms"}}>
                        <Card.Body>
                            <Container className="card-header">
                                <Card.Title>Portfolio Website</Card.Title>
                                <h4>Javascript, React.js, Bootstrap, CSS, Figma</h4>
                            </Container>
                            <Container className="card-content">
                                <p>
                                    This fully-responsive portfolio website was built mainly using React.js. 
                                    I explored a lot of animations and transitions which was super fun! 
                                    This project further improved my front-end and prototyping skills. 
                                </p>
                                <br></br>
                                <p>
                                    This website will continuously change throughout the future as I learn.
                                    I already have plans for the next iteration! :D
                                </p>
                                {/* <Container className="icons-wrapper">
                                    <IconContext.Provider value={{color: "white", size: "2em"}}>
                                        <FiFigma/>
                                    </IconContext.Provider>
                                </Container> */}
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="div-transition" style={{ animationDelay:"700ms"}}> 
                        <Card.Body>
                            <Container className="card-header">
                                <Card.Title>JAPEC Personal CRM</Card.Title>
                                <h4>Javascript, React.js, Express.js, MongoDB, Bootstrap, CSS, Figma</h4>
                            </Container>
                            <Container className="card-content">
                                <p>
                                    JAPEC was a group project to create a personal customer relationship management software for a client.
                                    Our client wanted it to be sort of an online phone book where he could record contacts quickly and easily.
                                </p>
                                <br></br>
                                <p>
                                    I was the front-end lead for the team and also designed the initial prototype. The design is simple with minimal
                                    distractions for intuitive use. My team worked using the Agile methodology and had client meetings at the end of 
                                    every sprint to discuss the progression of the product.  
                                </p>
                                <Container className="icons-wrapper">
                                    <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                        <a href="https://japec.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                            <IconContext.Provider value={{color: "white", size: "2em"}}>
                                                <FiExternalLink/>
                                            </IconContext.Provider>
                                        </a>
                                    </OverlayTrigger>
                                </Container>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card className="div-transition" style={{ animationDelay:"900ms"}}>
                        <Card.Body>
                            <Container className="card-header">
                                <Card.Title>Snacks in a Van</Card.Title>
                                <h4>Javascript, MongoDB, Express.js, Handlebars.js, CSS</h4>
                            </Container>
                            <Container className="card-content">
                                <p>
                                    My first web development group project where were we tasked with creating an interface for 
                                    a food truck company. The website has a route for customers who can place their orders,
                                    find nearby trucks and track their orders. Another route was for vendors to log in and 
                                    list their trucks as open along with their location, receive and view orders.
                                </p>
                                <br></br>
                                <p>
                                    I did a little of everything for this project and had fun figuring out how to implement
                                    the requirements into the website in a user-friendly way.
                                </p>
                                <Container className="icons-wrapper">
                                    <a href="https://snacksinavan-group-2-info30005.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                                        <IconContext.Provider value={{color: "white", size: "2em"}}>
                                            <FiExternalLink />
                                        </IconContext.Provider>
                                    </a>
                                </Container>
                            </Container>
                        </Card.Body>
                    </Card>
                    <Card  className="div-transition" style={{ animationDelay:"1100ms"}}>
                        <Card.Body>
                            <Container className="card-header">
                                <Card.Title>Welcome to Melbourne!</Card.Title>
                                <h4>Javascript, React.js, Bootstrap, CSS, Figma</h4>
                                <p className="wip-text">! Work in Progress !</p>
                            </Container>
                            <Container className="card-content">
                                <p>
                                    A little preface, my parents are coming over to Melbourne in October and due to work, I may not be
                                    able to spend everyday with them :(
                                </p>
                                <br></br>
                                <p>
                                    So, I am making a website for them to self-explore around here when I am busy! I plan to include 
                                    food locations, sightseeing spots, a tram guide alongside little reviews and helpful tips. The locations
                                    should utilise a Google Maps API just in case they don't trust me :')
                                </p>
                            </Container>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </section>        
    )
}

export default Projects