import "./index.css";
import ClientsFeedback from "../../clientsFeedback/index";
import WebsiteDesign from "../../ContactUs/websiteDesign";
import ContactFooter from "../../ContactUs/contactFooter/index";
const AboutCards = () => {
  return (
    <>
      <section className="freature-area-six rel z-2">
        <div className="container">
          <div className="feature-six-inner bgs-cover bgc-primary">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item-three wow fadeInRight delay-0-3s">
                  <i className="flaticon-technical-support"></i>
                  <div className="content">
                    <h4>Customize your site</h4>
                    <p>
                      Tailor your website to perfection with our expert customization services. Achieve your unique online vision effortlessly.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-two wow fadeInRight delay-0-5s">
                  <i className="flaticon-app-development"></i>
                  <div className="content">
                    <h4>Edit your mobile view</h4>
                    <p>
                      Enhance mobile user experiences with our tailored design adjustments. Seamlessly optimize your site for on-the-go browsing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-three wow fadeInRight delay-0-4s">
                  <i className="flaticon-settings"></i>
                  <div className="content">
                    <h4>Add advanced features</h4>
                    <p>
                      Elevate your website's functionality with advanced features. Unlock new capabilities to engage and impress your online audience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item-three color-four wow fadeInRight delay-0-6s">
                  <i className="flaticon-optimization"></i>
                  <div className="content">
                    <h4>Optimize for search engines</h4>
                    <p>
                      Boost your online visibility and traffic. Let us optimize your website for search engines and get noticed by your target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsFeedback />
      <WebsiteDesign />

      {/* <ContactFooter /> */}
    </>
  );
};
export default AboutCards;
