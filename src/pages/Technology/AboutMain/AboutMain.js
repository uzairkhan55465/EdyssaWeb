import React, { useEffect } from 'react'
import "./style.css"
import { Button, Container } from 'react-bootstrap'
import Image1 from "../../../assets/images/hero-two.png"
import Hero1 from "../../../assets/images/shapes/hero1.png"
import Hero2 from "../../../assets/images/shapes/hero2.png"
import { FaPlay,FaAngleDoubleRight } from 'react-icons/fa';
import Aos from 'aos'
const AboutMain = () => {
    useEffect(() => {
        Aos.init({ disable: 'mobile' });

    }, []);
    return (
        <Container fluid className='px-0'>
            <section className="hero-area bgc-dark-blue rel z-1 topback">
                <div className="container">
                    <div className="row align-items-center pt-4 ">
                        <div className="col-lg-7 align-self-center">
                            <div className="hero-content text-white my-120 rmb-0 wow fadeInLeft delay-0-2s">
                                <span className="sub-title mb-35 mb-1">
                                    25 Years of Experience in web design solutions
                                </span>
                                <h1 className='pt-4 head-web pb-2'>Web Development Service Provider</h1>
                                <p className='my-4 '>
                                    Sit amet consectetur adipiscing elit sed do eiusmod tempor
                                    incididunt ut labore dolore magna aliquauis ipsum suspendisse
                                    ultrices gravida risus
                                </p>
                                <div className="hero-btns pt-3 mt-2">

                                    <a className="theme-btn mt-15">
                                        Discover More <FaAngleDoubleRight className='mt-1 ms-2'/>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                                        className="mfp-iframe video-play-text mt-15"
                                    >
                                        <div className='d-flex'>
                                            <div className='play'>
                                                <FaPlay className='play-icon' />
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <span>How IT Works</span>
                                            </div>
                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-end">
                            <div className="hero-images mt-75 wow fadeInRight delay-0-2s">
                                <img src={Image1} alt="Hero" />
                            </div>
                           
                        </div>
                        <div class="wave-shapes"><img class="shape one" src={Hero1} alt="Wave Shape"/><img class="shape two" src={Hero2} alt="Wave Shape"/></div>
                    </div>
                </div>

            </section>
        </Container>


    )
}

export default AboutMain