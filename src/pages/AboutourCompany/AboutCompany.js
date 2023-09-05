import React, { useEffect } from 'react';
import Image1 from "../../assets/images/about.jpg";
import Hands from "../../assets/images/about/hands.png"
import { Col, Container } from 'react-bootstrap';
import Aos from 'aos';
import AboutCompanyCard from './AboutCompanyCard';
import Counter from "../../modules/Counter"
const Clients = () => {
    useEffect(() => {
        Aos.init({ disable: 'mobile' });
    }, []);
    return (
        <section className="about-area py-130 rel z-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about-image rmb-65 wow fadeInUp delay-0-2s">
                            <img src={Image1} alt="About" />
                            <div
                                className="years-fo-experience bgc-primary bgs-cover counter-text-wrap"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/about/years-fo-experience-bg.png)",
                                }}
                            >
                                <Counter end={36} />
                                <h4>Years of experience in web design solutions</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about-content wow fadeInUp delay-0-4s">
                            <div className="section-title mb-30">
                            <span className="sub-title mb-15">
                                    About digital solutions
                                </span>
                                <h2>We’re Award-winning web design studio</h2>
                            </div>
                            <p>
                                Our web design company specializes the professional creation
                                unique sites. Our team constantly monitors the emergence of
                                new technologies that we are not afraid to implement in web
                                projects, making them modern and high-tech. We create only
                                selling websites – this is an achievement by drawing the
                                design and working out usability.
                            </p>
                            <div className="client-satisfactions counter-text-wrap pt-10 pb-10">
                                <img src={Hands} alt="Hands" />

                                <Counter end={3658} />
                                <span className="heading ms-4">Clients <br /> Satisfactions</span>
                            </div>
                            <div className='mt-3'>
                                <a className="theme-btn mt-15 ">
                                    Learn More About Us{" "}
                                    <i className="fas fa-angle-double-right" />
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Clients;