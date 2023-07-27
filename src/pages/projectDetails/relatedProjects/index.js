import "./index.css"
import Project2 from "../../../assets/images/projects/project-three2.jpg"
import Project3 from "../../../assets/images/projects/project-three3.jpg"
import Project4 from "../../../assets/images/projects/project-three1.jpg"
import Slider from "react-slick";
import {BsArrowRight}  from "react-icons/bs"
const RelatedProjects = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <section class="related-project-area pt-110 pb-130 rel z-1"><div class="container">
            <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s" >
                <span class="sub-title style-two mb-15">Pre-made Template</span>
                <h2>Related Projects</h2></div></div>
            <div class="container">
                <Slider {...settings}>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project3} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project2} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project4} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project3} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project2} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                    <div className="col-4 pe-4">
                    <div class="project-item style-three" tabindex="-1" ><div class="project-iamge"><img src={Project4} alt="Project"/><div class="project-over"><a class="details-btn" href="/project-details"><BsArrowRight/></a></div></div><div class="project-content"></div></div>
                    </div>
                </Slider>

            </div>




        </section>
    )
}
export default RelatedProjects