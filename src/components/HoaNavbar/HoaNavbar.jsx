import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function HoaNavbar({ activeUser, onLogout}) {

    activeUser && console.log(activeUser.isCommitteeMember, activeUser)
    return (
        <div c-navbar>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#/">HOA System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {activeUser && activeUser.isCommitteeMember && <Nav.Link href="#tenants">Tenants</Nav.Link>}
                            {activeUser ? <Nav.Link href="#messages">Messages</Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#issues">Issues</Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#voting">Voting</Nav.Link> : null}
                        </Nav>
                        <Nav className="ms-auto">
                            {!activeUser ? <Nav.Link href="#login">Login</Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#/" onClick={() => onLogout()}>Logout</Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HoaNavbar;