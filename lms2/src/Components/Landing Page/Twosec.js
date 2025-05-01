import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Twosec = () => {
  // Comparison data rows
  const comparisonData = [
    { category: 'Content strategy', innovative: 'Expert-led', traditional: 'Top-down learning' },
    { category: 'Creator', innovative: 'Everyone', traditional: 'L&D only' },
    { category: 'Course creation', innovative: 'Minutes', traditional: 'Weeks' },
    { category: 'Content relevance', innovative: '95%', traditional: 'Untrackable' },
    { category: 'Learner experience', innovative: 'Interactive, peer-driven', traditional: 'Static, top-down' },
    { category: 'Completion rate', innovative: '91%', traditional: '20%' },
    { category: 'Impact measured', innovative: 'Skills gaps closed', traditional: 'Time spent on learning' },
  ];

  return (
    <div className="py-5" style={{   background: 'linear-gradient(to bottom, #ffffff 0%,rgb(223, 212, 243) 80%, #ffffff 90%)', 
      minHeight: '100vh', 
      padding: '50px 0'  }}>
      <Container>
        {/* Heading */}
        <Row className="justify-content-center mb-5">
          <Col md={8} className="text-center">
            <h2 className="fw-bold">The future of learning is here. And it's collaborative.</h2>
          </Col>
        </Row>

        {/* One Row with 3 Columns - increasing width for better spacing */}
        <Row className="justify-content-center g-0 ">
          {/* Column 1 - Categories */}
          <Col md={4} lg={3} className="mb-4 col1">
            <Card className="border-0  h-100 col1">
              <Card.Header className=" border-0 py-3 text-center" style={{ height: "82px" }}>
                {/* Empty header with fixed height */}
                <div className="fw-bold mb-2">&nbsp;</div>
                <div className="text-muted small">&nbsp;</div>
              </Card.Header>
              <Card.Body className="p-0">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 ps-3 comparison-row" style={{ height: "70px", display: "flex", alignItems: "center" }}>
                    {item.category}
                  </div>
                ))}
                <div className="py-3 ps-3 d-flex align-items-center comparison-row" style={{ height: "70px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2">
                    <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="2"/>
                    <path d="M8 14s1 3 4 3 4-3 4-3" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="9" cy="9" r="1" fill="#666"/>
                    <circle cx="15" cy="9" r="1" fill="#666"/>
                  </svg>
                  User rating
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Column 2 - 360learning */}
          <Col md={4} lg={3} className="mb-4">
            <Card className="border-0 shadow h-100">
              <Card.Header className="bg-white border-0 py-3 text-center" style={{ height: "82px" }}>
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <div className="bg-success rounded-circle me-2 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="white"/>
                    </svg>
                  </div>
                  <span className="fw-bold">360learning</span>
                </div>
                <div className="text-muted small">Collaborative learning</div>
              </Card.Header>
              <Card.Body className="p-0 bg-light">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 px-2 text-center comparison-row" style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.innovative}
                  </div>
                ))}
                <div className="py-3 text-center comparison-row" style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">4.6</span>
                    {Array(5).fill().map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="#E8B800" strokeWidth="1"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </Card.Body>
              <div className="text-center py-4">
                <Button 
                  className="px-4 py-2" 
                  style={{ backgroundColor: '#4ECDC4', borderColor: '#4ECDC4' }}
                >
                  Book my demo
                </Button>
              </div>
            </Card>
          </Col>

          {/* Column 3 - Traditional LMS */}
          <Col md={4} lg={3} className="mb-4 col1">
            <Card className="border-0  h-100 col1">
              <Card.Header className=" border-0 py-3 text-center" style={{ height: "82px" }}>
                <div className="fw-bold mb-2">Traditional LMS</div>
                <div className="text-muted small">Top-down learning</div>
              </Card.Header>
              <Card.Body className="p-0">
                {comparisonData.map((item, index) => (
                  <div key={index} className="py-3 px-2 text-center comparison-row" style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="text-break">{item.traditional}</span>
                  </div>
                ))}
                <div className="py-3 text-center comparison-row" style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2">3.2</span>
                    {Array(5).fill().map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 3 ? "#FFD700" : "#D3D3D3"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke={i < 3 ? "#E8B800" : "#B0B0B0"} strokeWidth="1"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Custom CSS for dotted borders */}
      <style jsx>{`
        .comparison-row {
          position: relative;
        }
        
        .comparison-row::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
          background-position: bottom;
          background-size: 8px 1px;
          background-repeat: repeat-x;
        }
        
        /* Remove the dotted border from the last row */
        .comparison-row:last-of-type::after {
          display: none;
        }

    
        .col1 {
          background-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Twosec;