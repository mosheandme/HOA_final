import React from 'react';
import { Redirect } from 'react-router-dom';

function TenantsPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Tenants">
            TenantsPage
        </div>
    );
}

export default TenantsPage;