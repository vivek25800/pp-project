// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';  // Importing necessary Bootstrap components
// import './Banner.css';  // Importing custom CSS for styling

// const Banner = () => {
//     return (
//         <div className="home" style={{ position: 'relative', overflow: 'hidden' ,marginTop:'56px'}}> {/* Main container with relative positioning */}
//             {/* Background SVG */}
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 xmlns:xlink="http://www.w3.org/1999/xlink"
//                 xmlns:svgjs="http://svgjs.dev/svgjs"
//                 viewBox="0 0 800 800"
//                 opacity="0.08"
//                 style={{
//                     position: 'absolute',
//                     width: '100%',
//                     height: '100%',
//                     top: 0,
//                     left: 0,
//                     objectFit: 'cover'
//                 }}
//                 preserveAspectRatio="xMidYMid slice"
//             >
//                 <defs>
//                     <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hhhorizon-grad">
//                         <stop stop-color="hsl(184, 74%, 44%)" stop-opacity="1" offset="25%"></stop>
//                         <stop stop-color="hsl(332, 87%, 70%)" stop-opacity="1" offset="100%"></stop>
//                     </linearGradient>
//                     <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hhhorizon-grad2">
//                         <stop stop-color="hsl(332, 87%, 70%)" stop-opacity="1" offset="0%"></stop>
//                         <stop stop-color="hsl(184, 74%, 44%)" stop-opacity="1" offset="75%"></stop>
//                     </linearGradient>
//                     <clipPath id="SvgjsClipPath1057">
//                         <rect width="800" height="48" x="0" y="0"></rect>
//                         <rect width="800" height="47" x="0" y="17"></rect>
//                         <rect width="800" height="46" x="0" y="34"></rect>
//                         <rect width="800" height="45" x="0" y="51"></rect>
//                         <rect width="800" height="44" x="0" y="68"></rect>
//                         <rect width="800" height="43" x="0" y="85"></rect>
//                         <rect width="800" height="42" x="0" y="102"></rect>
//                         <rect width="800" height="41" x="0" y="119"></rect>
//                         <rect width="800" height="40" x="0" y="136"></rect>
//                         <rect width="800" height="39" x="0" y="153"></rect>
//                         <rect width="800" height="38" x="0" y="170"></rect>
//                         <rect width="800" height="37" x="0" y="187"></rect>
//                         <rect width="800" height="36" x="0" y="204"></rect>
//                         <rect width="800" height="35" x="0" y="221"></rect>
//                         <rect width="800" height="34" x="0" y="238"></rect>
//                         <rect width="800" height="33" x="0" y="255"></rect>
//                         <rect width="800" height="32" x="0" y="272"></rect>
//                         <rect width="800" height="31" x="0" y="289"></rect>
//                         <rect width="800" height="30" x="0" y="306"></rect>
//                         <rect width="800" height="29" x="0" y="323"></rect>
//                         <rect width="800" height="28" x="0" y="340"></rect>
//                         <rect width="800" height="27" x="0" y="357"></rect>
//                         <rect width="800" height="26" x="0" y="374"></rect>
//                         <rect width="800" height="25" x="0" y="391"></rect>
//                         <rect width="800" height="24" x="0" y="409"></rect>
//                         <rect width="800" height="23" x="0" y="426"></rect>
//                         <rect width="800" height="22" x="0" y="443"></rect>
//                         <rect width="800" height="21" x="0" y="460"></rect>
//                         <rect width="800" height="20" x="0" y="477"></rect>
//                         <rect width="800" height="19" x="0" y="494"></rect>
//                         <rect width="800" height="18" x="0" y="511"></rect>
//                         <rect width="800" height="17" x="0" y="528"></rect>
//                         <rect width="800" height="16" x="0" y="545"></rect>
//                         <rect width="800" height="15" x="0" y="562"></rect>
//                         <rect width="800" height="14" x="0" y="579"></rect>
//                         <rect width="800" height="13" x="0" y="596"></rect>
//                         <rect width="800" height="12" x="0" y="613"></rect>
//                         <rect width="800" height="11" x="0" y="630"></rect>
//                         <rect width="800" height="10" x="0" y="647"></rect>
//                         <rect width="800" height="9" x="0" y="664"></rect>
//                         <rect width="800" height="8" x="0" y="681"></rect>
//                         <rect width="800" height="7" x="0" y="698"></rect>
//                         <rect width="800" height="6" x="0" y="715"></rect>
//                         <rect width="800" height="5" x="0" y="732"></rect>
//                         <rect width="800" height="4" x="0" y="749"></rect>
//                         <rect width="800" height="3" x="0" y="766"></rect>
//                         <rect width="800" height="2" x="0" y="783"></rect>
//                         <rect width="800" height="1" x="0" y="800"></rect>
//                     </clipPath>
//                 </defs>
//                 <rect width="800" height="800" fill="url(#hhhorizon-grad)" clip-path="url(#SvgjsClipPath1057)"></rect>
//                 <circle r="400" cx="400" cy="0" fill="url(#hhhorizon-grad)" clip-path="url(#SvgjsClipPath1057)"></circle>
//                 <circle r="400" cx="400" cy="800" fill="url(#hhhorizon-grad)" clip-path="url(#SvgjsClipPath1057)"></circle>
//             </svg>

//             {/* Content Container */}
//             <Container className="d-flex justify-content-center align-items-center" style={{ height: '100%', position: 'relative', zIndex: 1 }}>
//                 <Row className="text-center w-100 ">
//                     <Col className="d-flex flex-column justify-content-center" style={{ minHeight: '100vh' }}>
//                         <div className="headline-container mt-5">
//                             <h1 className="mb-2">The learning platform that</h1>
//                             <h1 className="mb-2">combines the <span className="animated-gradient-text">power of AI</span> with the</h1>
//                             <h1 className="mb-2">magic of <span className="animated-gradient-text">collaborative learning</span></h1>
//                         </div>

//                         <div className="mt-4 d-flex flex-column flex-md-row justify-content-center">
//                             <Button className="me-md-3 mb-3 mb-md-0 px-4 py-2 one border border-dark"><span className='btn-text'>I want a demo</span> </Button>
//                             <Button variant="outline-primary" className="px-4 py-2  border border-dark  custom-button"><span className='btn-text'>See how it Works</span></Button>
//                         </div>


//                         <div className="mt-5 mb-5">
//                             <img
//                                 src="https://images.prismic.io/360learning/Z8sRmhsAHJWomPG4_HeroScreen.png?fit=max&fm=png&q=75&dpr=1&auto=format&h=702&w=1150"
//                                 alt="Learning Platform Interface"
//                                 className="img-fluid mx-auto d-block"
//                                 style={{ maxWidth: '100%', height: 'auto' }}
//                             />
//                         </div>

//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// export default Banner;