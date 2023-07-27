import "./index.css"
import {TiTick} from "react-icons/ti"
import {BsPlayFill} from "react-icons/bs"
import Women from "../../../assets/images/about/ww-do-two1.jpg"
import Img2 from "../../../assets/images/about/ww-do-two2.jpg"
import Img3 from "../../../assets/images/about/ww-do-two3.jpg"
const DigitalTeam = () => {
    return (
        <section class="ww-do-two-area py-130 rel z-1">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-5 col-lg-6">
                        <div class="ww-do-two-content rmb-65 wow fadeInUp delay-0-2s" ><div class="section-title mb-30">
                            <span class="sub-title style-two mb-15">What We Do</span>
                            <h2>We are Professional Digital Team</h2></div>
                            <p>Start from scratch or choose from over 500 designer-made templates that you can fully customize using the drag and drop website builder. Make your site come to life with video backgrounds</p><div class="row pt-15"><div class="col-sm-6">
                                <div class="feature-item-two border-right pe-sm-3"><div class="icon"><TiTick style={{fontSize:"22px"}}/></div><h5>Customize Website</h5><p>Pick a template customize anything answer or question website design just you.</p></div></div><div class="col-sm-6"><div class="feature-item-two color-two"><div class="icon"><TiTick style={{fontSize:"22px"}}/></div><h5>Premium Design</h5><p>Start your own blog, add an online store and accept bookings online always.</p></div></div></div>
                            <div class="ww-do-btns d-flex">
                                <a class="theme-btn mt-15" href="/about">Create Your Website <i class="fas fa-angle-double-right"></i></a>
                                <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" class="mfp-iframe video-play-text mt-15"><i class="fas fa-play"></i> <span>Watch Videos</span></a></div></div></div><div class="col-lg-6"><div class="ww-do-two-images rel"><div class="row"><div class="col-sm-7 offset-1"><img class="image-one wow fadeInUp delay-0-4s" src={Women} alt="What We Do" /></div>
                            <div class="col-sm-4 imagees"><img class="image-two wow fadeInUp delay-0-6s image1" src={Img2} alt="What We Do" />
                                <img class="image-three wow fadeInUp delay-0-8s image2" src={Img3} alt="What We Do"
                                /></div>
                            </div>
                            <div class="year-of-experience wow zoomIn delay-0-6s" ><span class="number">25</span>Years Of Web Experience</div>
                            </div></div></div></div></section>
    )
}
export default DigitalTeam