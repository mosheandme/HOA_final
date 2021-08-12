import React from 'react';
import { Button, Form } from 'react-bootstrap';

function AddMessage({ activeUser, updateMessages }) {
    const [messageTitle, setMessageTitle] = React.useState();
    const [messageDetails, setMessageDetails] = React.useState();
    const [messageSelect, setMessageSelect] = React.useState();

    const saveMessage = (e) => {
        e.preventDefault();

        const message = {
            createdBy: activeUser.fname + " " + activeUser.lname + " " + activeUser.apartment,
            createdAt: new Date(),
            title: messageTitle,
            details: messageDetails,
            priority: messageSelect
        }
        updateMessages(message)
    }

    return (
        <Form onSubmit={saveMessage} >
            <Form.Group className="mb-3" >
                <Form.Label>message title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={messageTitle} onChange={e => setMessageTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Details</Form.Label>
                <Form.Control type="text" placeholder="Message Details" value={messageDetails} onChange={e => setMessageDetails(e.target.value)} />
            </Form.Group>
            <Form.Select size="lg" value={messageSelect} onSelect={e => setMessageSelect(e.target.value)}>
                <option value="importent">importent</option>
                <option value="information">information</option>
                <option value="importent">not importent</option>
            </Form.Select>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        
        </Form>
    );
}

export default AddMessage;