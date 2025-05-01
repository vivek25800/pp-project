import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowCircleRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

const Sixsec = () => {
    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(to bottom, #E1D7EF 0%, #ffffff 100%)',
                minHeight: '100vh'
            }}
        >
            <Container className="py-4">
                <Row>
                <Col md={6} className="p-4">
    <div className="rounded-lg p-4">
        <div className="mt-4 flex flex-col md:flex-row gap-4">
            <img
                src="https://images.prismic.io/360learning/c026bd0f-1a8a-4d03-9612-b129b8b268e4_privacy_security.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,1888,1888&w=472&h=472"
                alt="Image 1"
                className="img-fluid w-100" // Use Bootstrap's img-fluid class
            />
        </div>
    </div>
</Col>
                    <Col md={6} className="p-4">
                        <div className=" p-4">
                            <h2 style={{ fontSize: '40px' }} className="font-bold mb-2">
                                Securing Your Success: Our Commitment to Data Protection.
                            </h2>

                            <div className="space-y-4">
                                <div className="pt-2">
                                    <p style={{ fontSize: '22px', color: 'black', fontWeight: 'bold' }} className="flex items-center">
                                        <FaArrowCircleRight style={{ marginRight: '8px' }} /> Trusted
                                    </p>

                                    <p style={{ fontSize: '16px' }} className="ps-4">
                                        Certified with ISO 27001, our platform meets the highest standards for data security and management globally.
                                    </p>

                                </div>
                                <div>
                                    <p style={{ fontSize: '22px', color: 'black', fontWeight: 'bold' }} className="flex items-center">
                                        <FaArrowCircleRight  style={{ marginRight: '8px' }} /> Trusted
                                    </p>

                                    <p className='ps-4' style={{ fontSize: '16px' }}>We are committed to complying with the requirements of regulations protecting personal data, with GDPR and the European authorities' guidelines as our first frame of reference, implemented by our DPO.</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '22px', color: 'black', fontWeight: 'bold' }} className="flex items-center">
                                        <FaArrowCircleRight  style={{ marginRight: '8px' }} /> Trusted
                                    </p>

                                    <p className='ps-4' style={{ fontSize: '16px' }}>Our platform employs advanced encryption and security protocols to ensure your data remains protected at all times.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Sixsec;