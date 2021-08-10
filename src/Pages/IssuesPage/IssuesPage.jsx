import React from 'react';
import { Redirect } from 'react-router-dom';

function IssuesPage({ activeUser }) {
    if (!activeUser) {
        return <Redirect to="/"/>

    }
    return (
        <div className="P-Issues">
            IssuesPage
        </div>
    );
}

export default IssuesPage;