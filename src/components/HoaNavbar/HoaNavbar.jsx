import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

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
                            {activeUser && activeUser.isCommitteeMember && <Nav.Link href="#tenants"><Button  className="m-3" variant="warning" type="button">Tenants</Button></Nav.Link>}
                            {activeUser ? <Nav.Link href="#messages"><Button  className="m-3" variant="warning" type="button">Messages</Button></Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#issues"><Button  className="m-3" variant="warning" type="button">Issues</Button></Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#voting"><Button  className="m-3" variant="warning" type="button">Voting</Button></Nav.Link> : null}
                        </Nav>
                        <Nav className="ms-auto">
                            {!activeUser ? <Nav.Link href="#login"><Button  className="m-3" variant="warning" type="button">Login</Button></Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#/" onClick={() => onLogout()}><Button  className="m-3" variant="warning" type="button">Logout</Button></Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default HoaNavbar;