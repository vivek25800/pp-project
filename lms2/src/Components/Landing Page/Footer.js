import React from 'react'
import nnnoise from './nnnoise.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div  style={{
        padding: '40px', // Padding inside the div
        backgroundImage: `url(${nnnoise})`, // Replace with your image URL
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      }}>
    <Container>
    <div  style={{
          width: '95%',
          margin: '0 auto',
         
          border: '2px solid rgba(255, 255, 255, 0.5)', // Light border
          borderRadius: '15px', // Rounded corners
          backdropFilter: 'blur(10px)', // Background blur effect
          padding: '20px', // Padding inside the div
          backgroundColor: 'rgba(248, 241, 251, 0.2)', // Semi-transparent background
        }}>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-left">
            <img src="https://nextjs.eduall.wowtheme7.com/assets/images/logo/logo.png" alt="Logo"  />
          </Col>
          <Col xs={12} md={4} className="text-center">
            <FaLinkedin size={30} style={{ margin: '0 10px' }} />
            <FaFacebook size={30} style={{ margin: '0 10px' }} />
            <FaYoutube size={30} style={{ margin: '0 10px' }} />
          </Col>
          <Col xs={12} md={4} className="text-right">
           <Button className="me-md-3 mb-3 mb-md-0 px-4 py-2 one border border-dark"><span className='btn-text'>Get a demo</span> </Button>
              <Button variant="outline-primary" className="px-4 py-2  border border-dark  custom-button"><span className='btn-text'>Countact us</span></Button>
          </Col>
        </Row>
      </div>
       
    </Container>
    <div 
    
    style={{
        width: '85%',
        margin: '0 auto',
    }}
    >
    <Container  className="d-flex justify-content-center"> {/* Full-width container */}
      <Row className="no-gutters w-100"> {/* Use no-gutters class to remove gaps and w-100 for full width */}
        <Col xs={12} sm={6} md={3}> {/* Responsive column sizes */}
          <div  style={{
            padding: '30px', // Padding inside the div
    }} >
            <h5>Company</h5>
            <p>Why 360Learning</p>
            <p>Customers</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Compliance & Security</p>
            <p>Become a partner</p>
            <p>Existing partner</p>
            <p>Partner marketplace</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div style={{
            padding: '30px', // Padding inside the div
    }}>
            <h5>Company</h5>
            <p>Why 360Learning</p>
            <p>Customers</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Compliance & Security</p>
            <p>Become a partner</p>
            <p>Existing partner</p>
            <p>Partner marketplace</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div style={{
            padding: '30px', // Padding inside the div
    }}>
            <h5>Company</h5>
            <p>Why 360Learning</p>
            <p>Customers</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Compliance & Security</p>
            <p>Become a partner</p>
            <p>Existing partner</p>
            <p>Partner marketplace</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <div style={{
            padding: '30px', // Padding inside the div
    }}>
            <h5>Company</h5>
            <p>Why 360Learning</p>
            <p>Customers</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Compliance & Security</p>
            <p>Become a partner</p>
            <p>Existing partner</p>
            <p>Partner marketplace</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    <div  style={{
          width: '85%',
          margin: '0 auto',
         
          border: '2px solid rgba(255, 255, 255, 0.5)', // Light border
          borderRadius: '15px', // Rounded corners
          backdropFilter: 'blur(10px)', // Background blur effect
          padding: '20px', // Padding inside the div
          backgroundColor: 'rgba(248, 241, 251, 0.2)', // Semi-transparent background
        }}>

<Row>
        <Col xs={12} md={7}> {/* 70% width on medium and larger screens */}
          <div>
          <Container>
      <Row>
        {/* Each Col will take up 2 columns on medium and larger screens (6 images per row) */}
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/0715bc95-a79d-4244-8a2c-b7789464a208_CorporateLearningManagementSystems_Leader_Enterprise_Leader+2+1.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,376,485&w=62&h=80" alt="Image 1"  />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/a6737f43-3adc-42c7-a4ab-4a17202ba50d_LearningManagementSystem%28LMS%29_EasiestToDoBusinessWith_Enterprise_EaseOfDoingBusinessWith+1.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,376,485&w=62&h=80" alt="Image 2" />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/c8273e36-0a51-4cb9-bf15-0256f2543741_CorporateLearningManagementSystems_Leader_Mid-Market_Leader+2+1.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,376,485&w=62&h=80" alt="Image 3" />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/Z2WeEJbqstJ98vjy_%231Best_Learning_Management_Systems_2025.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=3,0,5084,4237&w=96&h=80" alt="Image 4"  />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/20a1f93f-32e9-4bdc-b77b-2db07ff630c6_Top-LMS-Tools-For-Skills-Development-And-Assessment-2024+2.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=0,0,1294,1138&w=91&h=80" alt="Image 5"  />
        </Col>
        <Col xs={6} sm={4} md={2}>
          <img src="https://images.prismic.io/360learning/Z2WfFJbqstJ98vkH_%231Top_Employee_Training_LMS_Platforms_In_2025.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=2,0,5087,4239&w=96&h=80" alt="Image 6"  />
        </Col>
      </Row>
    </Container>
          </div>
        </Col>
        <Col xs={12} md={5}> {/* 30% width on medium and larger screens */}
        <div style={{
            marginTop:'28px',
            textAlign:'center'
        }}>
          <p style={{fontSize:'18px'}}>
            Teams choose <span style={{ color: '#D8BFD8'}}>Edu All</span> for better learning at work
          </p>
        </div>
        </Col>
      </Row>
            </div>
  </div>
  )
}

export default Footer
