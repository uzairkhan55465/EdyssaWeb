
import React from 'react'
import {FaAngleDoubleRight } from 'react-icons/fa';
import Newspaper from "../../assets/images/footer/footer-newsletter.png"
import Footer1 from "../../assets/images/shapes/footer1.png"
import Footer2 from "../../assets/images/shapes/footer2.png"
import './style.css'

const Foooter = () => {
    return (
        <footer class="main-footer bgc-dark-blue text-white rel z-1 ">
            <div class="container">
                <div class="footer-top-newsletter bgc-primary p-80 footerBack" >
                    <div class="row justify-content-between align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="footer-newsletter-content rmb-55 wow fadeInLeft delay-0-2s" >
                                <div class="section-title mb-30">
                                    <span class="sub-title mb-15">Our Newsletter</span>
                                    <h2 className='text-white'>Subscribe Our Newsletter to Get More Updates</h2>
                                    <p>Consectetur adipiscing eiusmod tempor incididunt labore et dolores magna aliquae suspendisse ultrices gravid commodo viverra</p>
                                </div><form action="#"><div class="form-group rel mb-0 w-100">
                                    <label for="email"><i class="far fa-envelope"></i></label><input type="email" id="email" placeholder="Email Address" /></div>
                                    <button class="theme-btn style-two">Subscribe <FaAngleDoubleRight className='ms-2'/></button>
                                    
                                </form></div></div>
                        <div class="col-lg-5"><div class="footer-newsletter-image wow fadeInRight delay-0-2s" >
                            <img src={Newspaper} alt="Newsletter" /></div>
                        </div>
                    </div></div>
                <div class="row large-gap justify-content-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="footer-cta text-center my-100 wow fadeInUp delay-0-2s">
                            <div class="section-title"><h2 className='text-white mt-5 pt-4'>Let’s Design Your New Website</h2><p>Do you want to have a website that stands out and impresses your clients? Then we are ready to help! Click the button below to contact us and discuss your ideas.</p></div>
                            <div className='mb-5 pb-5 mt-4'>
                            <a class="theme-btn mt-15" href="/contact">Get a Quote <FaAngleDoubleRight className='ms-2'/></a>
                            </div>
                            </div></div></div>
                <div class="copyright-area text-center pt-30 pb-15"><ul class="footer-menu pb-10"><li><a href="#">About</a></li>
                    <li><a href="#">Our Services</a></li><li><a href="#">How We Work</a></li><li><a href="#">Experience</a></li>
                    <li><a href="#">Why Choose Us</a></li><li><a href="#">Partners</a></li><li><a href="#">Support</a></li>
                    <li><a href="#">Testimonials</a></li><li><a href="#">Pricing</a></li><li><a href="#">FAQ</a></li>
                    <li><a href="#">Contacts</a></li></ul><p>© Copyright 2022 Oxence. All right reserved</p></div></div>
            <div class="wave-shapes"><img class="shape one" src={Footer1} alt="Wave Shape" />
                <img class="shape two" src={Footer2} alt="Wave Shape" /></div></footer>
    )
}

export default Foooter