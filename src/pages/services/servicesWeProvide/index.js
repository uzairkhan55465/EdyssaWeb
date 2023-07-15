import "./index.css"
import { FaAngleDoubleRight } from 'react-icons/fa';
import {Services} from "../../../constant/Skills"
const ServicesWEProvide = () => {
    return (
        <section className="services-area-four bgc-black pt-130 pb-100"><div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center text-white mb-60 wow fadeInUp delay-0-2s" >
                        <span className="sub-title style-two mb-20 ">Services We Provide</span>
                        <h2 classNameName="text-white">Popular Web Services</h2></div></div></div>
            <div className="row">
                {Services?.map((e) =>
                    <div className="col-xl-4 col-md-6">
                        <div className="service-item-four wow fadeInUp delay-0-2s" ><div className="image"><img src={e.img} alt="Service" />
                        </div><h5>{e?.title}</h5><a className="theme-btn style-three" href="/service-details">Service Details <FaAngleDoubleRight className="ms-2"/></a></div></div>
                )}

            </div></div></section>
    )
}
export default ServicesWEProvide