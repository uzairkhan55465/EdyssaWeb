import React, { useEffect } from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FaCommentDots } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { CompanySkills } from "../../constant/Skills"
import { Button } from 'react-bootstrap';
import Aos from 'aos';
const TechnologyFeature = () => {
    library.add(faCoffee, faEllipsisH);
    useEffect(() => {
        Aos.init({disable: 'mobile'});
    }, []);
    return (
        <div style={{paddingTop:"40px"}}>
            <div style={{ display: 'flex', justifyContent: "center" }} data-aos="fade-right" data-aos-duration="1000">
                <div className='ps-2 pe-2'>
                    <BsThreeDots className='icon-color' />
                </div>
                <span className='technology-heading'>Technology Features</span>
                <div className='ps-2 pe-2'>
                    <BsThreeDots className='icon-color' />
                </div>
            </div>

            <div className='pt-3' style={{ display: 'flex', justifyContent: "center" }} data-aos="fade-down" data-aos-duration="1000">
                <h1 className='pt-2'>
                    Full Potential Modern Features
                </h1>
            </div>

            <div className='d-flex flex-wrap justify-content-center pt-4 ps-2 pe-2' data-aos="fade-up" data-aos-duration="1000">
                {CompanySkills?.map((items, id) => {
                    return (
                        <div key={items?.id} className="card-skills col-12 col-sm-12 col-md-4 col-lg-2
                        ms-4 me-4 mt-2 mb-2" style={{ width: '200px', height: '145px' }}>
                            <div className='pt-3'>
                                <img style={{ width: "60px" }} src={items?.img} />
                            </div>
                            <div>
                                <Button className='btn-skills'>{items?.title}</Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TechnologyFeature