import "./index.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const WebsiteDesign = () => {
  return (
    <section class="call-to-action-area bgc-black pt-80 pb-50">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-white mb-25 wow fadeInUp delay-0-2s">
              <h2 className="text-white">
                Let's Start Something Great Together
              </h2>
              <p>
                Have a project in mind? Questions about our services? We're here
                to help. Reach out to us using the information below or fill out
                the form, and let's discuss how we can collaborate to achieve
                your digital goals.
              </p>
            </div>
          </div>
          <div class="col-lg-3 text-lg-end d-flex justify-content-lg-start justify-content-center">
            <a
              class="theme-btn style-two mb-30 wow fadeInUp delay-0-4s"
              href="/contact"
            >
              Let’s Get Started
              <FaAngleDoubleRight className=" ms-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WebsiteDesign;
