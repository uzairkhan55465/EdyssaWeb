import Project from "../../../assets/images/projects/project-details.jpg";
import Previous from "../../../assets/images/projects/prev-project.jpg";
import Next from "../../../assets/images/projects/nex-project.jpg";
import { FaEllipsisVertical } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import "./index.css";
const ProjectsAnimations = () => {
  return (
    <section className="project-details-area pt-130 rel z-1">
      <div className="container">
        <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
          <h2>3D Creative Illustration Design</h2>
          <span className="sub-title-two">Design, Branding</span>
        </div>
        <div className="details-image mb-55 wow fadeInUp delay-0-3s">
          <img src={Project} alt="Project Details" style={{ width: "100%" }} />
        </div>
        <div className="row pb-25">
          <div className="col-xl-5 col-lg-4">
            <h4 className="title mb-15 rmb-30">Project Information</h4>
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="row row-cols-lg-4 row-cols-2">
              <div className="col">
                <h5>Category</h5>
                <span className="sub-title-two mb-15">
                  3D Illustration <br />
                  Isometric Definition
                </span>
              </div>
              <div className="col">
                <h5>Clients</h5>
                <span className="sub-title-two mb-15">
                  Willo Comapny <br />
                  New York
                </span>
              </div>
              <div className="col">
                <h5>Date</h5>
                <span className="sub-title-two mb-15">25 July 2022</span>
              </div>
              <div className="col">
                <h5>Duration</h5>
                <span className="sub-title-two mb-15">160 Hours</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4 className="title mt-55 mb-15">Project Details</h4>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem
        </p>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because
        </p>
        <hr className="mt-50" />
        <div className="next-prev-project py-65">
          <div className="prev-project wow fadeInLeft delay-0-2s">
            <div className="image">
              <img src={Previous} alt="Project" />
            </div>
            <div className="content">
              <h5>
                <a href="/project-details">Dashboard Design</a>
              </h5>
              <span className="category">Creative, Branding</span>
              <a className="read-more" href="/project-details">
                View Details <BsArrowRight className="ms-2" />
              </a>
            </div>
          </div>
          <a className="show-all" href="/projects">
            <FaEllipsisVertical style={{ width: "6px!important" }} />
            <FaEllipsisVertical
              style={{ width: "6px!important", marginLeft: "-17px" }}
            />
            <FaEllipsisVertical
              style={{ width: "6px!important", marginLeft: "-17px" }}
            />
          </a>
          <div className="next-project wow fadeInRight delay-0-2s">
            <div className="image">
              <img src={Next} alt="Project" />
            </div>
            <div className="content">
              <h5>
                <a href="/project-details">Creative Pattern</a>
              </h5>
              <span className="category">Mokeup, Branding</span>
              <a className="read-more" href="/project-details">
                View Details <BsArrowRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};
export default ProjectsAnimations;
