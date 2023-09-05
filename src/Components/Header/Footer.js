
import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
import Newspaper from "../../assets/images/footer/footer-newsletter.png"
import Footer1 from "../../assets/images/shapes/footer1.png"
import Footer2 from "../../assets/images/shapes/footer2.png"
import './style.css'
import Footer from "../../assets/images/foot.webp"
import { Container, Col, Row } from 'react-bootstrap';

const Foooter = () => {
    return (
        <Container fluid className='px-0'>
            <div className='footerBackColor'>
                <Col lg={10} md={10} sm={10} xs={11} className='mx-auto'>
                    <div className='row'>

                        <Col lg="8 mobile-col">
                            <Row>
                                <Col lg="4" sm="4" xs="6"> <div className='footer-width'>
                                    <p className='m-0' style={{ color: "white",padding:"8px 0px" }}>Categories</p>
                                    <ul>
                                        <li style={{fontSize:"13px"}}>Graphics &amp; Design</li>
                                        <li style={{fontSize:"13px"}}>Digital Marketing</li>
                                        <li style={{fontSize:"13px"}}>Writing &amp; Translation</li>
                                        <li style={{fontSize:"13px"}}>Video &amp; Animation</li>
                                        <li style={{fontSize:"13px"}}>Mobile App</li>
                                        <li style={{fontSize:"13px"}}>Programming &amp; Tech</li>
                                        <li style={{fontSize:"13px"}}>Data</li>
                                        <li style={{fontSize:"13px"}}>Business</li>
                                        <li style={{fontSize:"13px"}}>Lifestyle</li>
                                        <li style={{fontSize:"13px"}}>Sitemap</li>
                                    </ul>
                                </div></Col>
                                <Col lg="4 " sm="4" xs="6">
                                    <div className='footer-width'>
                                        <p className='m-0' style={{ color: "white",padding:"8px 0px" }}>About</p>
                                        <ul>
                                            <li style={{fontSize:"13px"}}>Careers</li>
                                            <li style={{fontSize:"13px"}}>Press &amp; News</li>
                                            <li style={{fontSize:"13px"}}>Partnerships</li>
                                            <li style={{fontSize:"13px"}}>Privacy Policy</li>
                                            <li style={{fontSize:"13px"}}>Terms of Service</li>
                                            <li style={{fontSize:"13px"}}>Intellectual Property Claims</li>
                                            <li style={{fontSize:"13px"}}>Investor Relations</li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg="4 " sm="4" xs="6">
                                    <div className='footer-width'>
                                        <p className='m-0' style={{ color: "white",padding:"8px 0px" }}>Support</p>
                                        <ul>
                                            <li style={{fontSize:"13px"}}>Help &amp; Support</li>
                                            <li style={{fontSize:"13px"}}>Trust &amp; Safety</li>
                                            <li style={{fontSize:"13px"}}>General Questions</li>
                                            <li style={{fontSize:"13px"}}>Buying on Edyssa</li>
                                        </ul>
                                    </div>
                                </Col>


                            </Row>

                        </Col>

                        <Col lg="4 ">
                            <Row>
                                <Col lg="6 " sm="6" xs="6"><div className='footer-width'>
                                    <p className='m-0' style={{ color: "white",padding:"8px 0px" }}>Community</p>
                                    <ul>
                                        <li style={{fontSize:"13px"}}>Events</li>
                                        <li style={{fontSize:"13px"}}>Blog</li>
                                        <li style={{fontSize:"13px"}}>Forum</li>
                                        <li style={{fontSize:"13px"}}>Community Standards</li>
                                        <li style={{fontSize:"13px"}}>Podcast</li>
                                        <li style={{fontSize:"13px"}}>Affiliates</li>
                                        <li style={{fontSize:"13px"}}>Invite a Friend</li>
                                        <li style={{fontSize:"13px"}}>Become a Seller</li>
                                    </ul>
                                </div></Col>
                                <Col lg="6 " sm="6" xs="6"> <div className='footer-width'>
                                    <p className='m-0 ' style={{ color: "white",padding:"8px 0px" }}>More From Edyssa</p>
                                    <ul>
                                        <li style={{fontSize:"13px"}}>Edyssa Pro</li>
                                        <li style={{fontSize:"13px"}}>Edyssa Studios</li>
                                        <li style={{fontSize:"13px"}}>Edyssa Logo Maker</li>
                                        <li style={{fontSize:"13px"}}>Edyssa Guides</li>
                                        <li style={{fontSize:"13px"}}>Get Inspired</li>
                                        <li style={{fontSize:"13px"}}>Edyssa Select</li>
                                        <li style={{fontSize:"13px"}}>Clear Voice</li>
                                        <li style={{fontSize:"13px"}}>Edyssa Workspace</li>
                                        <li style={{fontSize:"13px"}}>Learn</li>
                                        <li style={{fontSize:"13px"}}>Working Not Working</li>
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
                            <p className='pe-2 text-white' style={{fontSize:"12px"}}>Privacy Policy</p>
                            <p className='text-white' style={{fontSize:"12px"}}>Terms & Conditions</p>
                        </div>
                        <div>
                            <p className='pt-3 text-white' style={{fontSize:"12px"}}>Copyright 2022 © Edyssa. All Rights Reserved.</p>
                        </div>
                        <div className='pt-2'>
                            <img src={Footer} alt='' className='footerImg' />
                        </div>
                    </div>
                </Col>
            </div>
        </Container>
    )
}

export default Foooter