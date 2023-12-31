import "./index.css";
import Statistics from "../../../assets/images/about/statistics-five.png";
const CompanyStatistics = () => {
  return (
    <>
      <section className="statistics-area-five py-130">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="statistics-five-content mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Elevate Your Online Store with Expert Ecwid Solutions
                  </span>
                  <h2>
                    Elevate your e-commerce journey with our Ecwid service at
                    Edyssa.
                  </h2>
                </div>
    
                <a className="theme-btn mt-15" href="/about">
                  Learn More <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="statistics-five-image wow fadeInLeft delay-0-2s">
                <img src={Statistics} alt="Statistics" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CompanyStatistics;
