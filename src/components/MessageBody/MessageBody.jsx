import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function MessageBody(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>details:</Col>
                        <Col>{props.message.details}</Col>
                    </Row>
                    <Row>
                        <Col>priority:</Col>
                        <Col>{props.message.priority}</Col>
                    </Row>
                    <Row>
                        <Col>createdBy:</Col>
                        <Col>{props.message.createdBy}</Col>
                    </Row>
                </Col>
                <Col>
                    <p>Comments:</p>
                    {
                        props.message.comments?.map(comment => {
                            return <p>{comment}</p>
                        })
                    }
                </Col>
            </Row>
        </Container>



    );
}

export default MessageBody;