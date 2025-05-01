import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Client = () => {
  // Sample company logos - replace these with your actual image paths
  const companyLogos = [
    { id: 1, name: 'Company 1', src: 'https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64' },
    { id: 2, name: 'Company 2', src: 'https://images.prismic.io/360learning/ZovRLR5LeNNTw5kC_Logo%3DCrisp%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=1,0,432,192&w=144&h=64' },
    { id: 3, name: 'Company 3', src: 'https://images.prismic.io/360learning/ZovRGR5LeNNTw5js_Logo%3DAircall%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=1,0,408,192&w=136&h=64/150/50' },
    { id: 4, name: 'Company 4', src: 'https://images.prismic.io/360learning/ZovQ6x5LeNNTw5i6_Logo%3DTrustpilot%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,447,192&w=149&h=64/150/50' },
    { id: 5, name: 'Company 5', src: 'https://images.prismic.io/360learning/ZovRIx5LeNNTw5j3_Logo%3DVeolia%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,456,192&w=152&h=64/150/50' },
    { id: 6, name: 'Company 6', src: 'https://images.prismic.io/360learning/ZovRKB5LeNNTw5j9_Logo%3DKingFisher%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,387,192&w=129&h=64/150/50' },
  ];

  return (
    <Container className="py-5">
      {/* Centered headline text */}
      <div className="text-center mb-5">
      <h4 className="fw-bold responsive-heading">
            Join 2,500+ customers that already love collaborative learning
        </h4>
      </div>

      {/* Row with 6 company logos */}
      <Row className="justify-content-center">
        {companyLogos.map((logo) => (
          <Col key={logo.id} xs={6} sm={4} md={2} className="mb-4 text-center">
            <img 
              src={logo.src} 
              alt={logo.name} 
              className="img-fluid filter-grayscale" 
              style={{ maxHeight: '50px' }}
            />
          </Col>
        ))}
      </Row>

      {/* Add this CSS to your stylesheet for grayscale effect */}
      <style jsx>{`
        .filter-grayscale {
  filter: grayscale(100%) contrast(1.2) brightness(0.8);
  transition: filter 0.3s ease;
}

.filter-grayscale:hover {
  filter: grayscale(0%) contrast(1) brightness(1);
}
      `}</style>
    </Container>
  );
};

export default Client;