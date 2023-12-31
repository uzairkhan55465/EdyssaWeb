import "./index.css"
import Counter from "../../modules/Counter"
import Counter1 from "../../assets/images/shapes/counter1.png"
import Counter2 from "../../assets/images/shapes/counter2.png"
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
const CompanyStatistics = () => {
  return (
    <section className="statistics-area bgc-dark-blue text-white pb-130 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div style={{paddingBottom:"10px"}} className="section-title text-center d-flex justify-content-center">


              <span className='Mission-heading link-primary'>Company Statistics</span>

            </div>
            <div className='text-center  mb-15 pt-2'>
              <h2 className="whiteHead">
                {`We're`} the best web development <br />agency more
                achievement
              </h2>
            </div>

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-6 col-small d-flex flex-column align-items-center">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-2s">
              <i className="flaticon-startup" />

              <Counter end={2365} className="text-white" />
              <span className="counter-title" style={{ fontSize: '31px' }}>Projects complete</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small d-flex flex-column align-items-center">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-4s">
              <i className="flaticon-global" />

              <Counter end={9632} style={{ fontSize: '15px' }} />
              <span className="counter-title" style={{ fontSize: '25px' }}>Trusted Global <br /> Clients</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small d-flex flex-column align-items-center">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-6s">
              <i className="flaticon-rating" />

              <Counter end={8504} />
              <span className="counter-title" style={{ fontSize: '25px' }}>Expert Team <br /> Member</span>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-6 col-small d-flex flex-column align-items-center">
            <div className="counter-item counter-text-wrap wow fadeInUp delay-0-8s">
              <i className="flaticon-trophy" />

              <Counter end={6763} />
              <span className="counter-title" style={{ fontSize: '25px' }}>Projects complete</span>
            </div>
          </div>
        </div>
        <div className="counter-cta mt-65 wow fadeInUp delay-0-2s">
          <h4>Interested ! Let’s work together</h4>

          <a className="theme-btn style-three white-btn">
            Get Started Now <FaAngleDoubleRight className='mt-1 ms-2' />
          </a>

        </div>
      </div>
      <div className="wave-shapes">
        <img
          className="shape one"
          src={Counter1}
          alt="Wave Shape"
        />
        <img
          className="shape two"
          src={Counter2}
          alt="Wave Shape"
        />
      </div>
    </section>
  )
}
export default CompanyStatistics;