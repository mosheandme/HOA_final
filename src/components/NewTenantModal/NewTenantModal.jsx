import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function NewTenantModal({ show, onClose }) {
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
                            <Form.Control type="text" placeholder="Enter New Tenant First Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalLname">
                        <Form.Label column sm={2}>
                            Tenant  Last Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter New Tenant Last Name" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Tenant Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Enter New Tenant Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalApartment">
                        <Form.Label column sm={2}>
                            Tenant Apartment Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="Enter New Tenant Apartment Number" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPwd">
                        <Form.Label column sm={2}>
                            Tenant Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter New Tenant Password" />
                        </Col>
                    </Form.Group>

                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onClose}>
                    Save New Tenant
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewTenantModal;