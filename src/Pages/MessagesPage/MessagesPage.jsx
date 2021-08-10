import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function MessagesPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Massages">
            <Container>
                MessagesPage
            </Container>
        </div>
    );
}

export default MessagesPage;