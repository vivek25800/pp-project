import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Onesec = () => {
  return (
    <Container className="py-5">
      {/* Main heading text */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-head">A learning platform designed for the </h1>
        <h1 className="fw-bold text-head">performance-driven era of L&D.</h1>
      </div>
      
      {/* Two column layout */}
      <Row className="align-items-center">
        {/* First column - Image with device frame using Card component */}
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="border-0 shadow-sm rounded-4 bg-light">
            {/* Device notch/camera */}
            <div className="mx-auto mt-2 bg-secondary rounded-pill" style={{ width: '40px', height: '5px' }}></div>
            
            {/* Device screen/image */}
            <Card.Body className="p-3">
              <img 
                src="https://images.prismic.io/360learning/Z863ihsAHJWomRaz_customisation-grey.png?fit=max&fm=png&q=75&dpr=1&auto=format&h=446&w=600" 
                alt="Learning platform interface" 
                className="img-fluid rounded-3"
              />
            </Card.Body>
          </Card>
        </Col>
        
        {/* Second column - Text and button */}
        <Col md={6} className="ps-md-5 pe-md-4" >
          <p className="lead mb-4 text-muted ">
            Upskill employees, train customers, and enable partners from one comprehensive platform designed to deliver L&D impact.
          </p>
          
          {/* Custom Button with React Bootstrap */}
          <Button 
            variant="outline-dark" 
            className="px-4 py-2 custom-button btn-text"
          >
            Show me the features
          </Button>
        </Col>
      </Row>

      {/* Custom styling for the button animation */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
         .custom-button {
    color: black;
    background: linear-gradient(to left, transparent 50%, black 50%) !important;
    background-size: 200% 100% !important;
    background-position: right bottom !important;
    transition: background-position 0.5s ease, color 0.3s ease;
    border-color: black !important;
  }
  
  .custom-button:hover {
    background-position: left bottom !important;
    color: white !important;
    border-color: black !important;
  }
  
  .custom-button:focus, .custom-button:active {
    background-color: transparent !important;
    box-shadow: none !important;
    color: black !important;
  }
     .btn-text{
    font-size: 18px !important;
    font-weight: 600 !important;
  
  }
            .text-head{
             font-family: "Inter", sans-serif;
            font-weight: 700;
            font-size: 2.3rem !important;
            }
          
            .text-muted{
              color: #6c757d !important;
              font-size: 1.5rem !important;
              font-weight: 400 !important;
            }
          @media (max-width: 767px) {
            .custom-button {
              width: 100%;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Onesec;