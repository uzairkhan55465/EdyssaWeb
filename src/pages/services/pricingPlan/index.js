import "./index.css"
import WebsiteDesign from "../../../Components/WebsiteDesign"
import { FaAngleDoubleRight } from 'react-icons/fa';
const PricingPlan = () => {
    return (
        <>
          <section class="pricing-area py-130 rel z-1"><div class="container">
            <div class="row justify-content-center"><div class="col-xl-8 col-lg-10">
                <div class="section-title text-center mb-55 wow fadeInUp delay-0-2s" >
                    <span class="sub-title style-two mb-20">Pricing Plan</span><h2>Best Pricing Package</h2></div></div></div>
            <div class="pricing-plan-item wow fadeInUp delay-0-2s" ><div class="price-features">
                <h4>Basic Plan</h4><ul class="list-style-two"><li>Landing page design (10 pages)</li><li>Domin hosting provider</li><li>HTML+CSS design (12 pages)</li><li>Online support (24/7)</li><li>Social Media Marketing</li><li>WordPres development</li></ul><span class="badge">popular</span></div><div class="price-and-btn"><div class="content"><span class="price">248</span><span class="save">Save<span> 25%</span></span><a class="theme-btn style-three" href="/pricing">Choose Package <FaAngleDoubleRight/></a></div></div></div><div class="pricing-plan-item wow fadeInUp delay-0-2s" ><div class="price-features"><h4>Standard Plan</h4><ul class="list-style-two"><li>Landing page design (10 pages)</li><li>Domin hosting provider</li><li>HTML+CSS design (12 pages)</li><li>Online support (24/7)</li><li>Social Media Marketing</li><li>WordPres development</li></ul><span class="badge">popular</span></div><div class="price-and-btn"><div class="content"><span class="price">452</span><span class="save">Save<span> 43%</span>
                </span><a class="theme-btn style-three" href="/pricing">Choose Package <FaAngleDoubleRight/></a></div></div></div><div class="pricing-plan-item wow fadeInUp delay-0-2s" ><div class="price-features"><h4>Premium Plan</h4><ul class="list-style-two"><li>Landing page design (10 pages)</li><li>Domin hosting provider</li><li>HTML+CSS design (12 pages)</li><li>Online support (24/7)</li><li>Social Media Marketing</li><li>WordPres development</li></ul><span class="badge">popular</span></div><div class="price-and-btn"><div class="content"><span class="price">683</span><span class="save">Save<span> 66%</span></span><a class="theme-btn style-three" href="/pricing">Choose Package <FaAngleDoubleRight/></a></div></div></div></div><div class="wave-shapes"><img class="shape one" src="assets/images/shapes/pricing-light1.png" alt="Wave Shape" /><img class="shape two" src="assets/images/shapes/pricing-light2.png" alt="Wave Shape" /></div></section>
        <WebsiteDesign/>
        </>
      
    )
}
export default PricingPlan