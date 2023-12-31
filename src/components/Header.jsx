import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                    <Container>
                        <Navbar.Brand href="/">Displacement Measurement</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        );
    }
}
 
export default Header;