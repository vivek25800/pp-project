import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Fivesec = () => {
  return (
    <div style={{ position: 'relative', textAlign: 'center', padding: '50px 20px', color: '#333', width: '100%', overflow: 'hidden' }}>
      {/* Background SVG - Full Width */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100%', zIndex: -1, overflow: 'hidden' }}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 2400 800"
          opacity="0.23"
          style={{ width: '100%', height: '100%', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        >
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad">
              <stop stop-color="hsl(265, 55%, 30%)" stop-opacity="1" offset="0%"></stop>
              <stop stop-color="hsl(265, 55%, 60%)" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g fill="url(#sssurf-grad)" transform="matrix(1,0,0,1,0,-198.92752075195312)">
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,38)" opacity="0.05"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,76)" opacity="0.14"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,114)" opacity="0.22"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,152)" opacity="0.31"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,190)" opacity="0.40"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,228)" opacity="0.48"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,266)" opacity="0.57"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,304)" opacity="0.65"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,342)" opacity="0.74"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,380)" opacity="0.83"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,418)" opacity="0.91"></path>
            <path d="M 0 303.8550284115606 Q 360 549.9258936453317 480 341.1128113757624 Q 840 501.3899454740266 960 309.0128705367282 Q 1320 570.0184808551828 1440 311.36031314848316 Q 1800 600.8786304386381 1920 309.5202704840549 Q 2280 471.24602834271906 2400 324.63247803125734 L 2400 800 L 0 800 L 0 320.4440372572941 Z" transform="matrix(1,0,0,1,0,456)" opacity="1.00"></path>
          </g>
        </svg> */}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '40px' }}>
          Loved by your peers. Celebrated by <br />industry leaders.
        </h2>
        <div style={{ margin: '40px 0px', fontSize: '22px'}}>
          <p style={{ margin: 0 }}>
            418 Total Reviews
            <img
              src="https://360learning.cdn.prismic.io/360learning/84c25911-0da8-4b1f-b4cf-e5414cb2d853_website_Capterra_4point6_stars.svg"
              alt="Capterra Stars"
              style={{ width: '100px', marginLeft: '10px' }}
            />
          </p>

          <p style={{ margin: 0, fontSize: '22px' }}>
            411 Total Reviews
            <img src="https://360learning.cdn.prismic.io/360learning/Z2mEPpbqstJ98yqL_Logowithstarsandaveragegrading.svg" alt="Logo with Stars" style={{ width: '100px', marginLeft: '10px' }} />
          </p>
        </div>


        <div className="d-flex justify-content-center">
          <Carousel style={{ marginTop: '20px', width: '50%', height: 'auto' }}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.prismic.io/360learning/Z2mDGZbqstJ98yp6_EN-Badges-2.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=15,0,1543,636&w=524&h=216"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.prismic.io/360learning/93e3905f-7f22-4f98-9d3d-7c6fc8896c36_Badges+2024+G2.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=10,0,1029,424&w=524&h=216"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.prismic.io/360learning/Z2mC25bqstJ98yp2_EN-Badges-3.png?fit=max&fm=png&q=75&dpr=1&auto=format&rect=54,0,1543,636&w=524&h=216"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Fivesec;