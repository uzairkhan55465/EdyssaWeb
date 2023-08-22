import "./index.css";
import Process from "../../../assets/images/shapes/worp-process-step.png";
const WorkingProcess = () => {
  return (
    <section className="work-process-area pb-95 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
              <span className="sub-title style-two mb-15 text-decoration-underline weight-one">Working Process</span>
              <h2>How does we works</h2>
            </div>
          </div>
        </div>
        <div className="work-process-wrap rel z-1">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <span className="number">01</span>
                  <i className="flaticon-optimization"></i>
                </div>
                <h4>Info Gathering</h4>
                <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <span className="number">02</span>
                  <i className="flaticon-link"></i>
                </div>
                <h4>Idea Planning</h4>
                <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                <div className="icon">
                  <span className="number">03</span>
                  <i className="flaticon-data"></i>
                </div>
                <h4>Design Analysis</h4>
                <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-sm-6">
              <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                <div className="icon">
                  <span className="number">04</span>
                  <i className="flaticon-star"></i>
                </div>
                <h4>Testing &amp; Lunch</h4>
                <p>Sit amet consectetur adipiscing elit sed eiusmod tempor</p>
              </div>
            </div>
          </div>
          <div className="work-process-shape">
            <img src={Process} alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;
