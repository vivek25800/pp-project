import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaArrowRight } from "react-icons/fa6";

import { FaAlignRight } from "react-icons/fa";

// import './Header.css';

const Header = () => {
    const menuItems = [
        {
            label: "Home",
        },
        {
            label: "Courrses",
            links: [
                { href: "/course", label: "Course Grid View" },
                { href: "/course-list-view", label: "Course List View" },
                { href: "/course-details", label: "Course Details" },
                { href: "/lesson-details", label: "Lesson Details" },
            ],
        },
        {
            label: "Pages",
            links: [
                { href: "/course", label: "Course Grid View" },
                { href: "/course-list-view", label: "Course List View" },
                { href: "/course-details", label: "Course Details" },
                { href: "/lesson-details", label: "Lesson Details" },
            ],
        },
        {
            label: "Blog",
            links: [
                { href: "/blog", label: "Blog Grid" },
                { href: "/blog-list", label: "Blog List" },
                { href: "/blog-classic", label: "Blog Classic" },
                { href: "/blog-details", label: "Blog Details" },
            ],
        },
        {
            href: "/contact",
            label: "Contact"
        },
    ];
    return (
        <>
            <Navbar expand="lg" className="nav-bg fixed-top">
                <Container fluid className="ps-3 pe-3">
                    {/* Logo Start */}
                    <Navbar.Brand href="#home">
                        <img
                            src="https://nextjs.eduall.wowtheme7.com/assets/images/logo/logo.png"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    {/* Logo End */}
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        as="button"
                        className="border-0 bg-transparent shadow-none outline-none"
                    >
                        <FaAlignRight size={28} />
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ps-5 d-flex align-items-center gap-1">
                            <Nav.Link href="#home" className="comic-relief-regular">
                                Home
                            </Nav.Link>

                            <NavDropdown
                                title={
                                    <>
                                        Product <RiArrowDropDownLine size={28} />  {/* Use the icon here */}
                                    </>
                                }
                                id="basic-nav-dropdown"
                                className="comic-relief-regular ps-3"
                            >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title={
                                    <>
                                        Use Cases <RiArrowDropDownLine size={28} />  {/* Use the icon here */}
                                    </>
                                } id="basic-nav-dropdown" className="comic-relief-regular ps-3">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className="comic-relief-regular ps-3">
                                Pricing
                            </Nav.Link>

                            <NavDropdown
                                title={
                                    <>
                                        Resources <RiArrowDropDownLine size={28} />  {/* Use the icon here */}
                                    </>
                                } id="basic-nav-dropdown" className="comic-relief-regular ps-3">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#link" className="comic-relief-regular ps-3">
                                Join Us
                            </Nav.Link>
                        </Nav>

                        {/* Right side buttons */}
                        <div className="d-flex align-items-center gap-3">
                            <Nav.Link href="#signin" className="comic-relief-regular ">
                                Sign In
                                 <FaArrowRight size={12} className="ms-2"/>
                            </Nav.Link>
                            <button>
                                <span>Free Trial</span>
                            </button>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
