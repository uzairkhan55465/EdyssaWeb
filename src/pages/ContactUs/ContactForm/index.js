import "./index.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaEnvelopeOpenText } from "react-icons/fa"
import { TfiLocationPin } from "react-icons/tfi"
import { MdCall } from "react-icons/md"
const ContactUsForm = () => {
  return (

    <section class="contact-us-page-area py-5 py-lg-130 pt-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-sm-12">
            <div class="contact-content rmb-65 wow fadeInRight delay-0-2s">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Contact Us</span>
                  <h2>
                    Let’s Start New Project or work Together! Contact With us
                  </h2>
                </div>
                <p>

                  Embark on a new project or join forces with us to bring your ideas to life. Contact us today to explore
                  exciting opportunities and creative endeavors. We look forward to working together!
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15 mt-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Michael C. Coleman"
                          required=""
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue=""
                          placeholder="+000 (123) 456 88"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">

                        <select name="select_subject" id="select_subject">
                          <option value="default" selected="">
                            Website customize
                          </option>
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="SEO">SEO</option>
                          <option value="SEO">General Queries</option>
                          <option value="SEO">Maintenance and Support</option>
                          <option value="SEO">Graphic Design Services</option>
                          <option value="SEO">Consultation Request</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group  mb-0">
                        <button type="submit" className="theme-btn w-100">
                          Send Message{" "}
                          <i className="fas fa-angle-double-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-sm-12 mt-4 mt-lg-0">
            <div class="contact-info wow fadeInLeft delay-0-2s d-flex flex-column justify-content-center align-items-center">
              <div className="contact-info wow fadeInLeft delay-0-2s d-flex flex-column justify-content-center align-items-center">
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <TfiLocationPin style={{ fontSize: "30px" }} />
                  </div>
                  <div className="content">
                    <span className="title">LOCATION</span>
                    <span className="text">
                      Islamabad, Pakistan
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <FaEnvelopeOpenText style={{ fontSize: "28px" }} />
                  </div>
                  <div className="content">
                    <span className="title">EMAIL ADDRESS</span>
                    <span className="text">
                      <a href="mailto:Info@edyssa.com">Info@edyssa.com</a>
                      <br />
                      <a href="mailto:websitebuilding.net">Support@edyssa.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <MdCall style={{ fontSize: "30px" }} />
                  </div>
                  <div className="content">
                    <span className="title">PHONE NUMBER</span>
                    <span className="text">
                      Call <a href="calto:+000(123)45688">+(+93) 34661 81327</a>
                      <br />
                      Whatsapp : (+92) 34814 29505
                    </span>
                  </div>
                </div>
                <div className="follow-us">
                  <h4>Follow Us</h4>
                  <div className="social-style-two">
                    <a href="#">
                      <FaFacebookF />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                    <a href="#">
                      <FaBehance />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUsForm;
