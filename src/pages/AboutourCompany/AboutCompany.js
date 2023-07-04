import React, { useEffect } from 'react';
import Image1 from "../../assets/images/about.jpg";
import { Col, Container } from 'react-bootstrap';
import Aos from 'aos';
import AboutCompanyCard from './AboutCompanyCard';

const Clients = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div style={{ paddingTop: "40px" }} data-aos="fade-right" data-aos-duration="1000">
                <Container>
                    <Col className="text-center mx-auto" lg={10} md={12} sm={12}  >
                        <h2>
                            <span class="card-1-t animate bottom scroll-reveal "> Your Digital Journey with Our
                            </span><br /><b class="card-1-t animate bottom scroll-reveal">
                                Premier Website Development & Digital Marketing Services</b>
                        </h2>
                        <p className="para-details">
                            Established in 1996, our agency began as a top-tier website development firm. However, we've since grown to encompass a full-service digital marketing agency, adept at crafting and executing high-performance SEO, PPC, and display advertising strategies. Our mission extends beyond just being an exceptional web developer company. Our team thrives on innovation, consistently enhancing our suite of services to stay ahead of industry trends. As one of the pioneering web agencies, we combine cutting-edge web design and robust digital marketing solutions to deliver measurable results for our clients. Offering unparalleled customer service, we partner with you to create a cohesive online presence, enabling your brand to engage the right audience and attain sustainable growth. With us, you're not just getting a service provider, you're gaining a partner committed to driving your digital success.
                        </p>
                    </Col>
                    <AboutCompanyCard />
                </Container >
            </div>


        </>
    );
}

export default Clients;