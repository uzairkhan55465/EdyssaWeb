import React, { useEffect } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FaCommentDots } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { CompanySkills } from "../../constant/Skills"
import { Button,Container } from 'react-bootstrap';
import Aos from 'aos';
const TechnologyFeature = () => {
    library.add(faCoffee, faEllipsisH);
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    }, []);
    return (
        <Container >
            <div style={{ display: 'flex', justifyContent: "center" }} data-aos="fade-right" data-aos-duration="1000" className='pt-4 pt-lg-0'>
               
                <span className='technology-heading'>Technology Features</span>
               
            </div>

            <div className='pt-3 section-title' style={{ display: 'flex', justifyContent: "center" }} data-aos="fade-down" data-aos-duration="1000">
                <h2 className='pt-2 '>
                    Full Potential Modern Features
                </h2>
            </div>

            <div className='d-flex flex-wrap justify-content-center pt-4 ps-2 pe-2' data-aos="fade-up" data-aos-duration="1000">
                {CompanySkills?.map((items, id) => {
                    return (

                        <div  key={items?.id} className=" col-6 col-sm-6 col-md-4 col-lg-2 px-3">
                        <div className="feature-item wow fadeInUp delay-0-2s">
                          <div className="image">
                            <img src={items?.img}  alt="Logo" />
                          </div>
                          <h5>{items?.title}</h5>
                        </div>
                      </div>

                       
                    );
                })}
            </div>
        </Container>
    )
}

export default TechnologyFeature