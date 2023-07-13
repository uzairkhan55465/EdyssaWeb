import "./index.css"
import Location1Img from "../../../assets/images/contact/location1.png"
import Location2 from "../../../assets/images/contact/location2.png"
import Location3 from "../../../assets/images/contact/location3.png"
import { FaEnvelopeOpenText } from "react-icons/fa"
import { TfiLocationPin } from "react-icons/tfi"
import { MdCall } from "react-icons/md"
const ContactCards = () => {
    return (
        <>
          <section className="our-location-address-area rel z-1">
            <div className="container">
                <div className="col-lg-10 mx-auto">
                    <div className="row medium-gap justify-content-center">
                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="location-address-item wow fadeInUp delay-0-2s">
                                <div className="top-part">
                                    <img
                                        src={Location1Img}
                                        alt="Location"
                                    />
                                    <h5>New York</h5>
                                </div>
                                <div className="bottom-part">
                                    <ul>
                                        <li>
                                            <TfiLocationPin style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> 55 Main Street,
                                            New York
                                        </li>
                                        <li>
                                            <FaEnvelopeOpenText style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} />{" "}
                                            support@gmail.com
                                        </li>
                                        <li>
                                            < MdCall style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> +000 (123) 456 88
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="location-address-item wow fadeInUp delay-0-4s">
                                <div className="top-part">
                                    <img
                                        src={Location2}
                                        alt="Location"
                                    />
                                    <h5>Australia Capital</h5>
                                </div>
                                <div className="bottom-part">
                                    <ul>
                                        <li>
                                            <TfiLocationPin style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> 55 Main Street,
                                            New York
                                        </li>
                                        <li>
                                            <FaEnvelopeOpenText style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} />{" "}
                                            support@gmail.com
                                        </li>
                                        <li>
                                            < MdCall style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> +000 (123) 456 88
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 px-4">
                            <div className="location-address-item wow fadeInUp delay-0-6s">
                                <div className="top-part">
                                    <img
                                        src={Location3}
                                        alt="Location"
                                    />
                                    <h5>South Africa</h5>
                                </div>
                                <div className="bottom-part">
                                    <ul>
                                        <li>
                                            <TfiLocationPin style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> 55 Main Street,
                                            New York
                                        </li>
                                        <li>
                                            <FaEnvelopeOpenText style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} />{" "}
                                            support@gmail.com
                                        </li>
                                        <li>
                                            < MdCall style={{ color: "#0066ff", fontSize: "20px", marginRight: '10px' }} /> +000 (123) 456 88
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
        </>
      
    )
}
export default ContactCards