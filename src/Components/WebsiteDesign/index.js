import "./index.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const WebsiteDesign = () => {
  return (
    <section class="call-to-action-area bgc-black  " style={{ padding: "40px 30px" }}>
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-7 col-lg-9" style={{ paddingTop: "30px" }}>
            <div class="section-title text-white mb-25 wow fadeInUp delay-0-2s">
              <h2 style={{ fontSize: "25px" }} className="text-white">
                Let's Start Something Great Together
              </h2>
              <p style={{ fontSize: "15px" }}>
                Have a project in mind. Reach out to us using the information below or fill out
                the form, and let's discuss how we can collaborate to achieve
                your digital goals.
              </p>
            </div>
          </div>
          <div style={{position:"relative",top:"20px"}} class="col-lg-3 text-lg-end d-flex justify-content-lg-start justify-content-center">
            <a
              class="theme-btn style-two mb-30 wow fadeInUp delay-0-4s"
              href="/contact"
            >
              Get Started
              <FaAngleDoubleRight className=" ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WebsiteDesign;
