import React, { useEffect } from 'react'
import "./style.css"
import { Button } from 'react-bootstrap'
import Image1 from "../../../assets/images/hero-two.png"
import Aos from 'aos'
const AboutMain = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-img pt-4'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6' data-aos="fade-right" data-aos-duration="1000" style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div className='pt-2 pb-2' style={{
                            background: '#0066ff', borderLeft: '4px solid white', paddingLeft: '10px',
                            width: "80%", borderRadius: "5px", marginTop: "20px", marginBottom: "20px"
                        }}>
                            <span style={{ color: 'white' }}>25 Years of Experience in web design solutions</span>
                        </div>
                        <div className='text-white' style={{ marginBottom: "20px" }}>
                            <h1 className='pt-2 pb-2 h1'>
                                Web Development <br />Service Provider
                            </h1>
                        </div>
                        <div style={{ borderLeft: "3px solid #01c9f5", marginBottom: "20px" }}>
                            <h4 className='text-white small ps-2 pt-2 pb-2'>
                                Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
                                ut labore <br />dolore  magna aliquauis ipsum suspendisse ultrices gravida risus
                            </h4>
                        </div>
                        <div className='pt-2 pb-2'>
                            <span variant="primary" className="ml-2">Discover More</span>
                        </div>
                    </div>
                    <div className='col-md-6' data-aos="fade-left" data-aos-duration="1000">
                        <img src={Image1} alt="hero" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMain