import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function TenantsPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Tenants">
            <Container>
                TenantsPage
            </Container>
        </div>
    );
}

export default TenantsPage;