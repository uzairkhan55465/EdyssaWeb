import "./index.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
const Support = () => {
  return (
    <section className="support-features-area bgs-cover bgc-lighter pt-130 pb-100 rel z-1 backSupport">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6 col-lg-7">
            <div className="support-features-wrap rmb-65 wow fadeInUp delay-0-2s">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 ">
                  <div className="service-item style-two">
                    <h5>
                      <a>Responsive Communication</a>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-feature" />
                    </div>
                    <h5>Thorough Quality Assurance</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-aim" />
                    </div>
                    <h5>Post-Launch  &amp; Support</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-seo" />
                    </div>
                    <h5>
                      <a>Scalable Solutions</a>
                    </h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-search-location" />
                    </div>
                    <h5>Long-Term Partnership</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-settings" />
                    </div>
                    <h5>Client-Centric  &amp; Approach</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-settings" />
                    </div>
                    <h5>Client-Centric  &amp; Approach</h5>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="service-item style-two">
                    <div className="icon">
                      <i className="flaticon-settings" />
                    </div>
                    <h5>Client-Centric  &amp; Approach</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="support-features-content mb-30 wow fadeInUp delay-0-4s">
              <div className="section-title mb-30">
                <span className="Mission-heading mb-15">
                  Support &amp; Features
                </span>
                <h2>Empowering Your Journey with Unparalleled Support</h2>
              </div>
              <p>
                Dedicated to excellence, we offer holistic support, guiding you
                through a seamless process from project start to maintenance.
                Our features guarantee a smooth digital journey with 24/7 help,
                transparent processes, and continual updates.
              </p>
              <div className="mt-4 pt-2 learnBtn">
                <a className="theme-btn mt-25">
                  Learn More About Us <FaAngleDoubleRight className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Support;
