
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import Newspaper from "../../assets/images/footer/footer-newsletter.png"
import Footer1 from "../../assets/images/shapes/footer1.png"
import Footer2 from "../../assets/images/shapes/footer2.png"
import './style.css'
import Footer from "../../assets/images/foot.webp"
import { Container, Col,Row } from 'react-bootstrap';

const Foooter = () => {
    return (
        <Container fluid className='px-0'>
            <div className='footerBackColor'>
                <Col lg={10} md={10} sm={10} xs={11} className='mx-auto'>
                    <div className='row'>

                        <Col lg="8 mobile-col">
                            <Row>
                                <Col lg="4" sm="4" xs="6"> <div className='footer-width'>
                            <p>Categories</p>
                            <ul>
                                <li>Graphics &amp; Design</li>
                                <li>Digital Marketing</li>
                                <li>Writing &amp; Translation</li>
                                <li>Video &amp; Animation</li>
                                <li>Mobile App</li>
                                <li>Programming &amp; Tech</li>
                                <li>Data</li>
                                <li>Business</li>
                                <li>Lifestyle</li>
                                <li>Sitemap</li>
                            </ul>
                        </div></Col>
                        <Col lg="4 " sm="4" xs="6">
                        <div className='footer-width'>
                            <p>About</p>
                            <ul>
                                <li>Careers</li>
                                <li>Press &amp; News</li>
                                <li>Partnerships</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Intellectual Property Claims</li>
                                <li>Investor Relations</li>
                            </ul>
                        </div>
                        </Col>

                        <Col lg="4 " sm="4" xs="6">
                        <div className='footer-width'>
                            <p>Support</p>
                            <ul>
                                <li>Help &amp; Support</li>
                                <li>Trust &amp; Safety</li>
                                <li>General Questions</li>
                                <li>Buying on Edyssa</li>
                            </ul>
                        </div>
                        </Col>

                       
                            </Row>
                          
                        </Col>
                       
                        <Col lg="4 ">
                            <Row>
                                <Col lg="6 " sm="6" xs="6"><div className='footer-width'>
                            <p>Community</p>
                            <ul>
                                <li>Events</li>
                                <li>Blog</li>
                                <li>Forum</li>
                                <li>Community Standards</li>
                                <li>Podcast</li>
                                <li>Affiliates</li>
                                <li>Invite a Friend</li>
                                <li>Become a Seller</li>
                            </ul>
                        </div></Col>
                                <Col lg="6 " sm="6" xs="6"> <div className='footer-width'>
                            <p>More From Edyssa</p>
                            <ul>
                                <li>Edyssa Pro</li>
                                <li>Edyssa Studios</li>
                                <li>Edyssa Logo Maker</li>
                                <li>Edyssa Guides</li>
                                <li>Get Inspired</li>
                                <li>Edyssa Select</li>
                                <li>Clear Voice</li>
                                <li>Edyssa Workspace</li>
                                <li>Learn</li>
                                <li>Working Not Working</li>
                            </ul>
                        </div></Col>
                            </Row>
                        </Col>


                      
                        
                       
                    </div>
                </Col>
            </div>


            <div className='footerdown'>
                <Col lg={9} md={10} sm={10} xs={11} className='mx-auto'>
                    <div className='footerMenu py-1'>
                        <div className='d-flex ps-4 ms-2 pt-3'>
                            <p className='pe-2 text-white'>Privacy Policy</p>
                            <p className='text-white'>Terms & Conditions</p>
                        </div>
                        <div>
                            <p className='pt-3 text-white'>Copyright 2022 © Edyssa. All Rights Reserved.</p>
                        </div>
                        <div className='pt-2'>
                            <img src={ Footer} alt='' className='footerImg'/>
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    )
}

export default Foooter