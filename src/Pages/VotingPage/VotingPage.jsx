import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

function VotingPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Voting">
            <Container>
                VotingPage
            </Container>
        </div>
    );
}

export default VotingPage;