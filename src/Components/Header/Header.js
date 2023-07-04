import React, { useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import Image1 from "../../assets/images/logo1.png"
import { FaSearch, FaBars } from 'react-icons/fa';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="light"
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', paddingRight: '40px', paddingLeft: '40px' }}
        >
            <Navbar.Brand href="#home">
                <img src={Image1} alt="image1" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu}>
                <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className={showMenu ? 'show' : ''}>
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                            Project
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Project 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Project 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Project 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="#pages">Pages</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#search">
                        <FaSearch />
                    </Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Button variant="primary" className="ml-2">Download</Button>
                    <Nav.Link>
                        <FaBars />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
