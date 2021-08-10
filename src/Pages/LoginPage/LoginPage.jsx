import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage(props) {
    return (
        <div className="P-Login">
            <h1>Login to HOA System</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="info" type="button">
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;