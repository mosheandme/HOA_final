import React from 'react';
import { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import "./TenantsPage.css"

function TenantsPage({ activeUser }) {
    const [showTenantModal,setShowTenantModal]= useState(false)
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Tenants">
            <Container>
                <div className="heading">
                    TenantsPage
                    <Button  onClick={() => setShowTenantModal(true) }  >Add New Tenant</Button>
                </div>
            </Container>


            <Modal show={showTenantModal} onHide={() => setShowTenantModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowTenantModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setShowTenantModal(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>






        </div >
    );
}

export default TenantsPage;