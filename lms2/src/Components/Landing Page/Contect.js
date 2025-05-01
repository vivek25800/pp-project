import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { VscCommentDiscussion } from "react-icons/vsc";
import { MdPublishedWithChanges } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import leave from './leave.jpg';


const Contect = () => {
    return (
        <div  style={{
            position: 'relative',
               overflow: 'hidden', // Prevents overflow
                height: '100vh', // Full height of the viewport
               padding: '40px', // Padding inside the div
               backgroundImage: `url(${leave})`, // Replace with your image URL
               backgroundSize: 'cover', // Cover the entire div
               backgroundPosition: 'center', // Center the background image
               backgroundRepeat: 'no-repeat', // Prevent the image from repeating
             }}>
                 <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(204, 153, 255, 0.1)', // Light purple color with transparency
                zIndex: 1, // Ensure it is below the content but above the background
            }}>
            <Container fluid >
                <Row>
                    <Col xs={12} md={6} style={{ padding: '80px' }}>
                        <h3 style={{ fontSize: '40px' }}>Discover the learning platform powered by collaborative learning.</h3>

                        {/* Additional Content */}

                        <div style={{ padding: '10px' }}>
                            <p style={{ fontSize: '20px' }}>
                                <VscCommentDiscussion size={50} style={{ paddingRight: '12px' }} />
                                A 15-minute discussion with an expert
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                <MdPublishedWithChanges size={50} style={{ paddingRight: '12px' }} /> 100% tailored to your needs - with ❤️
                            </p>
                            <p style={{ fontSize: '20px' }}>
                                <CgNotes size={50} style={{ paddingRight: '12px' }} /> No commitment. Free as can be.
                            </p>
                        </div>

                    </Col>

                    <Col xs={12} md={6} style={{ padding: '80px' }}>
                        <Form>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your first name" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your last name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                          
                            <Row className="mt-2">
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formFirstName">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your Email" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formLastName">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter your Phone Number" />
                                    </Form.Group>
                                </Col>

                            </Row>
                         
                            <Row className="mt-3">
                                <Col xs={12} md={6}>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Select aria-label="Default select example">
                                        <option>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Form.Group controlId="formTextarea" className="mt-2">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter your message here" />
                                </Form.Group>
                                <Form>
                                    <Form.Group className="mb-3 mt-2" controlId="How ddi you hear about us?" >
                                        <Form.Label>How ddi you hear about us?</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                </Form>
                                <Button className="me-md-3 mb-3 mb-md-0 px-4 py-2 one border border-dark"><span className='btn-text'>Book my demo</span> </Button>

                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>

    );
};

export default Contect;