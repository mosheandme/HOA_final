import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


function HomePage(props) {
    return (
        <div className="P-Home">
            <Container style={{ marginTop: "30px" }}>
                <div>

                    <h1 className="text-center"> Homeowner Association Management System</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Accumsan lacus vel facilisis volutpat est. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquet enim tortor at auctor urna nunc id. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Tortor condimentum lacinia quis vel eros. Non sodales neque sodales ut etiam sit. Neque sodales ut etiam sit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Augue interdum velit euismod in pellentesque massa placerat duis. Accumsan lacus vel facilisis volutpat est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi lacus sed viverra tellus in. Imperdiet proin fermentum leo vel.

                        Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Et leo duis ut diam quam nulla. Donec et odio pellentesque diam. Ultricies tristique nulla aliquet enim tortor at auctor. Ac auctor augue mauris augue. Vitae tempus quam pellentesque nec nam aliquam sem et. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Tempor commodo ullamcorper a lacus vestibulum sed. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. A erat nam at lectus urna duis convallis. Velit sed ullamcorper morbi tincidunt ornare massa. Nibh tortor id aliquet lectus proin. Praesent tristique magna sit amet purus. Congue mauris rhoncus aenean vel elit scelerisque mauris. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl.</p>

                </div>
                <Row>
                    <Col sm={12} md={4}>
                        <Card className="home-card">
                            <Card.Img className="" variant="top" src="https://image.shutterstock.com/image-vector/flat-vector-characters-600w-253854427.jpg" />
                            <Card.Body>
                                <Card.Title>User Management</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Accumsan lacus vel facilisis volutpat est. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquet enim tortor at auctor urna nunc id. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Tortor condimentum lacinia quis vel eros. Non sodales neque sodales ut etiam sit. Neque sodales ut etiam sit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Augue interdum velit euismod in pellentesque massa placerat duis. Accumsan lacus vel facilisis volutpat est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi lacus sed viverra tellus in. Imperdiet proin fermentum leo vel.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col >
                    <Col sm={12} md={4}>
                        <Card className="home-card">
                            <Card.Img className="" variant="top" src="https://image.shutterstock.com/image-vector/hand-pressing-button-text-vote-600w-578005984.jpg" />
                            <Card.Body>
                                <Card.Title>Voting Management</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Accumsan lacus vel facilisis volutpat est. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquet enim tortor at auctor urna nunc id. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Tortor condimentum lacinia quis vel eros. Non sodales neque sodales ut etiam sit. Neque sodales ut etiam sit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Augue interdum velit euismod in pellentesque massa placerat duis. Accumsan lacus vel facilisis volutpat est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi lacus sed viverra tellus in. Imperdiet proin fermentum leo vel.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card className="home-card">
                            <Card.Img className="" variant="top" src="https://image.shutterstock.com/image-vector/new-message-dialog-chat-speech-600w-1008294580.jpg" />
                            <Card.Body>
                                <Card.Title>Message Management</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque. Accumsan lacus vel facilisis volutpat est. Convallis aenean et tortor at risus viverra adipiscing at in. Aliquet enim tortor at auctor urna nunc id. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Tortor condimentum lacinia quis vel eros. Non sodales neque sodales ut etiam sit. Neque sodales ut etiam sit. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Augue interdum velit euismod in pellentesque massa placerat duis. Accumsan lacus vel facilisis volutpat est. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nisi lacus sed viverra tellus in. Imperdiet proin fermentum leo vel.

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default HomePage;