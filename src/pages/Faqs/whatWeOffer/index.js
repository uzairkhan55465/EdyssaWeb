import "./index.css"
import { FaAngleDoubleRight } from 'react-icons/fa';
import {faqsCards} from "../../../constant/Skills"

const WhatWeOffer = () => {
    return (
        <section className="services-area-five pt-115 pb-100"><div className="container">
            <div className="row justify-content-center"><div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s" >
                    <span className="sub-title style-two mb-20">What We Offer</span><h2>Choose Your Topic</h2></div></div></div>
            <div className="row">
                {faqsCards?.map((e)=>
                  <div className="col-xl-4 col-md-6"><div className="service-item-five wow fadeInUp delay-0-2s" >
                  <div className="icon"><img src={e.img} alt="Icon" /></div>
                  <h4>{e.title}</h4>
                  <p>{e.para}</p>
                  <a className="theme-btn style-three-service" href="/service-details">Learn More <FaAngleDoubleRight className="ms-2 mt-1"/></a></div>
              </div>
                )}
            
            </div>
          </div></section>
    );
}
export default WhatWeOffer;