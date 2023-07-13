import Logo from "../../../assets/images/logo-three.png"
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaBehance} from "react-icons/fa"
import "./index.css"
const ContactFooter = () => {
    return (
        <footer class="main-footer pt-80">
            <div class="container">
                <div class="row justify-content-xl-between justify-content-center">
                    <div class="col-xl-4 col-lg-5 col-md-6">
                        <div class="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s" >
                            <div class="footer-logo mb-25">
                                <a href="/"><img src={Logo} alt="Logo" />
                                </a></div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremq dantium, totam rem aperiam eaqu quae ab illo inventore veritatis et quasi architecto beatae</p><div class="social-style-two pt-2"><a href="#"><FaFacebookF/></a><a href="#"><FaTwitter/></a><a href="#"><FaLinkedinIn/></a><a href="#"><FaBehance/></a></div>
                        </div></div>
                    <div class="col-xl-4 col-md-6">
                        <div class="footer-widget widget_nav_menu wow fadeInUp delay-0-4s"><h4 class="footer-title pt-2 pb-4">Quick Links</h4><ul class="list-style-two"><li><a href="/service-details">Wed Design (UI/UX)</a></li><li><a href="/about">About company</a></li><li><a href="/service-details">Web development</a></li><li><a href="/team">Meet our teams</a></li><li><a href="/service-details">SEO Optimization</a></li><li><a href="/service-details">Case Stories</a></li><li><a href="/service-details">Product Engineering</a></li><li><a href="/blog">Latest News</a></li><li><a href="/service-details">Technical Support</a></li>
                            <li><a href="/contact">Contact</a></li><li><a href="/service-details">Landing Pages Design</a></li>
                        </ul></div></div>
                    <div class="col-xl-4 col-lg-6 col-md-8">
                        <div class="footer-widget widget_newsletter wow fadeInUp delay-0-6s" ><h4 class="footer-title">Newsletter</h4><p>Sing up to get more every updates</p><form action="#"><input type="email" placeholder="Enter email" />
                            <button class="theme-btn">Subscribe Now <i class="fas fa-angle-double-right"></i></button>
                        </form></div></div></div></div><div class="footer-bottom mt-30 pt-25 pb-10"><div class="container">
                            <div class="row align-items-center"><div class="col-lg-6"><div class="copyright-text text-center text-lg-start">
                                <p>© Copyright 2022 Oxence. All right reserved</p></div></div>
                                <div class="col-lg-6"><div class="footer-bottom-menu mb-10 text-center text-lg-end"><ul>
                                    <li><a href="#">Setting &amp; Privacy</a></li><li><a href="#">About</a></li><li><a href="#">Faqs</a></li></ul></div></div></div></div></div></footer>
    )
}
export default ContactFooter