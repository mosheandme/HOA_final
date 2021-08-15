import React from 'react';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import NewTenantModal from '../../components/NewTenantModal/NewTenantModal';
import TenantCard from '../../components/TenantCard/TenantCard';
import "./TenantsPage.css"

function TenantsPage({ users, activeUser, onNewTenant }) {
    const [showTenantModal, setShowTenantModal] = useState(false)


    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Tenants">
            <Container>
                <div className="heading">
                    TenantsPage
                    <Button onClick={() => setShowTenantModal(true)}  >Add New Tenant</Button>
                </div>
                <Row>
                    {users.map((user, i) =>
                        <Col key={i} md={3} sm={6}>
                            <TenantCard user={user} />
                        </Col>
                    )}
                </Row>
            </Container>
            <NewTenantModal show={showTenantModal} onClose={() => setShowTenantModal(false)} onCreate={onNewTenant} />


        </div >
    );
}

export default TenantsPage;



