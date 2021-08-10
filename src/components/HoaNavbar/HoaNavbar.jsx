import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function HoaNavbar(props) {
    return (
        <div c-navbar>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">HOA System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#tenants">Tenants</Nav.Link>
                            <Nav.Link href="#messages">Messages</Nav.Link>
                            <Nav.Link href="#issues">Issues</Nav.Link>
                            <Nav.Link href="#voting">Voting</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#login">Login</Nav.Link>
                            <Nav.Link href="#">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HoaNavbar;