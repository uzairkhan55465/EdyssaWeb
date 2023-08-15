import "./index.css";
import Wave1 from "../../../assets/images/shapes/pricing-bg-wave1.png";
import { FaAngleDoubleRight } from "react-icons/fa";
const BlogCards = () => {
  return (
    <>
      <section class="pricing-area-three pt-130 pb-165 rel z-1">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-10">
              <div class="pricing-plan-content mb-65 wow fadeInUp delay-0-2s">
                <div class="section-title mb-30">
                  <span class="sub-title style-two mb-20">Pricing Plan</span>
                  <h2>Choose Your Best Pricing Plan</h2>
                </div>
                <p>
                  Start building your first prototype in no time. Ogency
                  intuitive drag &amp; drop interface gives you all the building
                  blocks that you need to get started! No skills required.
                </p>
                <div class="nav pricing-tab mt-15 nav" role="tablist">
                  <li>
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#monthly"
                      role="tab"
                      data-rb-event-key="monthly"
                      aria-selected="true"
                      class="nav-link nav-link active"
                    >
                      Monthly
                    </button>
                  </li>
                  <li>
                    <button
                      data-bs-toggle="tab"
                      data-bs-target="#yearly"
                      role="tab"
                      data-rb-event-key="yearly"
                      aria-selected="false"
                      class="nav-link nav-link"
                    >
                      Yearly
                    </button>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              <div class="tab-content wow fadeInUp delay-0-4s tab-content">
                <div
                  role="tabpanel"
                  aria-hidden="false"
                  class="fade tab-pane fade tab-pane active show"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="pricing-plan-three">
                        <span class="badge">popular</span>
                        <h4>Basic Plan</h4>
                        <ul class="list-style-two">
                          <li>Landing page design (10 pages)</li>
                          <li>HTML+CSS design (12 pages)</li>
                          <li>Social Media Marketing</li>
                          <li>Domin hosting provider</li>
                          <li>Online support (24/7)</li>
                          <li>WordPres development</li>
                        </ul>
                        <div class="price-and-btn">
                          <div class="content">
                            <span class="price">248</span>
                            <span class="save">
                              Save<span> 25%</span>
                            </span>
                            <a class="theme-btn style-three" href="/pricing">
                              Choose Package{" "}
                              <FaAngleDoubleRight className=" ms-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-plan-three">
                        <span class="badge">popular</span>
                        <h4>Ultra Plan</h4>
                        <ul class="list-style-two">
                          <li>Landing page design (10 pages)</li>
                          <li>HTML+CSS design (12 pages)</li>
                          <li>Social Media Marketing</li>
                          <li>Domin hosting provider</li>
                          <li>Online support (24/7)</li>
                          <li>WordPres development</li>
                        </ul>
                        <div class="price-and-btn">
                          <div class="content">
                            <span class="price">548</span>
                            <span class="save">
                              Save<span> 25%</span>
                            </span>
                            <a class="theme-btn style-three" href="/pricing">
                              Choose Package{" "}
                              <FaAngleDoubleRight className=" ms-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  aria-hidden="true"
                  class="fade tab-pane fade yearly tab-pane"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="pricing-plan-three">
                        <span class="badge">popular</span>
                        <h4>Basic Plan</h4>
                        <ul class="list-style-two">
                          <li>Landing page design (10 pages)</li>
                          <li>HTML+CSS design (12 pages)</li>
                          <li>Social Media Marketing</li>
                          <li>Domin hosting provider</li>
                          <li>Online support (24/7)</li>
                          <li>WordPres development</li>
                        </ul>
                        <div class="price-and-btn">
                          <div class="content">
                            <span class="price">480</span>
                            <span class="save">
                              Save<span> 25%</span>
                            </span>
                            <a class="theme-btn style-three" href="/pricing">
                              Choose Package{" "}
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-plan-three">
                        <span class="badge">popular</span>
                        <h4>Ultra Plan</h4>
                        <ul class="list-style-two">
                          <li>Landing page design (10 pages)</li>
                          <li>HTML+CSS design (12 pages)</li>
                          <li>Social Media Marketing</li>
                          <li>Domin hosting provider</li>
                          <li>Online support (24/7)</li>
                          <li>WordPres development</li>
                        </ul>
                        <div class="price-and-btn">
                          <div class="content">
                            <span class="price">848</span>
                            <span class="save">
                              Save<span> 25%</span>
                            </span>
                            <a class="theme-btn style-three" href="/pricing">
                              Choose Package{" "}
                              <i class="fas fa-angle-double-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wave-shapes">
          <img class="shape one" src={Wave1} alt="Wave Shape" />
        </div>
      </section>
    </>
  );
};
export default BlogCards;
