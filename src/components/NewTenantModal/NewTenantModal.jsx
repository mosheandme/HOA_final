import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function NewTenantModal({ show, onClose, onCreate }) {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [apartment, setApartment] = useState("");
    const [pwd, setPwd] = useState("");

    function clearForm(){
        setFname(""); 
        setLname(""); 
        setEmail(""); 
        setApartment(""); 
    }


    function createTenent(){
        onCreate(fname, lname, email, apartment, pwd);
        clearForm();
        onClose();
    }

    return (
        <Modal show={show} onHide={onClose} >
            <Modal.Header closeButton>
                <Modal.Title>New Tenant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalFname">
                        <Form.Label column sm={2}>
                            Tenant First Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="Enter New Tenant First Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalLname">
                        <Form.Label column sm={2}>
                            Tenant  Last Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Enter New Tenant Last Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Tenant Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter New Tenant Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalApartment">
                        <Form.Label column sm={2}>
                            Tenant Apartment Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" value={apartment} onChange={e => setApartment(e.target.value)} placeholder="Enter New Tenant Apartment Number" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPwd">
                        <Form.Label column sm={2}>
                            Tenant Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Enter New Tenant Password" />
                        </Col>
                    </Form.Group>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={createTenent}>
                    Save New Tenant
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewTenantModal;