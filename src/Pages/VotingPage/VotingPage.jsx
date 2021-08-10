import React from 'react';
import { Redirect } from 'react-router-dom';

function VotingPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Voting">
            VotingPage
        </div>
    );
}

export default VotingPage;