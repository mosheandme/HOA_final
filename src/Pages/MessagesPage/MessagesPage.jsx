import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import AddMessage from '../../components/AddMessage/AddMessage';
import MessageBody from '../../components/MessageBody/MessageBody';



function MessagesPage({ activeUser, messages, updateMessages }) {
    if (!activeUser) {
        return <Redirect to="/" />

    }

    let messagesList = [];

    for (var i = 0; i < messages.length; i++) {
        messagesList.push(<Accordion.Item eventKey={i}>
            <Accordion.Header><p>{messages[i].title}</p></Accordion.Header>
            <Accordion.Body>
                <MessageBody message={messages[i]} />
            </Accordion.Body>
        </Accordion.Item>)
    }

    return (
        <div className="P-Massages">
            <Container>
                <AddMessage activeUser={activeUser} updateMessages={updateMessages} />
                <Accordion defaultActiveKey="0">
                    {messagesList}
                </Accordion>
            </Container>
        </div>
    );
}

export default MessagesPage;