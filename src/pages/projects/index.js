import {ProjectsCards} from "../../constant/Skills"

import "./index.css"
const Projects=()=>{
    return(
        <section className="project-area pb-100 rel z-1">
        <div className="container-fluid gap-wide">
          
          <div className="row justify-content-center">
            {ProjectsCards?.map((e)=>
                <div className="col-xl-4 col-md-6">
                <div className="project-item wow fadeInUp delay-0-2s">
                  <div className="project-iamge">
                    <img
                      src={e?.img}
                      alt="Project"
                    />
                    <div className="project-over">
                    
                        <a className="details-btn">
                        <i class="far fa-arrow-right"></i> 
                        </a>
                   
                      <h3>Dashboard Design</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      
      </section>
    )
}
export default Projects;