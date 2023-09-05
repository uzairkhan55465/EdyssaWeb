import Aos from "aos";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { TeamsMembers } from "../../constant/TeamMembers";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./style.css";
const PopularServices = ({ title, desc }) => {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);

  return (
    <div style={{padding:"30px 0px 0px 0px "}}>
      <Container>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            paddingTop: "60px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span className="Mission-heading">{title}</span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="d-flex justify-content-center pt-4 section-title"
        >
          <h2>{desc}</h2>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="d-flex justify-content-center"
        >
          <div>
            <div className="row">
              {TeamsMembers?.map((items, id) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={id}>
                  <div className="team-member wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img style={{
                        width: " 100%",
                        height: "160px"
                      }} src={items?.img} alt="Member" />
                    </div>
                    <div className="content d-flex flex-column align-items-center">
                      <h5>{items?.name}</h5>
                      <span className="designation ">{items?.role}</span>

                      <div class="social-style-one">
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
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularServices;
