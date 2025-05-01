import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Sevensec = () => {
    return (
        <div style={{
            background: 'linear-gradient(to bottom, #ffffff 0%,rgb(223, 212, 243) 60%,rgb(255, 255, 255) 90%)',
            minHeight: '100vh',
            padding: '50px 0'
        }}>
            <Container >
                <style>
                    {`
          .zoom-container {
            overflow: hidden; /* Hide overflow to prevent image from showing outside the container */
            width: 376px; /* Set the width of the container */
            height: 416px; /* Set the height of the container */
            position: relative; /* Position relative for absolute positioning of the image */
          }

          .zoom-image {
            width: 100%; /* Make the image responsive */
            height: auto; /* Maintain aspect ratio */
            transition: transform 0.5s ease; /* Smooth transition for zoom effect */
          }

          .zoom-container:hover .zoom-image {
            transform: scale(1.2); /* Scale the image on hover */
          }
        `}
                </style>
                <h1 style={{ fontSize: '40px', fontWeight: '630', textAlign: 'center', margin: '20px 0' }}>
                    Looking to drive real impact? Start <br /> here with expert-led, peer-backed <br /> resources.
                </h1>
                <Row className="mb-4"> {/* Add margin-bottom to create space between rows */}
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#EEE9F6',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        >
                            <img
                                src="https://images.prismic.io/360learning/Z7XbqJ7c43Q3f97j_l-and-d-podcast-resources.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,3,750,830&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"
                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            />

                        </div>
                        <div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>

                    </Col>
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#F5F1F9',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        >
                            <img
                                src="https://images.prismic.io/360learning/ZyJoUK8jQArT0COj_L%26DCollective.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,4,750,830&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"
                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            />

                        </div>
                        <div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#F5F1F9',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        >
                            <img
                                src="https://images.prismic.io/360learning/ZyJoHq8jQArT0COY_AI-certif.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,3,751,831&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"

                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                        </div>
                        <div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#F5F1F9',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        >
                            <img
                                src="https://images.prismic.io/360learning/ZyJoUK8jQArT0COj_L%26DCollective.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,4,750,830&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"
                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                        </div>
                        <div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#F5F1F9',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        >
                            <img
                                src="https://images.prismic.io/360learning/ZuFX1xoQrfVKl83x_EN-blog-illustration-ai-vision-banner.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,0,2160,1120&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"
                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                        </div>
                        <div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div
                            className="zoom-container"
                            style={{
                                backgroundColor: '#F5F1F9',
                                padding: '20px',
                                textAlign: 'center',
                                borderRadius: '12px' // You can change to '8px', '20px', etc.
                            }}
                        > <img
                                src="https://images.prismic.io/360learning/Z7XbqJ7c43Q3f97j_l-and-d-podcast-resources.png?fit=crop&fm=png&q=75&dpr=1&auto=format&rect=0,3,750,830&w=376&h=416"
                                alt="Podcast Resources"
                                className="zoom-image"
                                style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }}
                            /></div>
<div>
                            <h3 style={{
                                margin: '10px 0',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#8753DC',
                                textTransform: 'uppercase'
                            }}>
                                Podcast
                            </h3>
                            <p style={{
                                margin: '0',
                                color: '#6c757d',
                                fontSize: '22px'
                            }}>
                                The most downloaded L&D podcast
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sevensec;