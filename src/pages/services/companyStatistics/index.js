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
                    Company Statistics
                  </span>
                  <h2>
                    Discover Extraordinary projects brought to life on Oxence.
                  </h2>
                </div>
                <p className="pb-2">
                  Start building your first prototype in no time. Ogency
                  intuitive, drag &amp; drop interface gives you all the
                  building blocks that you need to get started! No skills
                  required.
                </p>
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
