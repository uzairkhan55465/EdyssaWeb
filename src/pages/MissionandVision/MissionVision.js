import React, { useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import "./style.css"
import { Button, Container } from 'react-bootstrap';
import Image1 from "../../assets/images/mission-visson.png"
import Aos from 'aos';
const MissionVision = () => {
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    }, []);
    return (
        <div style={{paddingBottom:"40px"}}>
          
                <div className='d-flex' style={{ paddingTop: "40px" }} data-aos="fade-right" data-aos-duration="1000">
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                    <span className='Mission-heading'>Mission and Vision</span>
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                </div>

                <div class="row" data-aos="fade-up" data-aos-duration="1000">
                    <div class="col-md-6">
                        <div class="pt-4">
                            <h1>We aim to deliver quality<br />creative solutions</h1>
                        </div>
                        <div class="pt-2 text-style">
                            <p>Our web design company specializes in the professional creation of unique sites. Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects.</p>
                            <button class="btn btn-outline-primary">Learn More About Us</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src={Image1} alt="tech" class="img-fluid" />
                    </div>
                </div>
      

        </div>
    )
}

export default MissionVision