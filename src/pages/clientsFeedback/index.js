import "./index.css"
import Slider from "react-slick";
import { feedbackActive } from "../../constant/sliderProps";
import { Container } from "react-bootstrap";
import Logo1 from "../../assets/images/feedback/logo1.png"
import Logo2 from "../../assets/images/feedback/logo2.png"
import Logo3 from "../../assets/images/feedback/logo3.png"
import Author1 from "../../assets/images/feedback/author1.jpg"
import Author2 from "../../assets/images/feedback/author2.jpg"
import Author3 from "../../assets/images/feedback/author3.jpg"
import Man1 from "../../assets/images/feedback/man1.jpg"
import Man2 from "../../assets/images/feedback/man2.jpg"
const ClientsFeedback=()=>{
    return(
        <Container fluid className="px-0">
   <section className="feedback-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s cardBottom">
                <span className="Mission-heading mb-20">Clients Feedback</span>
                <h2>3,000+ Positive reviews by our satisfied clients</h2>
              </div>
            </div>
          </div>
          <Slider {...feedbackActive} className="feedback-active">
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo1} alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author1} alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span className="cardpara">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-4s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo2} alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author2} alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span className="cardpara">Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-6s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo3} alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author3} alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span className="cardpara">Junior Manager</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo1} alt="Logo" />
              </div>
              <h4>On the other hand denounes with indignwy</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author1} alt="Author" />
                <div className="content">
                  <h5>Jonathan B. Bohnert</h5>
                  <span className="cardpara">CEO &amp; Founder</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo2} alt="Logo" />
              </div>
              <h4>Custom programming fores most complex functions</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author2} alt="Author" />
                <div className="content">
                  <h5>Nicholas R. Gomez</h5>
                  <span className="cardpara">Medical Officers</span>
                </div>
              </div>
            </div>
            <div className="feedback-item wow fadeInUp delay-0-2s">
              <div className="author-logo">
                <i className="far fa-quote-right" />
                <img src={Logo3} alt="Logo" />
              </div>
              <h4>We use strategic marketing tactics be proven work.</h4>
              <p>
                Sed ut perspiciatis unde omnis natus error voluptatem
                accusantium dolore laudantuce totam rem aperiam eaque inventore
              </p>
              <div className="feedback-author">
                <img src={Author3} alt="Author" />
                <div className="content">
                  <h5>James R. Lawrence</h5>
                  <span className="cardpara">Junior Manager</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="feedback-shape one">
          <img src={Man1} alt="Man Shape" />
        </div>
        <div className="feedback-shape two">
          <img src={Man2} alt="Man Shape" />
        </div>
      </section>
        </Container>
     
    )
}
export default ClientsFeedback;