import React, { useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import Image1 from "../../assets/images/logo1.png"
import { FaSearch, FaBars,FaAngleDoubleRight } from 'react-icons/fa';

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
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding:"21px 32px" }}
            className='header-upper'
        >
            
            <Navbar.Brand href="#home">
                <img src={Image1} alt="image1" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleMenu}>
                <FaBars />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className={showMenu ? 'show' : ''}>
                <Nav className="lisSpacing">
                    <Nav.Link href="#home" className='headLis'>Home</Nav.Link>
                    <Nav.Link href="#services" className='headLis'>Services</Nav.Link>
                    <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown" className='headLis'>
                            Project
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1" >Project 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Project 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Project 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="#pages" className='headLis'>Pages</Nav.Link>
                    <Nav.Link href="#shop" className='headLis'>Shop</Nav.Link>
                    <Nav.Link href="#blog" className='headLis'>Blog</Nav.Link>
                    <Nav.Link href="#contact" className='headLis'>Contact</Nav.Link>
                    <Nav.Link href="#search">
                        <FaSearch />
                    </Nav.Link>
                </Nav>
                <Nav className="ml-auto d-flex justify-content-end w-100">
                    <a className="ml-2 theme-btn">Download Now <FaAngleDoubleRight className='mt-1 ms-2'/> </a>
                    
                    <div class="menu-sidebar"><button><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
