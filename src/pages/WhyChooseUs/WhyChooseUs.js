import React, { useEffect } from 'react'
import "./style.css"
import { BsThreeDots } from 'react-icons/bs';
import { Container } from 'react-bootstrap';
import Thick from "../../assets/images/thick.png"
import { ChooseUs } from '../../constant/ChooseUs';
import Image1 from "../../assets/images/why-choose-us.png"
import Aos from 'aos';
const WhyChooseUs = () => {
    useEffect(() => {
        Aos.init({ disable: 'mobile' });
    }, []);
    return (
        <div>
            {/* <Container> */}
            <div data-aos="fade-down" data-aos-duration="1000" style={{
                paddingTop: "40px", display: "flex",
                justifyContent: "start"
            }}>
                <div className='ps-2 pe-2'>
                    <BsThreeDots className='icon-color' />
                </div>
                <span className='Mission-heading'>Why Choose Us</span>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className='pt-3 pb-3'>
                <h1>
                    Web design company <br />that you can trust
                </h1>
            </div>
            <div className='row'>
                <div data-aos="fade-down" data-aos-duration="1000" className='col-lg-7'>
                    {ChooseUs?.map((items, id) => {
                        return (
                            <div key={items?.id} className='mb-4'>
                                <div className='d-flex'>
                                    <div>
                                        <img src={items?.img} alt='thick' />
                                    </div>
                                    <div className='ps-2'>
                                        <div>
                                            <span className='chosse-us-text'>{items?.heading}</span>
                                        </div>
                                        <div>
                                            <p className='chosee-us-p'>
                                                {items?.para.split('\n').map((line, index) => (
                                                    <React.Fragment key={index}>
                                                        {line}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className='col-lg-5'>
                    <img src={Image1} alt='show' className='img-fluid' />
                </div>
            </div>




            {/* </Container> */}

        </div>
    )
}

export default WhyChooseUs