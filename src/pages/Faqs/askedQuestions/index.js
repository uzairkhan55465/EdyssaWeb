import "./index.css";
import Accordion from "react-bootstrap/Accordion";

const AskedQuestions = () => {
  return (
    <section class="faqs-area-area bgc-lighter py-130 rel z-1">
      <div class="container">
        <div class="row justify-content-between align-items-end pb-5">
          <div class="col-xl-6 col-lg-8 wow fadeInUp delay-0-2s">
            <div class="section-title mb-35">
              <span class="sub-title style-two mb-15">Faqs</span>
              <h2 style={{fontSize:"28px"}}>Asked Questions about Website Design</h2>
            </div>
          </div>
          <div class="col-lg-4 text-lg-end wow fadeInUp pt-4 delay-0-4s d-flex justify-content-center justify-content-lg-start">
            <a class="theme-btn style-three mb-55" href="/contact">
              Add Questions <i class="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>

        {/* <div id="faq-accordion" class="accordion style-two accordion"> */}
        {/* <div class="row">
            <div class="col-lg-6 rmb-20 wow fadeInUp delay-0-2s">
          
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button "
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Will you provide website layout about design ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse  collapse show"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    How much does cost to design website ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Fortunately, we aren’t just designers and developers here
                      we are writer strategists, techs and creatives working
                      towards the same end goal our client’s success. As a
                      full-service digital marketing agency
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    How many revisions can i make the design ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Can i uplode this design in my personal work?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp delay-0-4s">
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    How long will delivery take ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Do you have discounts for returning customers ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Fortunately, we aren’t just designers and developers here
                      we are writer strategists, techs and creatives working
                      towards the same end goal our client’s success. As a
                      full-service digital marketing agency
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    Will you provide website layout about design ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    What payment methods do you accept ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h5 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    type="button"
                  >
                    How do your referral program work ?
                  </button>
                </h5>
                <div
                  data-bs-parent="#faq-accordion"
                  class="accordion-collapse collapse collapse"
                >
                  <div class="accordion-body">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam aperiam
                      eaquey quae abillo inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        <Accordion defaultActiveKey="0" className="accordion-container">
          <div className="accordion-left">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is your WordPress service all about?
              </Accordion.Header>
              <Accordion.Body>
                Our WordPress service involves creating, designing, and
                developing websites on the WordPress platform. We specialize in
                crafting user-friendly, visually appealing, and functional
                WordPress website
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Can you design a custom WordPress theme for my brand?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. We have experienced designers who can create a
                custom WordPress theme tailored to your brand's identity,
                ensuring a unique and captivating online presence.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Do you provide e-commerce solutions using WordPress?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we can build e-commerce websites using WordPress and
                WooCommerce, providing a seamless platform for you to sell
                products online.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Will my WordPress website be responsive and mobile-friendly?
              </Accordion.Header>
              <Accordion.Body>
                Definitely. Responsive design is a crucial aspect of our
                WordPress service. Your website will adapt flawlessly to
                different devices, providing a consistent experience.
              </Accordion.Body>
            </Accordion.Item>
          </div>
          <div className="accordion-right">
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Is SEO included in your WordPress service?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we implement basic on-page SEO practices during the
                development process. However, for a comprehensive SEO strategy,
                we recommend considering our digital marketing services.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Can you migrate my existing website to WordPress?
              </Accordion.Header>
              <Accordion.Body>
                Yes, we offer website migration services. If you have an
                existing website on a different platform and want to move to
                WordPress, we can assist in migrating your content, design, and
                functionalities.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Will I be able to update my content easily after the website is
                live?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. We design your WordPress website with a
                user-friendly content management system, allowing you to update
                content, images, and even add new pages without technical
                expertise.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Will I be able to update my content easily after the website is
                live?
              </Accordion.Header>
              <Accordion.Body>
                Absolutely. We design your WordPress website with a
                user-friendly content management system, allowing you to update
                content, images, and even add new pages without technical
                expertise.
              </Accordion.Body>
            </Accordion.Item>
          </div>
        </Accordion>
        {/* </div> */}
      </div>
    </section>
  );
};
export default AskedQuestions;
