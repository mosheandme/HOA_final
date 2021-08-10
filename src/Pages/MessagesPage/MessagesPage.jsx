import React from 'react';
import { Redirect } from 'react-router-dom';

function MessagesPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }
    return (
        <div className="P-Massages">
            MessagesPage
        </div>
    );
}

export default MessagesPage;