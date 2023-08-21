import "./index.css"
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaBehance,FaEnvelopeOpenText} from "react-icons/fa"
import {TfiLocationPin} from "react-icons/tfi"
import {MdCall} from "react-icons/md"
const ContactUsForm=()=>{
    return(
        <section className="contact-us-page-area py-130">
        <div className="container">
          <div className="row align-items-end justify-content-between">
            <div className="col-lg-7">
              <div className="contact-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">Contact Us</span>
                  <h2>
                    Let’s Start New Project or work Together! Contact With us
                  </h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque lauda tiumes totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  id="contactForm"
                  className="contactForm z-1 rel"
                >
                  <div className="row pt-15 mt-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
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
                        <label htmlFor="email">Email Address</label>
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
                        <label htmlFor="phone_number">Phone Number</label>
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
                        <label htmlFor="select_subject">
                          Select Requirments
                        </label>
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
                        <label htmlFor="message">Write Message</label>
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
              <p>
                We're excited to hear from you! Whether you're ready to embark
                on a new project, have questions about our services, or simply
                want to say hello, we're here to help. Reach out to us using the
                contact information below or fill out the form, and we'll get
                back to you promptly.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contactForm"
                className="contactForm z-1 rel"
              >
                <div className="row pt-15 mt-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
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
                      <label htmlFor="email">Email Address</label>
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
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        className="form-control"
                        defaultValue=""
                        placeholder="+000 (123) 456 88 "
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="select_subject">Select Requirments</label>
                      <select name="select_subject" id="select_subject">
                        <option value="default" selected="">
                          Website customize
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="SEO">SEO</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Write Message</label>
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
                        Send Message <i className="fas fa-angle-double-right" />
                      </button>
                      <div id="msgSubmit" className="hidden" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="contact-info wow fadeInLeft delay-0-2s">
              <div className="contact-info-item style-two">
                <div className="icon">
                  <TfiLocationPin style={{ fontSize: "30px" }} />
                </div>
                <div className="content">
                  <span className="title">LOCATION</span>
                  <span className="text">
                    55 Main Street, 2nd Floor, E-Block, New York
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
    </section>
  );
};
export default ContactUsForm;
