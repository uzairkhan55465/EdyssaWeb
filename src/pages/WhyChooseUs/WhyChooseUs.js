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
            <Container >
            <div data-aos="fade-down" data-aos-duration="1000" style={{
                paddingTop: "40px", display: "flex",
                justifyContent: "start"
            }}>
              
                <span className='Mission-heading pt-5'>Why Choose Us</span>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" className='pt-3 pb-3'>
                <h1 className='design'>
                Your Path to  <br />Exceptional Digital Solutions
                </h1>
            </div>
            <div className='row'>
                <div data-aos="fade-down" data-aos-duration="1000" className='col-lg-6 col-md-6 col-sm-12'>
                    {ChooseUs?.map((items, id) => {
                        return (
                            <div key={items?.id} className='mb-4'>
                                <div className='d-flex'>
                                    <div className='tick mt-2'>
                                        <img src={items?.img} alt='thick' />
                                    </div>

                                    <div className='ps-2'>
                                        <div>
                                            <span className='chosse-us-text'>{items?.heading}</span>
                                        </div>
                                        <div className='col-lg-10'>
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
                <div data-aos="fade-up" data-aos-duration="1000" className='col-lg-6 col-md-6 col-sm-12'>
                    <div class="circle-shapes"><span class="shape one wow slideInDown delay-0-2s" ></span><span class="shape two wow slideInDown delay-0-4s" ></span><span class="shape three wow slideInDown delay-0-6s"></span><span class="shape four wow slideInDown delay-0-8s"></span></div>
                    <img src={Image1} alt='show' className='img-fluid chooseImg' />
                </div>
            </div>




            </Container>

        </div>
    )
}

export default WhyChooseUs