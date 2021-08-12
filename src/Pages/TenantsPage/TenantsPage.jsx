import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import "./TenantsPage.css"

function TenantsPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Tenants">
            <Container>
                <div className="heading">
                    TenantsPage
                    <Button>Add New Tenant</Button>
                </div>
            </Container>
        </div >
    );
}

export default TenantsPage;