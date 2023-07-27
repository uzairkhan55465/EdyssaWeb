import "./index.css"
import Blog1 from "../../../assets/images/blog/blog-grid1.jpg"
import Blog2 from "../../../assets/images/blog/blog-grid2.jpg"
import Blog3 from "../../../assets/images/blog/blog-grid3.jpg"
import Blog4 from "../../../assets/images/blog/blog-grid4.jpg"
import Blog5 from "../../../assets/images/blog/blog-grid5.jpg"
import Blog6 from "../../../assets/images/blog/blog-grid6.jpg"
import Blog7 from "../../../assets/images/blog/blog-grid7.jpg"
import Blog8 from "../../../assets/images/blog/blog-grid8.jpg"
import Blog9 from "../../../assets/images/blog/blog-grid9.jpg"
import Bloguser from "../../../assets/images/blog/blog-author.jpg"
import { SlCalender } from "react-icons/sl"
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md"
import DesignWebsite from "../../../Components/WebsiteDesign/index"
const BlogCards = () => {
    return (
        <>
            <section className="blog-grid-area py-130 rel z-1"><div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6"><div className="blog-grid-item wow fadeInUp delay-0-2s" ><div className="image">
                        <img src={Blog1} alt="Blog Grid" />
                    </div><div className="blog-content"><ul className="blog-meta"><li><img src={Bloguser} alt="Author" />
                        <a href="#">Somalia D. Silva</a></li><li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul><h5>
                                <a href="/blog-details">How To Build Group Chat App With Vanilla JS, Twilio And Node.js</a></h5>
                            <p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p>
                            <a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div>
                    </div><div className="col-xl-4 col-md-6"><div className="blog-grid-item wow fadeInUp delay-0-4s"><div className="image">
                        <img src={Blog2} alt="Blog Grid" /></div><div className="blog-content"><ul className="blog-meta">
                            <li><img src={Bloguser} alt="Author" /><a href="#">Somalia D. Silva</a>
                            </li><li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul><h5>
                                <a href="/blog-details">Smashing Podcast Episode 47 With Sara Soueidan Does Accessibility</a></h5>
                            <p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p><a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div></div><div className="col-xl-4 col-md-6">
                        <div className="blog-grid-item wow fadeInUp delay-0-6s" ><div className="image">
                            <img src={Blog3} alt="Blog Grid" /></div><div className="blog-content"><ul className="blog-meta">
                                <li><img src={Bloguser} alt="Author" />
                                    <a href="#">Somalia D. Silva</a></li><li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a>
                                </li></ul><h5><a href="/blog-details">Manage Accessible Design System With CSS Color-Contrast</a></h5>
                                <p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p>
                                <a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i>
                                </a></div></div></div><div className="col-xl-4 col-md-6">
                        <div className="blog-grid-item wow fadeInUp delay-0-2s" ><div className="image">
                            <img src={Blog4} alt="Blog Grid" />
                        </div><div className="blog-content"><ul className="blog-meta"><li><img src={Bloguser} alt="Author" />
                            <a href="#">Somalia D. Silva</a></li><li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul>
                                <h5><a href="/blog-details">How To Build Group Chat App With Vanilla JS, Twilio And Node.js</a></h5>
                                <p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p>
                                <a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right">
                                </i></a></div></div></div><div className="col-xl-4 col-md-6">
                        <div className="blog-grid-item wow fadeInUp delay-0-4s" ><div className="image"><img src={Blog5} alt="Blog Grid" />
                        </div><div className="blog-content"><ul className="blog-meta"><li><img src={Bloguser} alt="Author" />
                            <a href="#">Somalia D. Silva</a></li>
                            <li><SlCalender classNameName="me-2" />
                                <a href="#"> 25 June 2022</a></li></ul><h5><a href="/blog-details">Smashing Podcast Episode 47 With Sara Soueidan Does Accessibility</a>
                                </h5><p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p><a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div></div><div className="col-xl-4 col-md-6">
                        <div className="blog-grid-item wow fadeInUp delay-0-6s" ><div className="image"><img src={Blog6} alt="Blog Grid" /></div>
                            <div className="blog-content"><ul className="blog-meta"><li><img src={Bloguser} alt="Author" />
                                <a href="#">Somalia D. Silva</a></li>
                                <li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul><h5>
                                    <a href="/blog-details">Manage Accessible Design System With CSS Color-Contrast</a>
                                </h5><p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p>
                                <a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div>
                        </div></div><div className="col-xl-4 col-md-6"><div className="blog-grid-item wow fadeInUp delay-0-2s d-none animated" >
                            <div className="image"><img src={Blog7} alt="Blog Grid" /></div><div className="blog-content"><ul className="blog-meta"><li>
                                <img src={Bloguser} alt="Author" /><a href="#">Somalia D. Silva</a></li><li><i className="far fa-calendar-alt">
                                </i><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul>
                                <h5><a href="/blog-details">How To Build Group Chat App With Vanilla JS, Twilio And Node.js</a></h5><p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p><a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div>
                    </div><div className="col-xl-4 col-md-6"><div className="blog-grid-item wow fadeInUp delay-0-4s d-none animated" ><div className="image">
                        <img src={Blog8} alt="Blog Grid" /></div><div className="blog-content"><ul className="blog-meta"><li>
                            <img src={Bloguser} alt="Author" /><a href="#">Somalia D. Silva</a></li>
                            <li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul><h5><a href="/blog-details">Smashing Podcast Episode 47 With Sara Soueidan Does Accessibility</a></h5><p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p>
                            <a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div></div>
                    <div className="col-xl-4 col-md-6"><div className="blog-grid-item wow fadeInUp delay-0-6s d-none animated" ><div className="image">
                        <img src={Blog9} alt="Blog Grid" /></div><div className="blog-content"><ul className="blog-meta">
                            <li><img src={Bloguser} alt="Author" /><a href="#">Somalia D. Silva</a></li><li><SlCalender classNameName="me-2" /><a href="#"> 25 June 2022</a></li></ul><h5><a href="/blog-details">Manage Accessible Design System With CSS Color-Contrast</a></h5>
                            <p>Sit amet consectetur adipiscin eiusmod temor incididunt labore dolore magnaes epse</p><a className="read-more" href="/blog-details">Read More <i className="far fa-arrow-right"></i></a></div></div></div></div><ul className=" mt-5 pagination flex-wrap justify-content-center wow fadeInUp delay-0-2s" >
                    <li className="page-item disabled"><a className="page-link" href="#"><MdArrowBackIosNew /></a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li><li className="page-item "><a className="page-link" href="#">2</a></li>
                    <li className="page-item "><a className="page-link" href="#"><MdArrowForwardIos /></a></li></ul></div></section>
            <DesignWebsite />
        </>

    )
}
export default BlogCards