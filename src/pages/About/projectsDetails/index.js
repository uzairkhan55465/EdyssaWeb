import "./index.css"
import Counter from "../../../modules/Counter"
import VideoImg from "../../../assets/images/video-bg.jpg"
import TeamMembers from "../../TeamMembers/TeamMembers"
const ProjetsDetails = () => {
    return (
        <>
            <div class="statistics-area-four rel z-1">
                <div class="container">
                    <div class="statistics-four-counters bgs-cover bgc-lighter projectsBack" >
                        <div class="row medium-gap"><div class="col-xl-3 col-sm-6">
                            <div class="counter-item mt-30 counter-text-wrap wow fadeInLeft delay-0-2s" >
                                <i class="flaticon-startup"></i>
                                <Counter end={2365} />
                                <span class="counter-title">Projects complete</span></div></div>
                            <div class="col-xl-3 col-sm-6">
                                <div class="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-4s" ><i class="flaticon-global">
                                </i><Counter end={9632} /><span class="counter-title">Trusted Global Clients</span></div></div><div class="col-xl-3 col-sm-6"><div class="counter-item mt-20 counter-text-wrap wow fadeInLeft delay-0-6s" ><i class="flaticon-rating"></i>
                                    <Counter end={2365} /><span class="counter-title">Expert Team Member</span></div></div><div class="col-xl-3 col-sm-6"><div class="counter-item for-margin counter-text-wrap wow fadeInLeft delay-0-8s" ><i class="flaticon-trophy"></i><Counter end={6763} />
                                        <span class="counter-title">Projects complete</span></div>
                            </div></div></div></div></div>




            <section class="video-area bgc-black pt-250 mb-5">
                <div class="container">
                    <div class="row medium-gap align-items-end pt-80"><div class="col-lg-6">
                        <div class="video-part rmb-65 wow fadeInRight delay-0-2s" ><img src={VideoImg} alt="Video" />
                            <a href="https://www.youtube.com/watch?v=9Y7ma241N8k" class="mfp-iframe video-play" tabindex="-1">
                                <i class="fas fa-play"></i></a></div>
                    </div><div class="col-lg-6"><div class="video-content text-white pb-95 rpb-115 wow fadeInLeft delay-0-2s pt-3" >
                        <div class="section-title mb-30 ">
                            <h1 className="text-white mt-2">25 years of experience in this world, being the first and foremost choice of business people.</h1></div
                        ><ul class="list-style-three mt-3"><li>An abundance of resources</li><li>Add advanced features</li><li>Support that Helps</li>
                            <li>Edit your mobile view</li><li>State of the art security</li><li>Optimize search engines</li></ul></div>
                        </div></div></div></section>
            <TeamMembers />
        </>

    );
}
export default ProjetsDetails;