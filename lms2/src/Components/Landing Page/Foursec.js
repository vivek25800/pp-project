import React, { useState } from 'react';
import { Carousel, Card, Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Foursec = () => {
  // Sample data for the company cards - now with 9 cards
  const cardData = [
    {
      id: 1,

      companyLogo: "https://images.prismic.io/360learning/ZovRGR5LeNNTw5js_Logo%3DAircall%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=1,0,408,192&w=136&h=64/150/50",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 2,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 3,
      companyLogo: "https://images.prismic.io/360learning/ZovRGR5LeNNTw5js_Logo%3DAircall%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=1,0,408,192&w=136&h=64/150/50",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 4,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 5,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 6,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 7,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 8,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    },
    {
      id: 9,
      companyLogo: "https://images.prismic.io/360learning/ZovRFB5LeNNTw5jn_Logo%3DTelnet%2CSize%3DAuto-widthx64px%2CColor%3DColor.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,243,191&w=81&h=64",
      text: "360Learning was different from the moment we had a demo. Their support team is super reactive. The experience has blown me away!",
      ceoImage: "https://images.prismic.io/360learning/e9b9341d-4071-4a63-a70c-460e0e478bd9_Missy+Strong+-+Aircall.jpg?fit=max&fm=png&q=75&dpr=1&auto=format&h=64&w=64&mask=ellipse",
      ceoName: "Missy Strong",
      department: "Business Partner"
    }
  ];

  // State for controlling the carousel
  const [index, setIndex] = useState(0);

  // State for tracking which dot is being hovered
  const [hoveredDot, setHoveredDot] = useState(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    const totalSlides = Math.ceil(cardData.length / 3);
    const nextIndex = index === totalSlides - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const totalSlides = Math.ceil(cardData.length / 3);
    const prevIndex = index === 0 ? totalSlides - 1 : index - 1;
    setIndex(prevIndex);
  };

  // Function to directly navigate to a specific slide
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  // Function to chunk the cards into groups of 3
  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const cardGroups = chunkArray(cardData, 3);

  return (
    <div className="foursec-container py-5">
      <Container>
      <h2 className="text-center mb-4" style={{ fontSize: '40px', lineHeight: '1.5' }}>
  2,500+ teams have adopted<br/> 360Learning.
</h2>


        <div className="position-relative">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null} // Disabled auto-sliding
            indicators={false} // Hide default indicators since we're adding custom ones
            controls={false} // Hide default controls since we're adding custom ones
          >
            {cardGroups.map((group, idx) => (
              <Carousel.Item key={idx}>
                <Row>
                  {group.map(card => (
                    <Col md={4} key={card.id} className="mb-4">
                     <Card className="h-100 mt-5" style={{
  border: 'none',

  backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with transparency
  backdropFilter: 'blur(10px)', // Apply blur effect
  borderRadius: '10px', // Rounded corners
  transition: 'transform 0.3s ease', // Smooth transition for transform
}} 
onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  {/* Company Logo */}
  <Card.Img
    variant="top"
    src={card.companyLogo}
    alt={card.companyName}
    style={{ width: '150px', height: '100px', padding: '15px' }}
  />

  <Card.Body>
    {/* Company Name and Description */}
    <Card.Text
      className="mb-3"
      style={{ fontSize: '20px', color: 'gray' }}
    >
      {card.text}
    </Card.Text>

    {/* CEO and Department Section */}
    <div className="d-flex align-items-center mt-3">
      <Image
        src={card.ceoImage}
        roundedCircle
        width="50"
        height="50"
        className="me-3"
        alt={card.ceoName}
      />
      <div>
        <p className="mb-0 fw-bold">{card.ceoName}</p>
        <small
          className="text-muted"
          style={{
            fontSize: '12px !important',
            display: 'block'
          }}
        >
          {card.department}
        </small>
      </div>
    </div>
  </Card.Body>
</Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>



          {/* Modern dotted indicators with light gray and dark gray hover */}
          <div className="d-flex justify-content-center mt-4 gap-2">
            {cardGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className="btn p-0 border-0"
                aria-label={`Go to slide ${idx + 1}`}
                onMouseEnter={() => setHoveredDot(idx)}
                onMouseLeave={() => setHoveredDot(null)}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: index === idx ? "#555555" :
                      hoveredDot === idx ? "#888888" : "#cccccc",
                    transition: "all 0.3s ease"
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Foursec;