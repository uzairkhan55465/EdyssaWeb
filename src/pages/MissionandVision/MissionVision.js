import React, { useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import "./style.css"
import { FaAngleDoubleRight } from 'react-icons/fa';
import Image1 from "../../assets/images/mission-visson.png"
import Aos from 'aos';
import Version1 from "../../assets/images/shapes/mission-vision1.png"
import Version2 from "../../assets/images/shapes/mission-vision2.png"
import { Container } from 'react-bootstrap';
const MissionVision = () => {
    useEffect(() => {
        Aos.init({ disable: 'mobile' });
    }, []);
    return (
        <Container>
            <div style={{ paddingBottom: "40px", paddingTop: "45px" }} className='paddings'>

                <div className='d-flex smallcenter' style={{ paddingTop: "40px" }} data-aos="fade-right" data-aos-duration="1000">
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                    <span className='Mission-heading'>Mission and Vision</span>

                </div>

                <div class="row" data-aos="fade-up" data-aos-duration="1000">
                    <div class="col-md-6">
                        <div class="pt-2">
                            <h2 className='section-title'>We aim to deliver quality<br />creative solutions</h2>
                        </div>
                        <div class="pt-3 text-style">
                            <p>Our web design company specializes in the professional creation of unique sites. Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects.</p>
                            <a className="theme-btn style-three mt-3" >Learn More About Us <FaAngleDoubleRight className=' ms-2' /></a>
                        </div>
                    </div>
                    <div class="col-md-6 pt-5 pt-lg-0">
                        <img src={Image1} alt="tech" class="img-fluid" />
                    </div>
                    <div class="wave-shapes"><img class="shape one" src={Version1} alt="Wave Shape" /><img class="shape two" src={Version2} alt="Wave Shape" /></div>
                </div>


            </div>
        </Container>

    )
}

export default MissionVision