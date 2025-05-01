import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Book, Plane, Users, Smartphone, ArrowRight } from 'lucide-react';

const Thirdsec = () => {
  return (
    <div className="bg-gray-50 py-24 mt-5 mb-3">
      <Container>
      <Row className="mb-12">
  <Col className="text-center d-flex justify-content-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ maxWidth: '60%', width: '100%', fontSize: '2rem' }}>
      Remove the headache of picking, integrating, and running multiple learning solutions.
    </h2>
  </Col>
</Row>

        
        <Row className="g-4 mb-12">
          {/* First Column */}
          <Col md={4}>
            <div className="bg-white rounded-lg shadow-sm p-4 h-100 hover:shadow-md transition-all">
              <div className="d-flex">
                <div className="me-3">
                  <div className="bg-green-100 rounded-lg p-3 d-inline-flex">
                    <Book size={24} className="text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h3 className="text-xl fw-bold mb-2">Compliance training</h3>
                  <p className="text-gray-700">Automate and manage mandatory training and retraining</p>
                </div>
                <div className="ms-2 d-flex align-items-center">
                  <ArrowRight size={20} className="text-gray-800" />
                </div>
              </div>
            </div>
          </Col>
          
          {/* Second Column */}
          <Col md={4}>
            <div className="bg-white rounded-lg shadow-sm p-4 h-100 hover:shadow-md transition-all">
              <div className="d-flex">
                <div className="me-3">
                  <div className="bg-green-100 rounded-lg p-3 d-inline-flex">
                    <Plane size={24} className="text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h3 className="text-xl fw-bold mb-2">Employee onboarding</h3>
                  <p className="text-gray-700">Eliminate onboarding busywork and instill a sense of community</p>
                </div>
                <div className="ms-2 d-flex align-items-center">
                  <ArrowRight size={20} className="text-gray-800" />
                </div>
              </div>
            </div>
          </Col>
          
          {/* Third Column */}
          <Col md={4}>
            <div className="bg-white rounded-lg shadow-sm p-4 h-100 hover:shadow-md transition-all">
              <div className="d-flex">
                <div className="me-3">
                  <div className="bg-green-100 rounded-lg p-3 d-inline-flex">
                    <Users size={24} className="text-gray-700" />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h3 className="text-xl fw-bold mb-2">Sales enablement</h3>
                  <p className="text-gray-700">Train your sales team to win with 1:1 video coaching at scale</p>
                </div>
                <div className="ms-2 d-flex align-items-center">
                  <ArrowRight size={20} className="text-gray-800" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* See All Button */}
        <Row>
          <Col className="text-center">
             <Button 
                        variant="outline-dark" 
                        className="px-4 py-2 custom-button btn-text m-5"
                      >
                        See All
                      </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Thirdsec;