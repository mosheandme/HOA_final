import React from 'react';
import { Card } from 'react-bootstrap';

function TenantCard({ user }) {
    return (
        <div className="C-user">
            <Card>
                <Card.Body>
                    <Card.Text>{user.fname + " " + user.lname}</Card.Text>
                    <Card.Text>{user.email}</Card.Text>
                    <Card.Text>{user.apartment}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TenantCard;