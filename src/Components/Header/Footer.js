
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import Newspaper from "../../assets/images/footer/footer-newsletter.png"
import Footer1 from "../../assets/images/shapes/footer1.png"
import Footer2 from "../../assets/images/shapes/footer2.png"
import './style.css'
import Footer from "../../assets/images/foot.webp"
import { Container, Col } from 'react-bootstrap';

const Foooter = () => {
    return (
        <Container fluid className='px-0'>
            <div className='footerBackColor'>
                <Col lg={9} md={10} sm={10} xs={11} className='mx-auto'>
                    <div className='d-flex'>
                        <div className='footer-width'>
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
                        </div>
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
                        <div className='footer-width'>
                            <p>Support</p>
                            <ul>
                                <li>Help &amp; Support</li>
                                <li>Trust &amp; Safety</li>
                                <li>General Questions</li>
                                <li>Buying on Edyssa</li>
                            </ul>
                        </div>
                        <div className='footer-width'>
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
                        </div>
                        <div className='footer-width'>
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
                        </div>
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