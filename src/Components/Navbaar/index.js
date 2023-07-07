import React, { useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import Image1 from "../../assets/images/logo1.png"
import { FaSearch, FaBars } from 'react-icons/fa';

const Navbaar = () => {
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


                <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                            Home
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Home 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Home 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Home 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Services 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Services 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Services 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>



                    <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                            Project
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Project 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Project 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Project 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                           Pages
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Pages 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Pages 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Pages 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                            Shop
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Shop 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Shop 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Shop 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                   <Dropdown as={Nav.Item} style={{marginRight:"12px"}}>
                        <Dropdown.Toggle as={Nav.Link} id="project-dropdown">
                           Blog
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#project1">Blog 1</Dropdown.Item>
                            <Dropdown.Item href="#project2">Blog 2</Dropdown.Item>
                            <Dropdown.Item href="#project3">Blog 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    
                </Nav>
                <Nav className="ml-auto">
                <Button variant="text" className="ml-2">Log in </Button>
                    <Button variant="primary" className="ml-2">Sign Up Free </Button>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navbaar;
