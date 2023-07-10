import { BsThreeDots } from 'react-icons/bs';
import "./index.css"
import { FaAngleDoubleRight, FaReact } from 'react-icons/fa';
import { ServicesCards } from "../../constant/Skills"
const PopularServices = () => {
    return (
        <section className="services-area pt-130 pb-100 rel z-1">
            <div className="container">
                <div className="section-title text-center mb-55 d-flex justify-content-center">
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                    <span className='Mission-heading'>Our Popular Services</span>
                    <div className='ps-2 pe-2'>
                        <BsThreeDots className='icon-color' />
                    </div>
                </div>
                <div className='text-center  mb-15 pt-2'>
                    <h2 className='sub-title'>Amazing Web Design Service</h2>
                </div>
                <div className="row justify-content-center mt-5 pt-2">
                    {ServicesCards?.map((cards) =>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-item wow fadeInUp delay-0-2s">
                                <div className="icon">
                                    <i className="fab fa-react" />
                                </div>
                                <div className="content-card">
                                    <div className='iconCards'>
                                        {cards?.icon}
                                    </div>
                                    <h5>

                                        <a>{cards?.title}</a>

                                    </h5>
                                    <p className='py-1'>{cards?.desc}</p>

                                    <a className="read-more">
                                        Read More <FaAngleDoubleRight className='ms-2' />
                                    </a>

                                </div>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </section>
    )
}
export default PopularServices;