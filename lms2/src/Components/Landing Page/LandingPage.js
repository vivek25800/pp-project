import React from 'react'
import './LandingPage.css';
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const courses = [
    {
      id: 1,
      title: 'HTML 5 Web Component Fundamentals',
      level: 'Beginner',
      time: '2h 24m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-03.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Mastering CSS 3 Flexbox With Real World Projects',
      level: 'Beginner',
      time: '3h 18m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-02.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Full Stack Web Development with React Hooks and Redux',
      level: 'Intermediate',
      time: '4h 36m',
      category: 'Front End',
      image: 'https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-01.jpg', // Replace with actual image URL
    },
  ];

  // Icon components
const BookIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#2176FF" strokeWidth="2"/>
      <path d="M14 11H24C25.1 11 26 11.9 26 13V27C26 28.1 25.1 29 24 29H14C12.9 29 12 28.1 12 27V13C12 11.9 12.9 11 14 11Z" stroke="#2176FF" strokeWidth="1.5" fill="none"/>
      <path d="M16 16H22" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M16 19H22" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M16 22H20" stroke="#2176FF" strokeWidth="1.5"/>
    </svg>
  );

  const LibraryIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#FF4747" strokeWidth="2"/>
      <path d="M16 13V25" stroke="#FF4747" strokeWidth="1.5"/>
      <path d="M16 25L12 27V15L16 13" stroke="#FF4747" strokeWidth="1.5" fill="none"/>
      <path d="M16 13L20 15L24 13" stroke="#FF4747" strokeWidth="1.5"/>
      <path d="M20 15V27" stroke="#FF4747" strokeWidth="1.5"/>
      <path d="M24 13V25L28 27V15L24 13" stroke="#FF4747" strokeWidth="1.5" fill="none"/>
      <path d="M17 17H19" stroke="#FF4747" strokeWidth="1.5"/>
      <path d="M21 19H23" stroke="#FF4747" strokeWidth="1.5"/>
    </svg>
  );

  const CertificateIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#2176FF" strokeWidth="2"/>
      <path d="M24 14H16C14.9 14 14 14.9 14 16V24C14 25.1 14.9 26 16 26H24C25.1 26 26 25.1 26 24V16C26 14.9 25.1 14 24 14Z" stroke="#2176FF" strokeWidth="1.5" fill="none"/>
      <circle cx="20" cy="19" r="3" stroke="#2176FF" strokeWidth="1.5" fill="none"/>
      <path d="M18 22L16 26" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M22 22L24 26" stroke="#2176FF" strokeWidth="1.5"/>
    </svg>
  );

  const AcademicIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="#2176FF" strokeWidth="2"/>
      <path d="M11 25H29" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M13 25V18" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M27 25V18" stroke="#2176FF" strokeWidth="1.5"/>
      <path d="M10 18L20 13L30 18L20 23L10 18Z" stroke="#2176FF" strokeWidth="1.5" fill="none"/>
    </svg>
  );

  // Service Card Component
