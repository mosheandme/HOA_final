import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function IssuesPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Issues">
            <Container>
                IssuesPage
            </Container>
        </div>
    );
}

export default IssuesPage;