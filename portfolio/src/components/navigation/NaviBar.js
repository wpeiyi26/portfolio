import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

export default class NaviBar extends React.Component {
    render() {
        const { location } = this.props
        return (
            <Navbar collapseOnSelect expand="lg" fixed="top">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav activeKey={location.props} className="me-auto">
                            <Nav.Link as={Link} to ="/">Home</Nav.Link>
                            <Nav.Link as={Link} to ="/about">About</Nav.Link>
                            <Nav.Link as={Link} to ="/skills">Skills</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        
                </Container>
            </Navbar>
        )
    }
}