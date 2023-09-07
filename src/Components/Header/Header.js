import React, { useState } from "react";
import Logo from "../../assets/images/edyssa.png";
import "./style.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMailOpen } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { AiFillDownCircle } from "react-icons/ai";
const Header = () => {
  // const [opendata, setOpendata] = useState(false);

  // const toggleMenu = () => {
  //   setOpendata(!open);

  // };
  // console.log("data", setOpendata)



  const navigate = useNavigate();
  const [menu1, setMenu1] = useState(0);
  const [menu2, setMenu2] = useState(0);
  const [menu3, setMenu3] = useState(0);
  const [menu4, setMenu4] = useState(0);
  const [open, setOpen] = useState(0);

  const OpenHandler = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const OpenSubMenu = (value) => {
    if (menu1 === 0) {
      setMenu1(value);
    } else {
      setMenu1(0);
    }
    if (menu2 === 0) {
      setMenu2(value);
    } else {
      setMenu2(0);
    }
    if (menu3 === 0) {
      setMenu3(value);
    } else {
      setMenu3(0);
    }
    if (menu4 === 0) {
      setMenu4(value);
    } else {
      setMenu4(0);
    }
  };
  const handleMouseEnter = (menunumber) => {
    switch (menunumber) {
      case 1:
        setMenu1(true);
        break;
      case 2:
        setMenu2(true);
        break;
      case 3:
        setMenu3(true);
        break;
      case 4:
        setMenu4(true);
        break;
      default:
        break;
    }
  };

  const handleMouseLeave = (menunumber) => {
    switch (menunumber) {
      case 1:
        setMenu1(false);
        break;
      case 2:
        setMenu2(false);
        break;
      case 3:
        setMenu3(false);
        break;
      case 4:
        setMenu4(false);
        break;
      default:
        break;
    }
  };

  // const handleMouseLeave = () => {
  //   setMenu1(false);
  //   setMenu2(false);
  //   setMenu3(false);
  //   setMenu4(false);
  // };

  const iconStyle = {
    color: "blue !important",
  };

  return (
    <div className="small-center ">
      <div id="header-sticky" className="tp-it-header__main p-relative pt-4 pb-4">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-2 col-3 ps-4 pe-4">
              <div class="logo">
                <a href="index.html">
                  <img src={Logo} alt="logo" className="logosm" />
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-8  d-none d-xl-block d-lg-block d-md-block ">
              <ul className="menu d-flex justify-content-around">
                <li className="menu-item" onClick={() => { OpenSubMenu(1); navigate("/") }}>
                  <a className="about-hover">HOME</a>
                </li>

                <li className="menu-item" onClick={() => navigate("/about")}>
                  <a className="about-hover">ABOUT</a>
                </li>

                <li className="menu-item">
                  <a href="#" onClick={() => OpenSubMenu(3)}>
                    PAGES
                  </a>

                  {menu3 === true ? (
                    <AiOutlineMinus
                      style={{ color: "red", fontWeight: "100" }}
                    />
                  ) : (
                    <AiOutlinePlus
                      style={{ color: "red", fontWeight: "100" }}
                    />
                  )}

                  {menu3 === 3 && (
                    <div className="mega-menu dropdowntwo dropdown_menu dropdown_menu--animated dropdown_menu-7">
                      <ul>

                        <li>
                          <a
                            onClick={() => {
                              navigate("/about");
                              setMenu3(false);
                            }}
                          >
                            About Me
                          </a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/faqs");
                            setMenu3(false);
                          }}>FAQS</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/services");
                            setMenu3(false);
                          }}>Services</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/pricing");
                            setMenu3(false);
                          }}>Pricing</a>
                        </li>
                        <li>
                          <a onClick={() => {
                            navigate("/project-details-page");
                            setMenu3(false);
                          }}>
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                <li
                  className="menu-item"
                  onClick={() => navigate("/contactus")}
                >
                  <a className="about-hover">Contact</a>
                </li>
                {/* Repeat the same pattern for other menu items */}
              </ul>

              <ul className="text-center">

              </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-2  d-none d-xl-block d-lg-block  d-md-block align-items-center">
              <div class="d-flex justify-content-end adject__infoone">
                <div class="tp-it-header__main-cta">
                  <p className="mb-0">
                    <span style={{ fontWeight: "300", fontSize: "1rem" }}>
                      <HiMailOpen style={{ color: "#01c9f5", fontSize: "20px" }} />{" "}
                      SUPPORT EMAIL
                    </span>
                  </p>
                  <p>
                    {" "}
                    <a href="mailto:info@gencio.com" className="infoo">
                      info@edyssa.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-9 d-xl-none d-lg-none d-md-none">
              <div class="tp-header-search-nav d-flex justify-content-end">
                <div>
                  <GiHamburgerMenu onClick={() => OpenHandler()} />
                </div>
                {open && (
                  <div className="d-flex justify-content-center hamburger">
                    <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                      <a href="#">HOME</a>
                      <AiFillDownCircle />
                    </div>
                    <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                      <a href="#" onClick={() => navigate("/about")}>
                        ABOUT
                      </a>
                      <AiFillDownCircle />
                    </div>

                  </div>
                )}



                {open === true && (
                  <div className="d-flex justify-content-center">
                    <div
                      class="navbar-collapse collapse show hamburger"
                      id="navbarNavAltMarkup"
                    >
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a href="#">HOME</a>
                        <AiFillDownCircle />
                        <a href="#" onClick={() => { handleLinkClick() }}>HOME</a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a href="#" onClick={() => { navigate("/about"); handleLinkClick(); }}>
                          ABOUT
                        </a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a onClick={() => {
                          navigate("/faqs");
                          handleLinkClick();
                        }}>FAQS</a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a onClick={() => {
                          navigate("/services");
                          handleLinkClick();
                        }}>Services</a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a onClick={() => {
                          navigate("/pricing");
                          setMenu3(false);
                        }}>Pricing</a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a href="#" onClick={() => navigate("/contactus")}>
                          CONTACT US
                        </a>
                        <AiFillDownCircle />
                      </div>
                      <div className="d-flex justify-content-between ms-3 me-3 pt-2">
                        <a onClick={() => {
                          navigate("/projects-details");
                          handleLinkClick(); // Close menu on link click
                        }}>Project Details</a>
                        <AiFillDownCircle />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