const ServiceCard = ({ icon, title, description, image }) => {
    return (
      <div className="service-card">
        <div className="service-icon">
          {icon}
        </div>
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <div className="service-image-container">
          <img src={image} alt={title} className="service-image" />
          {title === "Exclusive Advisor" && (
            <div className="arrow-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          {title === "Study Off Flexibly" && (
            <div className="arrow-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          {title === "Online Certificates" && (
            <div className="arrow-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
          {title === "Evidence of learned" && (
            <div className="arrow-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 4L16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    );
  };

function LandingPage() {

    const services = [
        {
          id: 1,
          icon: <BookIcon />,
          title: "Exclusive Advisor",
          description: "Monotonically conceptualize cutting-edge convergence whereas B2C networks.",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 2,
          icon: <LibraryIcon />,
          title: "Study Off Flexibly",
          description: "Discover different career paths and industries, along with the required skills, education.",
          image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 3,
          icon: <CertificateIcon />,
          title: "Online Certificates",
          description: "Gain insights into how parents can support their childs educational journey.",
          image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        },
        {
          id: 4,
          icon: <AcademicIcon />,
          title: "Evidence of learned",
          description: "Access a range of teaching strategies, lesson plans, classroom management.",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        }
      ];


  return (
    <div>

        <div className='landing-page-container'>
            <Box className='navbar-box' >
                <div className='logo-div'>
                    <h4>Landing Page</h4>
                </div>
                <div className='navbar-options'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <Button className='start-learning-btn'>Start Learning</Button>
                </div>
            </Box>

            <Box className='content-media-div'>
                <div className='left-side-content'>
                    <Typography
                        variant="subtitle1"
                        sx={{ color: '#FFC107', fontWeight: 'bold' }}
                    >
                        ON-DEMAND COURSE
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 'bold', margin: '20px 0', color: '#ffffff' }}
                    >
                        Complete Python Masterclass for Web Development
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '30px', color: '#ffffff' }}>
                        Amet facilisi phasellus lacus, sit massa, erat placerat aenean
                        aliquet ultrices eleifend enim enim lacus elit.
                    </Typography>

                    <Box className='buttons-section'>
                        <Button>Start Course</Button>
                        <Button><i class="fa-solid fa-arrow-right" style={{marginRight:'10px'}}></i>  View All Course</Button>
                    </Box>
                </div>
                <div className='right-side-content'>
                    <div className='player-media'>
                        <Button className='player-btn'><i class="fa-solid fa-play"></i></Button>
                    </div>
                </div>
            </Box>
        </div>

        <div className='joined-customers-div'>
                <div class="partners-logo-slider">
                    <h4 class="sliderTitle">Join 2,300+ customers that already love collaborative learning</h4>
                        <div class="slide-track">
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                            </div>
                            <div class="slide">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                            </div>
                        </div>
                    </div>
        </div>

        <div className="education-services-container">
        <div className="services-header">
            <div className="services-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="label-icon">
                <rect x="1" y="1" width="14" height="14" rx="2" stroke="#2176FF" strokeWidth="2"/>
                <path d="M5 8H11" stroke="#2176FF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 5V11" stroke="#2176FF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>OUR SERVICES</span>
            </div>
            <h2 className="services-title">Our Creative Education Services</h2>
        </div>
        
        <div className="services-grid">
            {services.map(service => (
            <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
            />
            ))}
        </div>
        
        <button className="scroll-to-top">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="#2176FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12L12 5L19 12" stroke="#2176FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
        </div>


        <div className="edu-container">
      <div className="edu-hero">
        <div className="edu-hero-image">
          <div className="edu-image-wrapper">
            <img src="/api/placeholder/600/600" alt="Graduates celebrating" />
          </div>
        </div>
        <div className="edu-hero-content">
          <div className="edu-company-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>MORE ABOUT OUR COMPANY</span>
          </div>
          
          <h1 className="edu-title">Learn About Edura Education</h1>
          
          <p className="edu-description">
            Synergistically visualize alternative content before cross functional core Rapidiously administra
            standardized value via focused benefits. Rapidiously redefine highly efficient niche markets with
            plug-and-play materials professionally seize client centric solutions
          </p>
          
          <div className="edu-features">
            <div className="edu-feature-card">
              <div className="edu-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 12h-6.5"></path>
                  <path d="M13.5 8.5L16 12l-2.5 3.5"></path>
                  <path d="M9.5 15.5L8 14l-1.5 1.5"></path>
                </svg>
              </div>
              <h3>Competitive Rates</h3>
              <p>Join us on our journey as we continue to innovate & shape the future of education.</p>
            </div>
            
            <div className="edu-feature-card">
              <div className="edu-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Online Certificates</h3>
              <p>We believe that education is fundamental right and a catalyst for personal growth.</p>
            </div>
          </div>
          
          <div className="edu-buttons">
            <button className="edu-button edu-button-primary">
              LEARN MORE
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="edu-button edu-button-secondary">
              CONTACT US
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>


        <div className="course-card-landing">
                <div className="course-card-image">
                    <img
                    src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-video.jpg" // Replace with the correct path
                    alt="Python Course Display"
                    />
                </div>
                <div className="course-card-content">
                    <h5 className="featured">FEATURED COURSE</h5>
                    <h1>Getting Started With Python 3 for Beginners</h1>
                    <p>
                    Nibh enim nisi amet et nunc varius facilisis nulla non urna pulvinar
                    felis, faucibus id placerat.
                    </p>
                    <ul className="features-list">
                    <li><i class="fa-solid fa-circle-check"></i> Fundamental</li>
                    <li><i class="fa-solid fa-circle-check"></i> Conditional branching</li>
                    <li><i class="fa-solid fa-circle-check"></i> Input and output</li>
                    <li><i class="fa-solid fa-circle-check"></i> 8+ more lessons</li>
                    </ul>
                    <button className="start-course-btn">Start Course</button>
                </div>
            </div>

            <div className="course-card-grid-container">
            {courses.map((course) => (
                <div key={course.id} className="course-card-grid">
                <img src={course.image} alt={course.title} className="course-card-grid-image" />
                <div className="course-card-grid-content">
                    <p className="category">{course.category}</p>
                    <h3>{course.title}</h3>
                    <div className="course-meta">
                    <span className="level"><i class="fa-solid fa-user"></i> {course.level}</span>
                    <span className="time">⏳ {course.time}</span>
                </div>
                <Button className='explore-btn'>Explore <TrendingFlatIcon/></Button>
                </div>
                </div>
            ))}
            </div>
            <div className='explore-more-courses-div'>
                <Button className='more-courses-btn'>Explore More Courses <TrendingFlatIcon/> </Button>
            </div>


            <div className="custom-section">
      <div className="content">
        <h1>We Provide All Facilities For Better Work Environment</h1>
        <p>
          A descriptive paragraph that tells clients how good you are and proves that you are the best choice they've made.
          This paragraph is for those looking for a reliable co-working space.
        </p>
        <div className="features">
          <div className="feature-item">
            <i className="icon">📦</i>
            <p>Flexible Private Office</p>
          </div>
          <div className="feature-item">
            <i className="icon">📐</i>
            <p>Fully Custom Space</p>
          </div>
        </div>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="image-section">
        <img src="https://websitedemos.net/co-working-space-02/wp-content/uploads/sites/65/elementor/thumbs/facilites-orx0y86134elij5tx2trgmxax99mrfxixavma26y3k.jpg" alt="Work Environment" />
        <div className="overlay-card">
          <h4>Anything You Need</h4>
          <p>This is a short description elaborating the service you have mentioned above.</p>
        </div>
      </div>
            </div>
    
    </div>
  )
}

export default LandingPage
