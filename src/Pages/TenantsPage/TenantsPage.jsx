import React from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import NewTenantModal from '../../components/NewTenantModal/NewTenantModal';
import "./TenantsPage.css"

function TenantsPage({ activeUser, onNewTenant }) {
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
            </Container>
            <NewTenantModal show={showTenantModal} onClose={() => setShowTenantModal(false)} onCreate={onNewTenant} />


        </div >
    );
}

export default TenantsPage;