import "./index.css"
import { FaAngleDoubleRight } from 'react-icons/fa';
const WebsiteDesign = () => {
    return (
        <section class="call-to-action-area bgc-black pt-80 pb-50">
            <div class="container">
                <div class="row justify-content-between align-items-center">
                    <div class="col-xl-7 col-lg-9">
                        <div class="section-title text-white mb-25 wow fadeInUp delay-0-2s" >
                            <h2 className="text-white">Let’s Design Your New Website</h2>
                            <p>Do you want to have a website that stands out and impresses your clients? Then we are ready to help! Click the button below to contact us and discuss your ideas.</p></div>
                    </div><div class="col-lg-3 text-lg-end">
                        <a class="theme-btn style-two mb-30 wow fadeInUp delay-0-4s" href="/contact" >Let’s Get Started
                        <FaAngleDoubleRight className=' ms-2' /></a></div>
                </div></div></section>
    )
}
export default WebsiteDesign