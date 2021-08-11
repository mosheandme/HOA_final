import React from 'react';
import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './LoginPage.css';

function LoginPage({ activeUser, users, onLogin }) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setshowInvalidLogin] = useState(false);

    if (activeUser) {
        return <Redirect to="/massages" />
    }

    function login() {
        const activeUser = users.find(user => user.email === email && user.pwd === pwd);
        if (activeUser) {
            onLogin(activeUser);
        } else {
            setshowInvalidLogin(true);
        }

    }
    return (
        <div className="P-Login">
            <h1>Login to HOA System</h1>
            {showInvalidLogin ? <Alert variant="danger" onClose={() => setshowInvalidLogin(false)} dismissible>Invalid Credentials!</Alert> : null}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="info" type="button" onClick={login}>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;