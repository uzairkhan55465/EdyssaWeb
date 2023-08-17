import "./index.css";
import Blog1 from "../../../assets/images/blog/blog-grid1.jpg";
import Blog2 from "../../../assets/images/blog/blog-grid2.jpg";
import Blog3 from "../../../assets/images/blog/blog-grid3.jpg";
import Blog4 from "../../../assets/images/blog/blog-grid4.jpg";
import Blog5 from "../../../assets/images/blog/blog-grid5.jpg";
import Blog6 from "../../../assets/images/blog/blog-grid6.jpg";
import Blog7 from "../../../assets/images/blog/blog-grid7.jpg";
import Blog8 from "../../../assets/images/blog/blog-grid8.jpg";
import Blog9 from "../../../assets/images/blog/blog-grid9.jpg";
import Bloguser from "../../../assets/images/blog/blog-author.jpg";
import { SlCalender } from "react-icons/sl";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import DesignWebsite from "../../../Components/WebsiteDesign/index";
const BlogCards = () => {
  return (
    <>
      <section className="blog-grid-area py-130 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src={Blog1} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    7 Reasons Why You Should Invest in Ecommerce
                    </a>
                  </h5>
                  <p>
                  In the dynamic business arena, a strong online presence is vital, notably through ecommerce, revolutionizing businesses regardless of size, fostering growth, and success. This article highlights seven persuasive reasons to embrace ecommerce investment.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src={Blog2} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Global Reach
                    </a>
                  </h5>
                  <p>
                  In contrast to an actual store with geological constraints, a web-based business stage permits you to contact a worldwide crowd. Your products or services can be accessed by potential customers from around the world, breaking down barriers and expanding your market reach.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src={Blog3} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    24/7 Availability
                    </a>
                  </h5>
                  <p>
                  Ecommerce stores don't close. Your online storefront is open 24/7, providing customers the convenience to browse and shop at any time that suits them. This accessibility enhances customer experience and potentially increases sales.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src={Blog4} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Cost Efficiency
                    </a>
                  </h5>
                  <p>
                  Setting up and maintaining an ecommerce website is often more cost-effective than establishing a physical store. With reduced overhead costs and the ability to automate various processes, you can allocate your resources more efficiently.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src={Blog5} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Personalized Shopping Experience
                    </a>
                  </h5>
                  <p>
                  Ecommerce platforms enable you to gather data about your customers' preferences and behaviors. This data can be used to offer personalized recommendations and tailored shopping experiences, enhancing customer satisfaction and loyalty.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src={Blog6} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Scalability
                    </a>
                  </h5>
                  <p>
                  As your business grows, so can your ecommerce store. With the right platform and strategies in place, you can seamlessly scale your operations, add new products, and expand to new markets without the constraints of physical limitations.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s d-none animated">
                <div className="image">
                  <img src={Blog7} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Data-Driven Insights
                    </a>
                  </h5>
                  <p>
                  Ecommerce provides you with valuable data and insights into customer behavior, sales trends, and more. This data-driven approach allows you to make informed decisions, refine your strategies, and optimize your offerings for better results.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s d-none animated">
                <div className="image">
                  <img src={Blog8} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Flexibility and Innovation
                    </a>
                  </h5>
                  <p>
                  Ecommerce platforms offer flexibility for experimenting with new ideas and innovations. You can easily introduce new products, test marketing strategies, and adapt to changing market dynamics, all with reduced time and effort compared to traditional methods.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s d-none animated">
                <div className="image">
                  <img src={Blog9} alt="Blog Grid" />
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li>
                      <img src={Bloguser} alt="Author" />
                      <a href="#">Somalia D. Silva</a>
                    </li>
                    <li>
                      <SlCalender classNameName="me-2" />
                      <a href="#"> 25 June 2022</a>
                    </li>
                  </ul>
                  <h5>
                    <a href="/blog-details">
                    Conclusion
                    </a>
                  </h5>
                  <p>
                  Investing in ecommerce isn't just about staying current; it's about harnessing the power of digital technology to drive your business forward. From expanding your market reach to enhancing customer experiences, the benefits are undeniable. As the business landscape continues to evolve, embracing ecommerce can position your brand as a frontrunner in your industry. The opportunities are vast, and the potential for growth is substantial – making ecommerce a strategic investment that can yield significant returns for your business.
                  </p>
                  <a className="read-more" href="/blog-details">
                    Read More <i className="far fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className=" mt-5 pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s">
            <li className="page-item disabled">
              <a className="page-link" href="#">
                <MdArrowBackIosNew />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                <MdArrowForwardIos />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <DesignWebsite />
    </>
  );
};
export default BlogCards;
