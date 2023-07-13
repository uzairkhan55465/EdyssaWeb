import "./index.css"
import {FaAngleDoubleRight } from 'react-icons/fa';
import Pricing1 from "../../assets/images/shapes/pricing1.png"
import Pricing2 from "../../assets/images/shapes/pricing2.png"
const PricingPlan=()=>{
    return(
        <section className="pricing-area bgc-dark-blue text-white py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s ">
                <span className="Mission-heading mb-20">Pricing Plan</span>
                <h2 className="text-white">Best Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Basic Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domin hosting provider</li>
                <li>HTML+CSS design (12 pages)</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>WordPres development</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">248</span>
                <span className="save">
                  Save<span> 25%</span>
                </span>
             
                  <a className="theme-btn style-three">
                    Choose Package <FaAngleDoubleRight className="ms-2"/>
                  </a>
            
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Standard Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domin hosting provider</li>
                <li>HTML+CSS design (12 pages)</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>WordPres development</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">452</span>
                <span className="save">
                  Save<span> 43%</span>
                </span>
        
                  <a className="theme-btn style-three">
                    Choose Package <i className="fas fa-angle-double-right" />
                  </a>
            
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Premium Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domin hosting provider</li>
                <li>HTML+CSS design (12 pages)</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>WordPres development</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">683</span>
                <span className="save">
                  Save<span> 66%</span>
                </span>
               
                  <a className="theme-btn style-three">
                    Choose Package <i className="fas fa-angle-double-right" />
                  </a>
              
              </div>
            </div>
          </div>
        </div>
        <div className="wave-shapes">
          <img
            className="shape one"
            src={Pricing1}
            alt="Wave Shape"
          />
          <img
            className="shape two"
            src={Pricing2}
            alt="Wave Shape"
          />
        </div>
      </section>
    )
}
export default PricingPlan