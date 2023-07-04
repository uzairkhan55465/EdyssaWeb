import Aos from 'aos';
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BsThreeDots } from 'react-icons/bs';
import { TeamsMembers } from "../../constant/TeamMembers"
import "./style.css"
const PopularServices = () => {

    useEffect(() => {
        Aos.init({disable: 'mobile'});
    }, []);

    return (
        <div>
            {/* <Container> */}
                <div data-aos="fade-right" data-aos-duration="1000" style={{
                    paddingTop: "40px", display: "flex",
                    justifyContent: "center"
                }}>
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                    <span className='Mission-heading'>Our Team Member</span>
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className='d-flex justify-content-center pt-4'>
                    <h1>Exclusive Team Member
                    </h1>
                </div>

                <div data-aos="fade-down" data-aos-duration="1000" className="d-flex">
                    <div>
                        <div className="row">
                            {TeamsMembers?.map((items, id) => (
                                <div className="col-sm-6 col-lg-3" key={id}>
                                    <div className="box shadow-sm p-4">
                                        <div className="image-wrapper mb-3">
                                            <img
                                                className="img-fluid"
                                                src="https://images.pexels.com/photos/555790/pexels-photo-555790.png"
                                                alt="..."
                                            />
                                        </div>
                                        <div className="box-desc">
                                            <h5>Jon Doe</h5>
                                            <p>{items?.role}</p>
                                        </div>
                                        <ul className="social">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            {/* </Container> */}
        </div>
    )
}

export default PopularServices