import React from 'react'
import { Box, Grid, Typography, Button, Card, CardMedia } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './LandingPage.css';

function NavbarLnading() {

    const navigate = useNavigate();
    
    const navigateHome = () => {
      navigate('/talents-bulder/landingpage');
    }

    const navigatePricing = () => {
      navigate('/talents-bulder/pricing/');
    }

    const navigateOurServices = () => {
      navigate('/talents-bulder/our-services/');
    }
    
    const navigateLoginSign = () => {
      navigate('/talents-bulder/login/signin/');
    }
    
    const navigateAboutUs = () => {
      navigate('/talents-bulder/about-Us/');
    }

    const navigateCourses = () => {
      navigate('/talents-bulder/courses/');
    }

    const navigateBlog = () => {
      navigate('/talents-bulder/blog/');
    }

    // const navigateContactUs = () => {
    //   navigate('/talents-bulder/contact-us/');
    // }

  return (
    <div>
        
        <Box className='navbar-box' >
                        <div className='logo-div'>
                            <h4>Talents Builder</h4>
                            {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="50" width="80" alt='logo' /> */}
                        </div>
                        <div className='navbar-options'>
                            <ul>
                                <li onClick={navigateHome}>Home</li>
                                <li onClick={navigatePricing}>Pricing</li>
                                <li onClick={navigateOurServices}>Our Services</li>
                                <li onClick={navigateCourses}>Courses</li>
                                <li onClick={navigateAboutUs}>About US</li>
                                <li onClick={navigateBlog}>Blog</li>
                                <li onClick={navigateLoginSign}>Contact Us</li>
                            </ul>
                            <Button className='start-learning-btn' onClick={navigateLoginSign}>Login / Register</Button>
                        </div>
                    </Box>

    </div>
  )
}

export default NavbarLnading