import Aos from 'aos';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs';
const PopularServices = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <Container>
            <div className='d-flex' style={{
                paddingTop: "40px", display: "flex",
                justifyContent: "center"
            }} data-aos="fade-right" data-aos-duration="1000">
                <div className='ps-2 pe-2'>
                    <BsThreeDots className='icon-color' />
                </div>
                <span className='Mission-heading'>Mission and Vision</span>
                <div className='ps-2 pe-2'>
                    <BsThreeDots className='icon-color' />
                </div>
            </div>
            <i class="fab fa-react"></i>
            <div className='d-flex justify-content-center'>
                <h1>Amazing Web Design Service</h1>
            </div>
        </Container>
    )
}

export default PopularServices