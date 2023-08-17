import "./index.css";
import Faqs from "../../../assets/images/faqs/faq-page.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
const FindingHelp = () => {
  return (
    <section className="faq-page-about-area pt-130">
      <div className="container">
        <div className="row large-gap justify-content-center align-items-center pb-115">
          <div className="col-xl-5 col-lg-6">
            <div className="faq-page-content rmb-65 wow fadeInRight delay-0-2s">
              <div className="section-title mb-25">
                <span className="sub-title style-two mb-15">Finding Help</span>
                <h2>How Can We Help</h2>
              </div>
              <p classNameName="pb-4">
                Start building your first prototype in no time. Ogency intuitive
                drag &amp; drop interface gives you all the building blocks that
                you need to get started! No skills required.
              </p>
              <form action="#" className="faq-search-form mt-40 mb-20">
                <label for="search">
                  <AiOutlineSearch style={{ fontSize: "26px" }} />
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Find your category"
                  className="inputfocus"
                />
                <button type="submit">
                  <BiChevronRight style={{ fontSize: "29px" }} />
                </button>
              </form>
              <p>
                <b>Suggestions:</b> Dashboard, Payments, Refunds, Delivery
              </p>
            </div>
          </div>
          <div className="col-lg-6 ps-5">
            <div className="faq-page-image wow fadeInLeft delay-0-2s pss-2">
              <img src={Faqs} alt="FAQs" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};
export default FindingHelp;
